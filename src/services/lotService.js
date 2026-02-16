/**
 * Service de gestion des lots avec méthode FIFO
 * 
 * Ce service implémente la gestion complète des lots (StockEntry) et des sorties (StockExit)
 * selon la méthode FIFO (First In, First Out).
 * 
 * Règles métier :
 * 1. Chaque entrée de stock crée un lot distinct avec prix d'achat
 * 2. Le stock total = somme des quantités disponibles de tous les lots
 * 3. Les sorties consomment les lots selon FIFO (premier entré, premier sorti)
 * 4. Une sortie peut consommer plusieurs lots
 * 5. Le coût total = somme (quantité × prix d'achat) pour chaque lot consommé
 * 6. Aucun stock négatif autorisé
 * 7. Toutes les opérations sont atomiques (transaction)
 * 8. Traçabilité complète des lots consommés
 */

const { prisma, usePrisma } = require('../config/database');

/**
 * Erreurs personnalisées pour la gestion des lots
 */
class LotError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'LotError';
    this.code = code;
    this.details = details;
  }
}

/**
 * Calcule le stock disponible total d'un produit
 * Stock = somme des quantités disponibles de tous les lots
 * 
 * @param {number} productId - ID du produit
 * @param {object} tx - Transaction Prisma (optionnel)
 * @returns {Promise<number>} Stock disponible total
 */
async function calculateAvailableStock(productId, tx = null) {
  const client = tx || prisma;
  
  if (!usePrisma || !client) {
    throw new LotError('Database not available', 'DB_NOT_AVAILABLE');
  }

  const entries = await client.stockEntry.findMany({
    where: { productId },
    select: { availableQuantity: true }
  });

  return entries.reduce((total, entry) => total + entry.availableQuantity, 0);
}

/**
 * Valide qu'un produit existe
 * 
 * @param {number} productId - ID du produit
 * @param {object} tx - Transaction Prisma (optionnel)
 * @returns {Promise<object>} Le produit trouvé
 * @throws {LotError} Si le produit n'existe pas
 */
async function validateProductExists(productId, tx = null) {
  const client = tx || prisma;
  
  if (!usePrisma || !client) {
    throw new LotError('Database not available', 'DB_NOT_AVAILABLE');
  }

  const product = await client.product.findUnique({
    where: { id: productId }
  });

  if (!product) {
    throw new LotError(
      `Produit avec l'ID ${productId} introuvable`,
      'PRODUCT_NOT_FOUND',
      { productId }
    );
  }

  return product;
}

/**
 * Valide les données d'une entrée de lot
 * 
 * @param {object} entryData - Données de l'entrée
 * @throws {LotError} Si les données sont invalides
 */
function validateEntryData(entryData) {
  const { productId, quantity, unitCost } = entryData;

  if (!Number.isInteger(productId) || productId <= 0) {
    throw new LotError('ID produit invalide', 'INVALID_PRODUCT_ID', { productId });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new LotError('Quantité invalide. Doit être un entier positif', 'INVALID_QUANTITY', { quantity });
  }

  if (!Number.isFinite(unitCost) || unitCost < 0) {
    throw new LotError('Prix d\'achat invalide. Doit être un nombre positif', 'INVALID_UNIT_COST', { unitCost });
  }
}

/**
 * Crée une entrée de stock (lot)
 * 
 * Chaque entrée crée un nouveau lot avec :
 * - Quantité totale
 * - Prix d'achat unitaire
 * - Date d'entrée
 * 
 * Le stock disponible est automatiquement mis à jour.
 * 
 * @param {object} entryData - Données de l'entrée
 * @param {number} entryData.productId - ID du produit
 * @param {number} entryData.quantity - Quantité du lot
 * @param {number} entryData.unitCost - Prix d'achat unitaire
 * @param {string} [entryData.origin] - Origine de l'entrée
 * @param {string} [entryData.reason] - Raison de l'entrée
 * @param {string} [entryData.userId] - ID utilisateur
 * @returns {Promise<object>} Le lot créé avec le stock mis à jour
 */
/**
 * Génère une référence automatique pour une entrée de stock
 * Format: ENTREE_YYYYMMDD_HHMMSS
 */
