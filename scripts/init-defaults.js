/**
 * Script d'initialisation des catégories et fournisseurs par défaut
 * 
 * Usage: node scripts/init-defaults.js
 */

require('dotenv').config();
const initService = require('../src/services/initService');

async function main() {
  console.log('🔧 Initialisation des catégories et fournisseurs par défaut...\n');
  
  try {
    const result = await initService.initializeDefaults();
    
    console.log(`✅ ${result.message}`);
    console.log(`   - Catégories créées: ${result.categoriesCreated}`);
    console.log(`   - Fournisseurs créés: ${result.suppliersCreated}\n`);
    
    if (result.categoriesCreated === 0 && result.suppliersCreated === 0) {
      console.log('ℹ️  Les données sont déjà initialisées.');
      console.log('   Utilisez les endpoints API pour ajouter d\'autres catégories/fournisseurs.\n');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error.message);
    process.exit(1);
  }
}

main();
