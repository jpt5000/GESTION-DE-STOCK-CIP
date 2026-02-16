const express = require('express');
const router = express.Router();
const stockExitDocumentController = require('../controllers/stockExitDocumentController');
const { validateStockExitDocumentPayload } = require('../middlewares/validation');

/**
 * GET /api/stock-exit-documents
 * Récupère tous les bons de sortie
 */
router.get('/', stockExitDocumentController.getAllDocuments);

/**
 * GET /api/stock-exit-documents/:id
 * Récupère un bon par ID
 */
router.get('/:id', stockExitDocumentController.getDocumentById);

/**
 * POST /api/stock-exit-documents
 * Crée un nouveau bon de sortie multi-produits
 */
router.post('/', validateStockExitDocumentPayload, stockExitDocumentController.createDocument);

module.exports = router;