function generateEntryReference() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `ENTREE_${year}${month}${day}_${hours}${minutes}${seconds}`;
}

/**
 * Génère une référence automatique pour une sortie de stock
 * Format: SORTIE_YYYYMMDD_HHMMSS
 */
function generateExitReference() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `SORTIE_${year}${month}${day}_${hours}${minutes}${seconds}`;
}

async function createStockEntry(entryData) {
  const { productId, quantity, unitCost, origin, reason, userId } = entryData;

  // 1. Validation des données
  validateEntryData(entryData);

  // 2. Vérifier que le produit existe
  await validateProductExists(productId);

  // 3. Calculer le nouveau stock total
  const currentStock = await calculateAvailableStock(productId);
  const newStock = currentStock + quantity;

  // 4. Générer automatiquement la référence si non fournie
  const entryOrigin = origin || generateEntryReference();

  // 5. Créer le lot et mettre à jour le stock dans une transaction atomique
  const result = await prisma.$transaction(async (tx) => {
    // Créer le lot
    const entry = await tx.stockEntry.create({
      data: {
        productId,
        quantity,
        quantityUsed: 0,
        availableQuantity: quantity, // Au début, toute la quantité est disponible
        unitCost,
        origin: entryOrigin,
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

    // Mettre à jour le stock total du produit
    await tx.product.update({
      where: { id: productId },
      data: { quantity: newStock }
    });

    return entry;
  });

  return {
    ...result,
    stockBefore: currentStock,
    stockAfter: newStock
  };
}

/**
 * Récupère les lots disponibles pour un produit (ordre FIFO)
 * 
 * Les lots sont triés par date d'entrée croissante (les plus anciens en premier)
 * et filtrés pour ne garder que ceux avec une quantité disponible > 0
 * 
 * @param {number} productId - ID du produit
 * @param {object} tx - Transaction Prisma (optionnel)
 * @returns {Promise<Array>} Liste des lots disponibles (ordre FIFO)
 */
async function getAvailableLots(productId, tx = null) {
  const client = tx || prisma;
  
  if (!usePrisma || !client) {
    return [];
  }

  return await client.stockEntry.findMany({
    where: {
      productId,
      availableQuantity: {
        gt: 0 // Seulement les lots avec stock disponible
      }
    },
    orderBy: {
      entryDate: 'asc' // FIFO : les plus anciens en premier
    }
  });
}

/**
 * Valide qu'une sortie est possible
 * 
 * @param {number} productId - ID du produit
 * @param {number} quantity - Quantité à sortir
 * @param {object} tx - Transaction Prisma (optionnel)
 * @throws {LotError} Si le stock est insuffisant
 */
async function validateExitAvailability(productId, quantity, tx = null) {
  const availableStock = await calculateAvailableStock(productId, tx);
  
  if (availableStock < quantity) {
    throw new LotError(
      `Stock insuffisant. Stock disponible: ${availableStock}, Quantité demandée: ${quantity}`,
      'INSUFFICIENT_STOCK',
      {
        productId,
        availableStock,
        requestedQuantity: quantity,
        missingQuantity: quantity - availableStock
      }
    );
  }
}

/**
 * Consomme des lots selon la méthode FIFO
 * 
 * Cette fonction :
 * 1. Récupère les lots disponibles (ordre FIFO)
 * 2. Consomme la quantité demandée en commençant par les plus anciens
 * 3. Peut consommer plusieurs lots si nécessaire
 * 4. Retourne les détails de consommation avec le coût total
 * 
 * @param {number} productId - ID du produit
 * @param {number} quantity - Quantité à consommer
 * @param {object} tx - Transaction Prisma (doit être fourni)
 * @returns {Promise<Array>} Liste des détails de consommation [{ entryId, quantity, unitCost, subtotal }, ...]
 */
async function consumeLotsFIFO(productId, quantity, tx) {
  if (!tx) {
    throw new LotError('Transaction requise pour consommer les lots', 'TRANSACTION_REQUIRED');
  }

  // 1. Récupérer les lots disponibles (ordre FIFO)
  const availableLots = await getAvailableLots(productId, tx);
  
  if (availableLots.length === 0) {
    throw new LotError('Aucun lot disponible', 'NO_AVAILABLE_LOTS', { productId });
  }

  // 2. Consommer les lots selon FIFO
  const consumptionDetails = [];
  let remainingQuantity = quantity;
  let totalCost = 0;

  for (const lot of availableLots) {
    if (remainingQuantity <= 0) break;

    // Quantité à prélever sur ce lot
    const quantityFromLot = Math.min(remainingQuantity, lot.availableQuantity);
    
    // Calculer le sous-total pour ce lot
    const subtotal = quantityFromLot * lot.unitCost;
    totalCost += subtotal;

    // Mettre à jour le lot dans la transaction
    const updatedQuantityUsed = lot.quantityUsed + quantityFromLot;
    const updatedAvailableQuantity = lot.availableQuantity - quantityFromLot;

    await tx.stockEntry.update({
      where: { id: lot.id },
      data: {
        quantityUsed: updatedQuantityUsed,
        availableQuantity: updatedAvailableQuantity
      }
    });

    // Ajouter au détail de consommation
    consumptionDetails.push({
      entryId: lot.id,
      quantity: quantityFromLot,
      unitCost: lot.unitCost,
      subtotal: subtotal
    });

    remainingQuantity -= quantityFromLot;
  }

  // 3. Vérifier que toute la quantité a été consommée
  if (remainingQuantity > 0) {
    throw new LotError(
      `Stock insuffisant après consommation des lots. Reste: ${remainingQuantity}`,
      'INSUFFICIENT_STOCK_AFTER_CONSUMPTION',
      {
        productId,
        requestedQuantity: quantity,
        consumedQuantity: quantity - remainingQuantity,
        remainingQuantity
      }
    );
  }

  return {
    details: consumptionDetails,
    totalCost
  };
}

/**
 * Crée une sortie de stock avec consommation FIFO
 * 
 * Cette fonction :
 * 1. Valide la disponibilité du stock
 * 2. Consomme les lots selon FIFO
 * 3. Calcule le coût total automatiquement
 * 4. Enregistre la sortie et les détails dans une transaction atomique
 * 5. Met à jour le stock total du produit
 * 
 * @param {object} exitData - Données de la sortie
 * @param {number} exitData.productId - ID du produit
 * @param {string} exitData.type - Type de sortie ("INDIVIDU" ou "SUPERVISEUR")
 * @param {number} exitData.quantity - Quantité à sortir
 * @param {string} [exitData.origin] - Origine de la sortie
 * @param {string} [exitData.reason] - Raison de la sortie
 * @param {string} [exitData.userId] - ID utilisateur
 * @returns {Promise<object>} La sortie créée avec les détails
 */
async function createStockExit(exitData) {
  const { productId, type, quantity, origin, reason, userId } = exitData;

  // 1. Validation des données
  if (!Number.isInteger(productId) || productId <= 0) {
    throw new LotError('ID produit invalide', 'INVALID_PRODUCT_ID', { productId });
  }

  if (!['INDIVIDU', 'SUPERVISEUR'].includes(type)) {
    throw new LotError(
      `Type de sortie invalide: ${type}. Types autorisés: INDIVIDU, SUPERVISEUR`,
      'INVALID_EXIT_TYPE',
      { type, allowedTypes: ['INDIVIDU', 'SUPERVISEUR'] }
    );
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new LotError('Quantité invalide. Doit être un entier positif', 'INVALID_QUANTITY', { quantity });
  }

  // 2. Vérifier que le produit existe
  await validateProductExists(productId);

  // 3. Valider la disponibilité du stock
  await validateExitAvailability(productId, quantity);

  // 4. Calculer le stock avant la sortie
  const stockBefore = await calculateAvailableStock(productId);
  const stockAfter = stockBefore - quantity;

  // 5. Générer automatiquement la référence si non fournie
  const exitOrigin = origin || generateExitReference();

  // 6. Créer la sortie avec consommation FIFO dans une transaction atomique
  const result = await prisma.$transaction(async (tx) => {
    // Consommer les lots selon FIFO et obtenir les détails
    const consumption = await consumeLotsFIFO(productId, quantity, tx);

    // Créer la sortie
    const exit = await tx.stockExit.create({
      data: {
        productId,
        type,
        quantity,
        totalCost: consumption.totalCost,
        origin: exitOrigin,
        reason: reason || null,
        userId: userId || null
      }
    });

    // Créer les détails de consommation (traçabilité)
    for (const detail of consumption.details) {
      await tx.stockExitDetail.create({
        data: {
          exitId: exit.id,
          entryId: detail.entryId,
          quantity: detail.quantity,
          unitCost: detail.unitCost,
          subtotal: detail.subtotal
        }
      });
    }

    // Mettre à jour le stock total du produit
    await tx.product.update({
      where: { id: productId },
      data: { quantity: stockAfter }
    });

    // Récupérer la sortie avec tous ses détails
    return await tx.stockExit.findUnique({
      where: { id: exit.id },
      include: {
        details: {
          include: {
            entry: {
              select: {
                id: true,
                entryDate: true,
                unitCost: true
              }
            }
          }
        },
        product: {
          select: {
            id: true,
            name: true,
            quantity: true
          }
        }
      }
    });
  });

  return {
    ...result,
    stockBefore,
    stockAfter
  };
}

/**
 * Récupère tous les lots d'un produit
 * 
 * @param {number} productId - ID du produit
 * @returns {Promise<Array>} Liste des lots
 */
async function getProductLots(productId) {
  if (!usePrisma || !prisma) {
    return [];
  }

  await validateProductExists(productId);

  return await prisma.stockEntry.findMany({
    where: { productId },
    orderBy: { entryDate: 'asc' },
    include: {
      _count: {
        select: { exitDetails: true }
      }
    }
  });
}

/**
 * Récupère toutes les sorties d'un produit
 * 
 * @param {number} productId - ID du produit
 * @returns {Promise<Array>} Liste des sorties avec détails
 */
async function getProductExits(productId) {
  if (!usePrisma || !prisma) {
    return [];
  }

  await validateProductExists(productId);

  return await prisma.stockExit.findMany({
    where: { productId },
    orderBy: { exitDate: 'desc' },
    include: {
      details: {
        include: {
          entry: {
            select: {
              id: true,
              entryDate: true,
              unitCost: true
            }
          }
        }
      }
    }
  });
}

/**
 * Récupère le coût moyen pondéré d'un produit
 * 
 * Calcul : somme(quantité_disponible × prix_achat) / quantité_totale_disponible
 * 
 * @param {number} productId - ID du produit
 * @returns {Promise<number>} Coût moyen pondéré
 */
async function getAverageCost(productId) {
  if (!usePrisma || !prisma) {
    return 0;
  }

  const lots = await getAvailableLots(productId);

  if (lots.length === 0) {
    return 0;
  }

  const totalValue = lots.reduce((sum, lot) => sum + (lot.availableQuantity * lot.unitCost), 0);
  const totalQuantity = lots.reduce((sum, lot) => sum + lot.availableQuantity, 0);

  return totalQuantity > 0 ? totalValue / totalQuantity : 0;
}

/**
 * Crée un bon de sortie multi-produits
 * 
 * Un bon peut contenir plusieurs lignes, chaque ligne concernant un produit différent.
 * Chaque produit est traité indépendamment avec FIFO.
 * 
 * @param {object} documentData - Données du bon
 * @param {string} documentData.type - Type de sortie ("INDIVIDU" ou "SUPERVISEUR")
 * @param {Array} documentData.lines - Liste des lignes [{productId, quantity, reason}, ...]
 * @param {string} [documentData.userId] - ID utilisateur
 * @returns {Promise<object>} Le bon créé avec toutes les lignes et détails
 */
async function createStockExitDocument(documentData) {
  const { type, lines, userId } = documentData;

  // 1. Validation
  if (!['INDIVIDU', 'SUPERVISEUR'].includes(type)) {
    throw new LotError(
      `Type de sortie invalide: ${type}. Types autorisés: INDIVIDU, SUPERVISEUR`,
      'INVALID_EXIT_TYPE',
      { type }
    );
  }

  if (!Array.isArray(lines) || lines.length === 0) {
    throw new LotError('Le bon doit contenir au moins une ligne', 'EMPTY_DOCUMENT', {});
  }

  // 2. Valider chaque ligne et vérifier les stocks
  for (const line of lines) {
    const { productId, quantity } = line;

    if (!Number.isInteger(productId) || productId <= 0) {
      throw new LotError('ID produit invalide dans une ligne', 'INVALID_PRODUCT_ID', { productId });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new LotError('Quantité invalide dans une ligne', 'INVALID_QUANTITY', { quantity });
    }

    // Vérifier que le produit existe
    await validateProductExists(productId);

    // Vérifier que le stock est disponible
    await validateExitAvailability(productId, quantity);
  }

  // 3. Générer une référence de document
  const reference = `BON_${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}_${String(new Date().getHours()).padStart(2, '0')}${String(new Date().getMinutes()).padStart(2, '0')}${String(new Date().getSeconds()).padStart(2, '0')}`;

  // 4. Créer le document et les lignes dans une transaction
  const result = await prisma.$transaction(async (tx) => {
    // Créer le document
    const document = await tx.stockExitDocument.create({
      data: {
        reference,
        type,
        userId: userId || null
      }
    });

    let totalCostDocument = 0;
    const createdLines = [];

    // 5. Traiter chaque ligne du bon
    for (const line of lines) {
      const { productId, quantity, reason } = line;

      // Valider la disponibilité du stock (dans la transaction)
      await validateExitAvailability(productId, quantity, tx);

      // Consommer les lots et obtenir les détails FIFO
      const consumption = await consumeLotsFIFO(productId, quantity, tx);

      // Récupérer le produit
      const product = await tx.product.findUnique({ where: { id: productId } });
      const currentProductStock = await calculateAvailableStock(productId, tx);
      const newProductStock = currentProductStock - quantity;

      // Créer la ligne du document
      const docLine = await tx.stockExitDocumentLine.create({
        data: {
          documentId: document.id,
          productId,
          quantity,
          totalCost: consumption.totalCost
        }
      });

      createdLines.push(docLine);

      // Créer les détails de consommation FIFO pour cette ligne
      for (const detail of consumption.details) {
        await tx.stockExitDocumentLineDetail.create({
          data: {
            lineId: docLine.id,
            entryId: detail.entryId,
            quantity: detail.quantity,
            unitCost: detail.unitCost,
            subtotal: detail.subtotal
          }
        });
      }

      // Mettre à jour le stock du produit
      await tx.product.update({
        where: { id: productId },
        data: { quantity: newProductStock }
      });

      totalCostDocument += consumption.totalCost;
    }

    // Mettre à jour le coût total du document
    await tx.stockExitDocument.update({
      where: { id: document.id },
      data: { totalCost: totalCostDocument }
    });

    // Récupérer le document complètement peuplé
    return await tx.stockExitDocument.findUnique({
      where: { id: document.id },
      include: {
        lines: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                quantity: true
              }
            },
            details: {
              include: {
                entry: {
                  select: {
                    id: true,
                    entryDate: true,
                    unitCost: true
                  }
                }
              }
            }
          }
        }
      }
    });
  });

  return result;
}

/**
 * Récupère tous les bons de sortie multi-produits
 * 
 * @returns {Promise<Array>} Liste des documents avec leurs lignes
 */
async function getAllStockExitDocuments() {
  if (!usePrisma || !prisma) {
    return [];
  }

  return await prisma.stockExitDocument.findMany({
    include: {
      lines: {
        include: {
          product: {
            select: {
              id: true,
              name: true
            }
          },
          details: {
            include: {
              entry: {
                select: {
                  id: true,
                  entryDate: true,
                  unitCost: true
                }
              }
            }
          }
        }
      }
    },
    orderBy: { documentDate: 'desc' }
  });
}

module.exports = {
  LotError,
  calculateAvailableStock,
  validateProductExists,
  validateEntryData,
  createStockEntry,
  getAvailableLots,
  validateExitAvailability,
  consumeLotsFIFO,
  createStockExit,
  getProductLots,
  getProductExits,
  getAverageCost,
  createStockExitDocument,
  getAllStockExitDocuments
};
