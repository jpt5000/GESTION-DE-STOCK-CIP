const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { createValidator, validateProductPayload } = require('../middlewares/validation');

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Liste tous les produits (items)
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Liste des produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Récupère un produit par ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produit trouvé
 *       404:
 *         description: Produit non trouvé
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Crée un nouveau produit
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - categoryId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryId:
 *                 type: integer
 *               supplierId:
 *                 type: integer
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produit créé
 *       400:
 *         description: Erreur de validation
 */
router.post('/', createValidator(validateProductPayload, false), productController.createProduct);

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Met à jour un produit
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryId:
 *                 type: integer
 *               supplierId:
 *                 type: integer
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produit mis à jour
 *       404:
 *         description: Produit non trouvé
 */
router.put('/:id', createValidator(validateProductPayload, true), productController.updateProduct);

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Supprime un produit
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produit supprimé
 *       404:
 *         description: Produit non trouvé
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
