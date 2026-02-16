/**
 * Service de gestion de stock
 * 
 * Ce service implémente toute la logique métier pour la gestion du stock :
 * - Calcul du stock actuel basé sur les mouvements
 * - Validation stricte des règles métier
 * - Transactions atomiques pour garantir la cohérence
 * - Traçabilité complète des mouvements
 * 
 * Règles métier :
 * 1. Le stock actuel = stock initial + somme des mouvements validés
 * 2. Aucune sortie ne peut créer un stock négatif
 * 3. Tous les mouvements doivent être historisés
 * 4. Les opérations sont atomiques (transaction DB)
 * 5. Les erreurs sont explicites et bloquantes
 */

const { prisma, usePrisma } = require('../config/database');

/**
 * Types de mouvement possibles
 */
const MOVEMENT_TYPES = {
  IN: 'IN',              // Entrée de stock (augmente le stock)
  OUT: 'OUT',            // Sortie de stock (diminue le stock)
  ADJUSTMENT: 'ADJUSTMENT' // Ajustement de stock (positif ou négatif)
};

/**
 * Erreurs personnalisées pour la gestion de stock
 */
class StockError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'StockError';
    this.code = code;
    this.details = details;
  }
}

/**
 * Calcule le stock actuel d'un produit basé sur la somme des mouvements
 * 
 * Règle métier : Stock actuel = Stock initial (0) + somme de tous les mouvements
 * 
 * @param {number} productId - ID du produit
 * @param {object} tx - Transaction Prisma (optionnel)
 * @returns {Promise<number>} Stock actuel calculé
 */
async function calculateCurrentStock(productId, tx = null) {
  const client = tx || prisma;
  
  if (!usePrisma || !client) {
    throw new StockError('Database not available', 'DB_NOT_AVAILABLE');
  }

  // Calculer la somme des mouvements
  // Pour IN et ADJUSTMENT avec quantité positive : addition
  // Pour OUT et ADJUSTMENT avec quantité négative : soustraction
  const movements = await client.movement.findMany({
    where: { productId },
    select: { type: true, quantity: true }
  });

  let stock = 0;
  for (const movement of movements) {
    if (movement.type === 'IN') {
      stock += movement.quantity;
    } else if (movement.type === 'OUT') {
      stock -= movement.quantity;
    } else if (movement.type === 'ADJUSTMENT') {
      // Les ajustements peuvent être positifs ou négatifs
      stock += movement.quantity;
    }
  }

  return stock;
}

/**
 * Vérifie si un produit existe
 * 
 * @param {number} productId - ID du produit
 * @param {object} tx - Transaction Prisma (optionnel)
 * @returns {Promise<object>} Le produit trouvé
 * @throws {StockError} Si le produit n'existe pas
 */
async function validateProductExists(productId, tx = null) {
  const client = tx || prisma;
  
  if (!usePrisma || !client) {
    throw new StockError('Database not available', 'DB_NOT_AVAILABLE');
  }

  const product = await client.product.findUnique({
    where: { id: productId }
  });

  if (!product) {
    throw new StockError(
      `Produit avec l'ID ${productId} introuvable`,
      'PRODUCT_NOT_FOUND',
      { productId }
    );
  }

  return product;
}

/**
 * Valide qu'une sortie de stock est autorisée
 * 
 * Règle métier : Le stock ne peut jamais être négatif
 * 
 * @param {number} productId - ID du produit
 * @param {number} quantity - Quantité à sortir
 * @param {object} tx - Transaction Prisma (optionnel)
 * @throws {StockError} Si le stock est insuffisant
 */
async function validateStockAvailability(productId, quantity, tx = null) {
  const currentStock = await calculateCurrentStock(productId, tx);
  
  if (currentStock < quantity) {
    throw new StockError(
      `Stock insuffisant. Stock actuel: ${currentStock}, Quantité demandée: ${quantity}`,
      'INSUFFICIENT_STOCK',
      {
        productId,
        currentStock,
        requestedQuantity: quantity,
        missingQuantity: quantity - currentStock
      }
    );
  }
}

/**
 * Valide les données d'un mouvement
 * 
 * @param {object} movementData - Données du mouvement
 * @throws {StockError} Si les données sont invalides
 */
