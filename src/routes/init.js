const express = require('express');
const router = express.Router();
const initService = require('../services/initService');

/**
 * @swagger
 * /api/init:
 *   post:
 *     summary: Initialise les catégories et fournisseurs par défaut
 *     tags: [Init]
 *     responses:
 *       200:
 *         description: Initialisation réussie
 */
router.post('/', async (req, res, next) => {
  try {
    const result = await initService.initializeDefaults();
    return res.json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
