const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const { createValidator, validateSupplierPayload } = require('../middlewares/validation');

/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     summary: Liste tous les fournisseurs
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Liste des fournisseurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 */
router.get('/', supplierController.getAllSuppliers);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   get:
 *     summary: Récupère un fournisseur par ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fournisseur trouvé
 *       404:
 *         description: Fournisseur non trouvé
 */
router.get('/:id', supplierController.getSupplierById);

/**
 * @swagger
 * /api/suppliers:
 *   post:
 *     summary: Crée un nouveau fournisseur
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Fournisseur créé
 *       400:
 *         description: Erreur de validation
 */
router.post('/', createValidator(validateSupplierPayload, false), supplierController.createSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   put:
 *     summary: Met à jour un fournisseur
 *     tags: [Suppliers]
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
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Fournisseur mis à jour
 *       404:
 *         description: Fournisseur non trouvé
 */
router.put('/:id', createValidator(validateSupplierPayload, true), supplierController.updateSupplier);

/**
 * @swagger
 * /api/suppliers/{id}:
 *   delete:
 *     summary: Supprime un fournisseur
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fournisseur supprimé
 *       404:
 *         description: Fournisseur non trouvé
 */
router.delete('/:id', supplierController.deleteSupplier);

module.exports = router;
