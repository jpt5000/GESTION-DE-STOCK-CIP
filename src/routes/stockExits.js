const express = require('express');
const router = express.Router();
const stockExitController = require('../controllers/stockExitController');

/**
 * @swagger
 * /api/stock-exits:
 *   get:
 *     summary: Liste toutes les sorties de stock
 *     tags: [StockExits]
 *     responses:
 *       200:
 *         description: Liste des sorties
 */
router.get('/', stockExitController.getAllExits);

/**
 * @swagger
 * /api/stock-exits/{id}:
 *   get:
 *     summary: Récupère une sortie par ID avec détails des lots consommés
 *     tags: [StockExits]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sortie trouvée avec détails
 *       404:
 *         description: Sortie non trouvée
 */
router.get('/:id', stockExitController.getExitById);

/**
 * @swagger
 * /api/stock-exits/product/{productId}:
 *   get:
 *     summary: Récupère toutes les sorties d'un produit
 *     tags: [StockExits]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des sorties du produit
 */
router.get('/product/:productId', stockExitController.getProductExits);

/**
 * @swagger
 * /api/stock-exits:
 *   post:
 *     summary: Crée une nouvelle sortie de stock avec consommation FIFO
 *     tags: [StockExits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - type
 *               - quantity
 *             properties:
 *               productId:
 *                 type: integer
 *               type:
 *                 type: string
 *                 enum: [INDIVIDU, SUPERVISEUR]
 *               quantity:
 *                 type: integer
 *               origin:
 *                 type: string
 *               reason:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sortie créée avec succès et coût total calculé
 *       400:
 *         description: Erreur de validation ou stock insuffisant
 */
router.post('/', stockExitController.createExit);

module.exports = router;
