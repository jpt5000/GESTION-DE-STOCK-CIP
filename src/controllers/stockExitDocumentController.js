/**
 * Contrôleur des bons de sortie multi-produits
 */

const lotService = require('../services/lotService');
const { prisma, usePrisma } = require('../config/database');

/**
 * Liste tous les bons de sortie
 */
const getAllDocuments = async (req, res, next) => {
  try {
    if (!usePrisma || !prisma) {
      return res.json([]);
    }

    const documents = await lotService.getAllStockExitDocuments();
    return res.json(documents);
  } catch (err) {
    next(err);
  }
};

/**
 * Récupère un bon par ID
 */
const getDocumentById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!usePrisma || !prisma) {
      return res.status(404).json({ error: 'not found' });
    }

    const document = await prisma.stockExitDocument.findUnique({
      where: { id },
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

    if (!document) {
      return res.status(404).json({ error: 'Bon non trouvé' });
    }

    return res.json(document);
  } catch (err) {
    next(err);
  }
};

/**
 * Crée un nouveau bon de sortie multi-produits
 * 
 * Body:
 * {
 *   type: "INDIVIDU" | "SUPERVISEUR",
 *   lines: [
 *     { productId: number, quantity: number, reason?: string },
 *     ...
 *   ],
 *   userId?: string
 * }
 */
const createDocument = async (req, res, next) => {
  try {
    const { type, lines, userId } = req.body;

    const result = await lotService.createStockExitDocument({
      type,
      lines,
      userId: userId || req.user?.id || null
    });

    return res.status(201).json({
      message: 'Bon de sortie créé avec succès',
      document: result,
      totalCost: result.totalCost
    });
  } catch (err) {
    if (err.name === 'LotError') {
      const statusCode = 
        err.code === 'PRODUCT_NOT_FOUND' ? 404 :
        err.code === 'INSUFFICIENT_STOCK' || err.code === 'INSUFFICIENT_STOCK_AFTER_CONSUMPTION' ? 400 :
        err.code === 'INVALID_EXIT_TYPE' || err.code === 'INVALID_QUANTITY' || err.code === 'INVALID_PRODUCT_ID' || err.code === 'EMPTY_DOCUMENT' ? 400 :
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
  getAllDocuments,
  getDocumentById,
  createDocument
};
