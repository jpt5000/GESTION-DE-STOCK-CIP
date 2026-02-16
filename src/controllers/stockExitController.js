/**
 * Contrôleur des sorties de stock
 */

const lotService = require('../services/lotService');
const { prisma, usePrisma } = require('../config/database');

/**
 * Liste toutes les sorties de stock
 */
const getAllExits = async (req, res, next) => {
  try {
    if (!usePrisma || !prisma) {
      return res.json([]);
    }

    const exits = await prisma.stockExit.findMany({
      include: {
        product: {
          select: { id: true, name: true }
        },
        details: {
          include: {
            entry: {
              select: { id: true, entryDate: true, unitCost: true }
            }
          }
        }
      },
      orderBy: { exitDate: 'desc' }
    });

    return res.json(exits);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère une sortie par ID
 */
const getExitById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!usePrisma || !prisma) {
      return res.status(404).json({ error: 'not found' });
    }

    const exit = await prisma.stockExit.findUnique({
      where: { id },
      include: {
        product: {
          select: { id: true, name: true, quantity: true }
        },
        details: {
          include: {
            entry: {
              select: {
                id: true,
                entryDate: true,
                unitCost: true,
                quantity: true,
                quantityUsed: true,
                availableQuantity: true
              }
            }
          }
        }
      }
    });

    if (!exit) {
      return res.status(404).json({ error: 'Sortie non trouvée' });
    }

    return res.json(exit);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère toutes les sorties d'un produit
 */
const getProductExits = async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    const exits = await lotService.getProductExits(productId);
    return res.json(exits);
  } catch (err) {
    if (err.name === 'LotError') {
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
 * Crée une nouvelle sortie de stock avec consommation FIFO
 */
const createExit = async (req, res, next) => {
  try {
    const { productId, type, quantity, origin, reason, userId } = req.body;

    const result = await lotService.createStockExit({
      productId,
      type,
      quantity,
      origin: origin || null,
      reason: reason || null,
      userId: userId || req.user?.id || null
    });

    return res.status(201).json({
      message: 'Sortie créée avec succès',
      exit: result,
      stockBefore: result.stockBefore,
      stockAfter: result.stockAfter,
      totalCost: result.totalCost
    });
  } catch (err) {
    if (err.name === 'LotError') {
      const statusCode = 
        err.code === 'PRODUCT_NOT_FOUND' ? 404 :
        err.code === 'INSUFFICIENT_STOCK' || err.code === 'INSUFFICIENT_STOCK_AFTER_CONSUMPTION' ? 400 :
        err.code === 'INVALID_EXIT_TYPE' || err.code === 'INVALID_QUANTITY' || err.code === 'INVALID_PRODUCT_ID' ? 400 :
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

module.exports = {
  getAllExits,
  getExitById,
  getProductExits,
  createExit
};