function validateMovementData(movementData) {
  const { productId, type, quantity, origin, reason, userId } = movementData;

  // Validation du type de mouvement
  if (!Object.values(MOVEMENT_TYPES).includes(type)) {
    throw new StockError(
      `Type de mouvement invalide: ${type}. Types autorisés: ${Object.values(MOVEMENT_TYPES).join(', ')}`,
      'INVALID_MOVEMENT_TYPE',
      { type, allowedTypes: Object.values(MOVEMENT_TYPES) }
    );
  }

  // Validation de la quantité
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new StockError(
      `Quantité invalide: ${quantity}. La quantité doit être un entier positif`,
      'INVALID_QUANTITY',
      { quantity }
    );
  }

  // Validation du productId
  if (!Number.isInteger(productId) || productId <= 0) {
    throw new StockError(
      `ID produit invalide: ${productId}`,
      'INVALID_PRODUCT_ID',
      { productId }
    );
  }

  // Validation de la cohérence : pour les sorties, la quantité doit être positive
  // mais sera soustraite du stock
  if (type === 'OUT' && quantity <= 0) {
    throw new StockError(
      'Pour une sortie (OUT), la quantité doit être positive',
      'INVALID_QUANTITY_FOR_OUT',
      { type, quantity }
    );
  }
}

/**
 * Enregistre un mouvement de stock avec validation complète
 * 
 * Cette fonction garantit :
 * - L'atomicité de l'opération (transaction)
 * - La validation des règles métier
 * - La mise à jour du stock calculé
 * - L'historisation complète
 * 
 * @param {object} movementData - Données du mouvement
 * @param {number} movementData.productId - ID du produit
 * @param {string} movementData.type - Type de mouvement (IN, OUT, ADJUSTMENT)
 * @param {number} movementData.quantity - Quantité (toujours positive)
 * @param {string} [movementData.origin] - Origine du mouvement
 * @param {string} [movementData.reason] - Raison du mouvement
 * @param {string} [movementData.userId] - ID de l'utilisateur
 * @returns {Promise<object>} Le mouvement créé avec le stock mis à jour
 * @throws {StockError} Si une règle métier est violée
 */
async function recordMovement(movementData) {
  const { productId, type, quantity, origin, reason, userId } = movementData;

  // 1. Validation des données d'entrée
  validateMovementData(movementData);

  // 2. Vérifier que le produit existe
  await validateProductExists(productId);

  // 3. Pour les sorties, vérifier la disponibilité du stock
  if (type === 'OUT') {
    await validateStockAvailability(productId, quantity);
  }

  // 4. Calculer le stock actuel avant le mouvement
  const stockBefore = await calculateCurrentStock(productId);

  // 5. Calculer le nouveau stock après le mouvement
  let stockAfter;
  if (type === 'IN') {
    stockAfter = stockBefore + quantity;
  } else if (type === 'OUT') {
    stockAfter = stockBefore - quantity;
  } else if (type === 'ADJUSTMENT') {
    // Les ajustements peuvent être positifs ou négatifs
    // Si quantity est négatif dans les données, on l'accepte
    stockAfter = stockBefore + quantity;
  }

  // 6. Validation finale : le stock ne doit jamais être négatif
  if (stockAfter < 0) {
    throw new StockError(
      `Cette opération créerait un stock négatif. Stock actuel: ${stockBefore}, Stock après: ${stockAfter}`,
      'NEGATIVE_STOCK_VIOLATION',
      {
        productId,
        stockBefore,
        stockAfter,
        movementType: type,
        quantity
      }
    );
  }

  // 7. Enregistrer le mouvement et mettre à jour le stock dans une transaction atomique
  // Note: Le champ quantity du produit est maintenu pour compatibilité et performance,
  // mais le stock réel est toujours calculé à partir des mouvements
  const result = await prisma.$transaction(async (tx) => {
    // Créer le mouvement
    const movement = await tx.movement.create({
      data: {
        productId,
        type,
        quantity, // Toujours positif, la logique de + ou - est gérée par le type
        origin: origin || null,
        reason: reason || null,
        userId: userId || null
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            quantity: true
          }
        }
      }
    });

    // Mettre à jour le champ quantity du produit pour performance
    // (évite de recalculer à chaque fois)
    await tx.product.update({
      where: { id: productId },
      data: { quantity: stockAfter }
    });

    return movement;
  });

  // 8. Récupérer le mouvement avec le stock mis à jour
  const movement = await prisma.movement.findUnique({
    where: { id: result.id },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          quantity: true
        }
      }
    }
  });

  return {
    ...movement,
    stockBefore,
    stockAfter,
    stockCalculated: await calculateCurrentStock(productId)
  };
}

