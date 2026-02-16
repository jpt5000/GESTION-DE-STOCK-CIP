const express = require('express');
const router = express.Router();
const stockEntryController = require('../controllers/stockEntryController');

/**
 * @swagger
 * /api/stock-entries:
 *   get:
 *     summary: Liste toutes les entrées de stock (lots)
 *     tags: [StockEntries]
 *     responses:
 *       200:
 *         description: Liste des entrées de stock
 */
router.get('/', stockEntryController.getAllEntries);

/**
 * @swagger
 * /api/stock-entries/{id}:
 *   get:
 *     summary: Récupère une entrée par ID
 *     tags: [StockEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Entrée trouvée
 *       404:
 *         description: Entrée non trouvée
 */
router.get('/:id', stockEntryController.getEntryById);

/**
 * @swagger
 * /api/stock-entries/product/{productId}:
 *   get:
 *     summary: Récupère tous les lots d'un produit
 *     tags: [StockEntries]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des lots du produit
 */
router.get('/product/:productId', stockEntryController.getProductEntries);

/**
 * @swagger
 * /api/stock-entries:
 *   post:
 *     summary: Crée une nouvelle entrée de stock (lot)
 *     tags: [StockEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *               - unitCost
 *             properties:
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               unitCost:
 *                 type: number
 *               origin:
 *                 type: string
 *               reason:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Lot créé avec succès
 *       400:
 *         description: Erreur de validation
 */
router.post('/', stockEntryController.createEntry);

module.exports = router;
