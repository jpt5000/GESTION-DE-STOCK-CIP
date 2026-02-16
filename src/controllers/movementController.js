/**
 * Contrôleur des mouvements de stock
 * 
 * Utilise le StockService pour toute la logique métier.
 * Ce contrôleur se contente de gérer les requêtes HTTP.
 */

const stockService = require('../services/stockService');
const { prisma, usePrisma } = require('../config/database');

/**
 * Liste tous les mouvements de stock
 */
const getAllMovements = async (req, res, next) => {
  try {
    if (!usePrisma || !prisma) {
      return res.json([]);
    }

    const movements = await prisma.movement.findMany({
      include: {
        product: {
          select: { id: true, name: true, quantity: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return res.json(movements);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère un mouvement par son ID
 */
const getMovementById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!usePrisma || !prisma) {
      return res.status(404).json({ error: 'not found' });
    }

    const movement = await prisma.movement.findUnique({
      where: { id },
      include: {
        product: {
          select: { id: true, name: true, quantity: true }
        }
      }
    });

    if (!movement) {
      return res.status(404).json({ error: 'Mouvement non trouvé' });
    }

    return res.json(movement);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère tous les mouvements d'un produit
 */
const getMovementsByProduct = async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);

    // Utiliser le service pour obtenir l'historique complet
    const history = await stockService.getProductHistory(productId);
    
    return res.json(history);
  } catch (err) {
    if (err.name === 'StockError') {
      return res.status(400).json({
        error: err.message,
        code: err.code,
        details: err.details
      });
    }
    next(err);
  }
};

/**
 * Crée un nouveau mouvement de stock
 * 
 * Utilise le StockService pour toute la logique métier
 */
const createMovement = async (req, res, next) => {
  try {
    const { productId, type, quantity, origin, reason, userId } = req.body;

    // Enregistrer le mouvement via le service
    // Le service gère toute la validation et les transactions
    const result = await stockService.recordMovement({
      productId,
      type,
      quantity,
      origin: origin || null,
      reason: reason || null,
      userId: userId || req.user?.id || null // Si vous avez un système d'auth
    });

    return res.status(201).json({
      message: 'Mouvement enregistré avec succès',
      movement: result,
      stockBefore: result.stockBefore,
      stockAfter: result.stockAfter
    });
  } catch (err) {
    // Gérer les erreurs spécifiques du StockService
    if (err.name === 'StockError') {
      const statusCode = 
        err.code === 'PRODUCT_NOT_FOUND' ? 404 :
        err.code === 'INSUFFICIENT_STOCK' || err.code === 'NEGATIVE_STOCK_VIOLATION' ? 400 :
        err.code === 'INVALID_MOVEMENT_TYPE' || err.code === 'INVALID_QUANTITY' || err.code === 'INVALID_PRODUCT_ID' ? 400 :
        400;

      return res.status(statusCode).json({
        error: err.message,
        code: err.code,
        details: err.details
      });
    }

    next(err);
  }
};

/**
 * Annule un mouvement (supprime et inverse son effet)
 */
const deleteMovement = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    // Utiliser le service pour annuler le mouvement
    const result = await stockService.cancelMovement(id);

    return res.json({
      message: 'Mouvement annulé avec succès',
      ...result
    });
  } catch (err) {
    if (err.name === 'StockError') {
      const statusCode = 
        err.code === 'MOVEMENT_NOT_FOUND' ? 404 :
        err.code === 'NEGATIVE_STOCK_VIOLATION' ? 400 :
        400;

      return res.status(statusCode).json({
        error: err.message,
        code: err.code,
        details: err.details
      });
    }

    next(err);
  }
};

/**
 * Vérifie la cohérence du stock pour un produit
 */
const verifyStock = async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    
    const result = await stockService.verifyStockConsistency(productId);
    
    return res.json(result);
  } catch (err) {
    if (err.name === 'StockError') {
      return res.status(400).json({
        error: err.message,
        code: err.code,
        details: err.details
      });
    }
    next(err);
  }
};

module.exports = {
  getAllMovements,
  getMovementById,
  getMovementsByProduct,
  createMovement,
  deleteMovement,
  verifyStock
};