/**
 * Annule un mouvement (inverse son effet)
 * 
 * @param {number} movementId - ID du mouvement à annuler
 * @returns {Promise<object>} Le mouvement annulé
 * @throws {StockError} Si l'annulation créerait un stock négatif
 */
async function cancelMovement(movementId) {
  if (!usePrisma || !prisma) {
    throw new StockError('Database not available', 'DB_NOT_AVAILABLE');
  }

  // 1. Récupérer le mouvement à annuler
  const movement = await prisma.movement.findUnique({
    where: { id: movementId },
    include: {
      product: true
    }
  });

  if (!movement) {
    throw new StockError(
      `Mouvement avec l'ID ${movementId} introuvable`,
      'MOVEMENT_NOT_FOUND',
      { movementId }
    );
  }

  // 2. Calculer le stock actuel
  const currentStock = await calculateCurrentStock(movement.productId);

  // 3. Calculer le stock après annulation
  let stockAfterCancellation;
  if (movement.type === 'IN') {
    stockAfterCancellation = currentStock - movement.quantity;
  } else if (movement.type === 'OUT') {
    stockAfterCancellation = currentStock + movement.quantity;
  } else if (movement.type === 'ADJUSTMENT') {
    stockAfterCancellation = currentStock - movement.quantity;
  }

  // 4. Valider que l'annulation ne créerait pas un stock négatif
  if (stockAfterCancellation < 0) {
    throw new StockError(
      `L'annulation de ce mouvement créerait un stock négatif. Stock actuel: ${currentStock}, Stock après annulation: ${stockAfterCancellation}`,
      'NEGATIVE_STOCK_VIOLATION',
      {
        movementId,
        currentStock,
        stockAfterCancellation,
        movementType: movement.type,
        quantity: movement.quantity
      }
    );
  }

  // 5. Supprimer le mouvement et mettre à jour le stock dans une transaction
  const stockBefore = currentStock;
  
  await prisma.$transaction(async (tx) => {
    await tx.movement.delete({
      where: { id: movementId }
    });

    await tx.product.update({
      where: { id: movement.productId },
      data: { quantity: stockAfterCancellation }
    });
  });

  return {
    cancelledMovement: movement,
    stockBefore,
    stockAfter: stockAfterCancellation,
    stockCalculated: await calculateCurrentStock(movement.productId)
  };
}

/**
 * Récupère l'historique complet des mouvements pour un produit
 * 
 * @param {number} productId - ID du produit
 * @returns {Promise<Array>} Liste des mouvements
 */
async function getProductHistory(productId) {
  if (!usePrisma || !prisma) {
    return [];
  }

  await validateProductExists(productId);

  const movements = await prisma.movement.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      type: true,
      quantity: true,
      origin: true,
      reason: true,
      userId: true,
      createdAt: true
    }
  });

  // Calculer le stock cumulatif pour chaque mouvement
  let runningStock = 0;
  const movementsWithStock = movements.map(movement => {
    if (movement.type === 'IN') {
      runningStock += movement.quantity;
    } else if (movement.type === 'OUT') {
      runningStock -= movement.quantity;
    } else if (movement.type === 'ADJUSTMENT') {
      runningStock += movement.quantity;
    }
    
    return {
      ...movement,
      stockAfter: runningStock
    };
  });

  return movementsWithStock.reverse(); // Plus ancien au plus récent
}

/**
 * Vérifie la cohérence du stock pour un produit
 * 
 * Compare le stock calculé à partir des mouvements avec le stock stocké
 * dans le produit. Permet de détecter des incohérences.
 * 
 * @param {number} productId - ID du produit
 * @returns {Promise<object>} Résultat de la vérification
 */
async function verifyStockConsistency(productId) {
  await validateProductExists(productId);

  const product = await prisma.product.findUnique({
    where: { id: productId },
    select: { id: true, name: true, quantity: true }
  });

  const calculatedStock = await calculateCurrentStock(productId);
  const storedStock = product.quantity;

  const isConsistent = calculatedStock === storedStock;

  return {
    productId,
    productName: product.name,
    storedStock,
    calculatedStock,
    isConsistent,
    difference: storedStock - calculatedStock,
    movementsCount: await prisma.movement.count({ where: { productId } })
  };
}

module.exports = {
  MOVEMENT_TYPES,
  StockError,
  calculateCurrentStock,
  validateProductExists,
  validateStockAvailability,
  validateMovementData,
  recordMovement,
  cancelMovement,
  getProductHistory,
  verifyStockConsistency
};
