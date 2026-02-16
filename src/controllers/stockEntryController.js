/**
 * Contrôleur des entrées de stock (lots)
 */

const lotService = require('../services/lotService');
const { prisma, usePrisma } = require('../config/database');

/**
 * Liste toutes les entrées de stock (lots)
 */
const getAllEntries = async (req, res, next) => {
  try {
    if (!usePrisma || !prisma) {
      return res.json([]);
    }

    const entries = await prisma.stockEntry.findMany({
      include: {
        product: {
          select: { id: true, name: true }
        }
      },
      orderBy: { entryDate: 'desc' }
    });

    return res.json(entries);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère une entrée par ID
 */
const getEntryById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!usePrisma || !prisma) {
      return res.status(404).json({ error: 'not found' });
    }

    const entry = await prisma.stockEntry.findUnique({
      where: { id },
      include: {
        product: {
          select: { id: true, name: true }
        },
        exitDetails: {
          include: {
            exit: {
              select: { id: true, type: true, exitDate: true }
            }
          }
        }
      }
    });

    if (!entry) {
      return res.status(404).json({ error: 'Entrée non trouvée' });
    }

    return res.json(entry);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère tous les lots d'un produit
 */
const getProductEntries = async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    const lots = await lotService.getProductLots(productId);
    return res.json(lots);
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
 * Crée une nouvelle entrée de stock (lot)
 */
const createEntry = async (req, res, next) => {
  try {
    const { productId, quantity, unitCost, origin, reason, userId } = req.body;

    const result = await lotService.createStockEntry({
      productId,
      quantity,
      unitCost,
      origin: origin || null,
      reason: reason || null,
      userId: userId || req.user?.id || null
    });

    return res.status(201).json({
      message: 'Lot créé avec succès',
      entry: result,
      stockBefore: result.stockBefore,
      stockAfter: result.stockAfter
    });
  } catch (err) {
    if (err.name === 'LotError') {
      const statusCode = 
        err.code === 'PRODUCT_NOT_FOUND' ? 404 :
        err.code === 'INVALID_PRODUCT_ID' || err.code === 'INVALID_QUANTITY' || err.code === 'INVALID_UNIT_COST' ? 400 :
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
  getAllEntries,
  getEntryById,
  getProductEntries,
  createEntry
};
