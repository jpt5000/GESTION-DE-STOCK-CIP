/**
 * Exemple d'utilisation du système FIFO avec lots
 * 
 * Ce script illustre :
 * - La création de plusieurs lots avec des prix différents
 * - Une sortie qui consomme plusieurs lots selon FIFO
 * - Le calcul automatique du coût total
 */

require('dotenv').config();
const lotService = require('../src/services/lotService');
const { prisma } = require('../src/config/database');

async function runExample() {
  console.log('🚀 Exemple d\'utilisation du système FIFO\n');

  try {
    // Vérifier si un produit existe, sinon en créer un
    let product = await prisma.product.findFirst();
    
    if (!product) {
      console.log('ℹ️  Aucun produit trouvé. Création d\'un produit de test...\n');
      
      // Créer une catégorie et un fournisseur par défaut si nécessaire
      let category = await prisma.category.findFirst();
      if (!category) {
        category = await prisma.category.create({ data: { name: 'Test' } });
      }
      
      let supplier = await prisma.supplier.findFirst();
      if (!supplier) {
        supplier = await prisma.supplier.create({ data: { name: 'Test Supplier' } });
      }
      
      // Créer un produit de test
      product = await prisma.product.create({
        data: {
          name: 'Produit Test FIFO',
          description: 'Produit créé pour tester le système FIFO',
          price: 15.00,
          quantity: 0,
          categoryId: category.id,
          supplierId: supplier.id
        }
      });
      
      console.log(`✅ Produit créé: "${product.name}" (ID: ${product.id})\n`);
    } else {
      console.log(`ℹ️  Utilisation du produit existant: "${product.name}" (ID: ${product.id})\n`);
    }
    
    const productId = product.id;

    console.log('=== Étape 1 : Créer plusieurs lots avec des prix différents ===\n');

    // Lot 1 : 100 unités à 10€
    const lot1 = await lotService.createStockEntry({
      productId,
      quantity: 100,
      unitCost: 10.00,
      origin: 'COMMANDE_001',
      reason: 'Réception commande fournisseur A',
      userId: 'user_1'
    });
    console.log(`✅ Lot 1 créé: ${lot1.quantity} unités à ${lot1.unitCost}€`);
    console.log(`   Stock total: ${lot1.stockAfter} unités\n`);

    // Lot 2 : 50 unités à 12€ (prix plus élevé)
    const lot2 = await lotService.createStockEntry({
      productId,
      quantity: 50,
      unitCost: 12.00,
      origin: 'COMMANDE_002',
      reason: 'Réception commande fournisseur B',
      userId: 'user_1'
    });
    console.log(`✅ Lot 2 créé: ${lot2.quantity} unités à ${lot2.unitCost}€`);
    console.log(`   Stock total: ${lot2.stockAfter} unités\n`);

    // Lot 3 : 75 unités à 9.50€ (prix moins cher)
    const lot3 = await lotService.createStockEntry({
      productId,
      quantity: 75,
      unitCost: 9.50,
      origin: 'COMMANDE_003',
      reason: 'Réception commande fournisseur A (prix promotionnel)',
      userId: 'user_1'
    });
    console.log(`✅ Lot 3 créé: ${lot3.quantity} unités à ${lot3.unitCost}€`);
    console.log(`   Stock total: ${lot3.stockAfter} unités\n`);

    console.log('=== Étape 2 : Afficher les lots disponibles (ordre FIFO) ===\n');
    const lots = await lotService.getProductLots(productId);
    lots.forEach((lot, index) => {
      console.log(`Lot ${index + 1}: ${lot.availableQuantity}/${lot.quantity} unités disponibles à ${lot.unitCost}€ (entrée: ${lot.entryDate.toISOString().split('T')[0]})`);
    });
    console.log('');

    console.log('=== Étape 3 : Sortie de 120 unités (consomme plusieurs lots) ===\n');
    console.log('📝 Cette sortie va consommer :');
    console.log('   - 100 unités du Lot 1 (10€) = 1000€');
    console.log('   - 20 unités du Lot 2 (12€) = 240€');
    console.log('   - Coût total attendu : 1240€\n');

    const exit1 = await lotService.createStockExit({
      productId,
      type: 'INDIVIDU',
      quantity: 120,
      origin: 'VENTE_456',
      reason: 'Vente au client (120 unités)',
      userId: 'user_2'
    });

    console.log(`✅ Sortie créée: ${exit1.quantity} unités`);
    console.log(`   Type: ${exit1.type}`);
    console.log(`   Coût total: ${exit1.totalCost.toFixed(2)}€`);
    console.log(`   Stock avant: ${exit1.stockBefore} unités`);
    console.log(`   Stock après: ${exit1.stockAfter} unités`);
    console.log(`   Détails des lots consommés:`);
    
    exit1.details.forEach((detail, index) => {
      console.log(`   ${index + 1}. Lot #${detail.entry.id}: ${detail.quantity} unités × ${detail.unitCost}€ = ${detail.subtotal.toFixed(2)}€`);
    });
    console.log('');

    console.log('=== Étape 4 : Vérifier les lots restants ===\n');
    const remainingLots = await lotService.getProductLots(productId);
    remainingLots.forEach((lot, index) => {
      console.log(`Lot ${index + 1}: ${lot.availableQuantity}/${lot.quantity} unités disponibles à ${lot.unitCost}€`);
    });
    console.log('');

    console.log('=== Étape 5 : Sortie SUPERVISEUR de 60 unités ===\n');
    const exit2 = await lotService.createStockExit({
      productId,
      type: 'SUPERVISEUR',
      quantity: 60,
      origin: 'VENTE_789',
      reason: 'Vente en gros (60 unités)',
      userId: 'user_2'
    });

    console.log(`✅ Sortie créée: ${exit2.quantity} unités`);
    console.log(`   Type: ${exit2.type}`);
    console.log(`   Coût total: ${exit2.totalCost.toFixed(2)}€`);
    console.log(`   Détails:`);
    
    exit2.details.forEach((detail, index) => {
      console.log(`   ${index + 1}. Lot #${detail.entry.id}: ${detail.quantity} unités × ${detail.unitCost}€ = ${detail.subtotal.toFixed(2)}€`);
    });
    console.log('');

    console.log('=== Étape 6 : Coût moyen pondéré ===\n');
    const avgCost = await lotService.getAverageCost(productId);
    console.log(`Coût moyen pondéré des lots disponibles: ${avgCost.toFixed(2)}€\n`);

    console.log('✅ Exemple terminé avec succès !');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.details) {
      console.error('Détails:', error.details);
    }
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  runExample().then(() => {
    process.exit(0);
  }).catch(error => {
    console.error('Erreur fatale:', error);
    process.exit(1);
  });
}

module.exports = { runExample };
