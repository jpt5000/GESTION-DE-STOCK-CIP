const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');
const { createValidator, validateMovementPayload } = require('../middlewares/validation');

/**
 * @swagger
 * /api/movements:
 *   get:
 *     summary: Liste tous les mouvements de stock
 *     tags: [Movements]
 *     responses:
 *       200:
 *         description: Liste des mouvements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movement'
 */
router.get('/', movementController.getAllMovements);

/**
 * @swagger
 * /api/movements/{id}:
 *   get:
 *     summary: Récupère un mouvement par ID
 *     tags: [Movements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mouvement trouvé
 *       404:
 *         description: Mouvement non trouvé
 */
router.get('/:id', movementController.getMovementById);

/**
 * @swagger
 * /api/movements/product/{productId}:
 *   get:
 *     summary: Récupère tous les mouvements d'un produit
 *     tags: [Movements]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des mouvements du produit
 */
router.get('/product/:productId', movementController.getMovementsByProduct);

/**
 * @swagger
 * /api/movements:
 *   post:
 *     summary: Crée un nouveau mouvement de stock
 *     tags: [Movements]
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
 *                 enum: [IN, OUT, ADJUSTMENT]
 *               origin:
 *                 type: string
 *                 description: "Origine du mouvement (ex: COMMANDE_123)"
 *               reason:
 *                 type: string
 *                 description: "Raison du mouvement (ex: Réception commande)"
 *               userId:
 *                 type: string
 *                 description: ID de l'utilisateur qui effectue le mouvement
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Mouvement créé et stock mis à jour
 *       400:
 *         description: Erreur de validation ou stock insuffisant
 *       404:
 *         description: Produit non trouvé
 */
router.post('/', createValidator(validateMovementPayload, false), movementController.createMovement);

/**
 * @swagger
 * /api/movements/{id}:
 *   delete:
 *     summary: Supprime un mouvement (annule son effet sur le stock)
 *     tags: [Movements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mouvement supprimé et stock mis à jour
 *       400:
 *         description: Impossible de supprimer (stock négatif)
 *       404:
 *         description: Mouvement non trouvé
 */
router.delete('/:id', movementController.deleteMovement);

/**
 * @swagger
 * /api/movements/product/{productId}/verify:
 *   get:
 *     summary: Vérifie la cohérence du stock d'un produit
 *     tags: [Movements]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Résultat de la vérification de cohérence
 */
router.get('/product/:productId/verify', movementController.verifyStock);

module.exports = router;
