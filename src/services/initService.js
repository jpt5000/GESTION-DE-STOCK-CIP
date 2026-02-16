/**
 * Service d'initialisation
 * 
 * Crée les catégories et fournisseurs par défaut si la base est vide
 */

const { prisma, usePrisma } = require('../config/database');

/**
 * Initialise les catégories et fournisseurs par défaut
 * 
 * @returns {Promise<object>} Résultat de l'initialisation
 */
async function initializeDefaults() {
  if (!usePrisma || !prisma) {
    return {
      categoriesCreated: 0,
      suppliersCreated: 0,
      message: 'Base de données non disponible'
    };
  }

  let categoriesCreated = 0;
  let suppliersCreated = 0;

  try {
    // Créer les catégories par défaut (ignorer les erreurs de duplication pour SQLite)
    const defaultCategories = [
      { name: 'Électronique' },
      { name: 'Informatique' },
      { name: 'Mobilier' },
      { name: 'Fournitures de bureau' },
      { name: 'Vêtements' },
      { name: 'Alimentaire' },
      { name: 'Divers' }
    ];

    for (const category of defaultCategories) {
      try {
        await prisma.category.create({ data: category });
        categoriesCreated++;
      } catch (error) {
        // Ignorer les erreurs de duplication (SQLite)
        if (error.code !== 'P2002') {
          throw error;
        }
      }
    }

    // Créer les fournisseurs par défaut
    const defaultSuppliers = [
      { name: 'Fournisseur Général', email: 'contact@fournisseur-general.fr', phone: '01 23 45 67 89' },
      { name: 'Grossiste ABC', email: 'info@grossiste-abc.fr', phone: '01 98 76 54 32' },
      { name: 'Distributeur XYZ', email: 'contact@distributeur-xyz.fr', phone: '02 11 22 33 44' }
    ];

    for (const supplier of defaultSuppliers) {
      try {
        await prisma.supplier.create({ data: supplier });
        suppliersCreated++;
      } catch (error) {
        // Ignorer les erreurs de duplication
        if (error.code !== 'P2002') {
          throw error;
        }
      }
    }

    return {
      categoriesCreated,
      suppliersCreated,
      message: categoriesCreated > 0 || suppliersCreated > 0
        ? `${categoriesCreated} catégorie(s) et ${suppliersCreated} fournisseur(s) créé(s)`
        : 'Données déjà initialisées'
    };
  } catch (error) {
    console.error('Erreur lors de l\'initialisation:', error);
    throw error;
  }
}

/**
 * Obtient ou crée une catégorie par défaut
 * 
 * @param {string} name - Nom de la catégorie (optionnel)
 * @returns {Promise<object>} La catégorie
 */
async function getOrCreateDefaultCategory(name = 'Divers') {
  if (!usePrisma || !prisma) {
    return null;
  }

  // Chercher une catégorie existante
  let category = await prisma.category.findFirst();

  // Si aucune catégorie n'existe, créer celle par défaut
  if (!category) {
    category = await prisma.category.create({
      data: { name }
    });
  }

  return category;
}

/**
 * Obtient ou crée un fournisseur par défaut
 * 
 * @param {string} name - Nom du fournisseur (optionnel)
 * @returns {Promise<object>} Le fournisseur
 */
async function getOrCreateDefaultSupplier(name = 'Fournisseur Général') {
  if (!usePrisma || !prisma) {
    return null;
  }

  // Chercher un fournisseur existant
  let supplier = await prisma.supplier.findFirst();

  // Si aucun fournisseur n'existe, créer celui par défaut
  if (!supplier) {
    supplier = await prisma.supplier.create({
      data: { name }
    });
  }

  return supplier;
}

module.exports = {
  initializeDefaults,
  getOrCreateDefaultCategory,
  getOrCreateDefaultSupplier
};
