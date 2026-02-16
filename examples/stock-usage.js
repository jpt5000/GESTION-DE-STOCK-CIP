/**
 * Exemples d'utilisation du service de gestion de stock
 * 
 * Ce fichier montre comment utiliser le StockService pour gérer le stock
 * selon les règles métier définies.
 */

const stockService = require('../src/services/stockService');

// Exemple 1 : Réception d'une commande
async function example1_receiveOrder() {
  console.log('\n=== Exemple 1 : Réception d\'une commande ===');
  
  try {
    const movement = await stockService.recordMovement({
      productId: 1,
      type: 'IN',
      quantity: 100,
      origin: 'COMMANDE_12345',
      reason: 'Réception commande fournisseur',
      userId: 'user_1'
    });
    
    console.log('✅ Mouvement créé:', movement.id);
    console.log(`Stock avant: ${movement.stockBefore}`);
    console.log(`Stock après: ${movement.stockAfter}`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Exemple 2 : Vente de produits
async function example2_sellProducts() {
  console.log('\n=== Exemple 2 : Vente de produits ===');
  
  try {
    const movement = await stockService.recordMovement({
      productId: 1,
      type: 'OUT',
      quantity: 30,
      origin: 'VENTE_67890',
      reason: 'Vente au client',
      userId: 'user_2'
    });
    
    console.log('✅ Mouvement créé:', movement.id);
    console.log(`Stock avant: ${movement.stockBefore}`);
    console.log(`Stock après: ${movement.stockAfter}`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    if (error.code === 'INSUFFICIENT_STOCK') {
      console.error('Détails:', error.details);
    }
  }
}

// Exemple 3 : Tentative de sortie avec stock insuffisant (sera bloquée)
async function example3_insufficientStock() {
  console.log('\n=== Exemple 3 : Tentative avec stock insuffisant ===');
  
  try {
    // Essayer de sortir 1000 unités (probablement plus que le stock disponible)
    await stockService.recordMovement({
      productId: 1,
      type: 'OUT',
      quantity: 1000,
      origin: 'VENTE_99999',
      reason: 'Vente au client',
      userId: 'user_2'
    });
  } catch (error) {
    if (error.code === 'INSUFFICIENT_STOCK') {
      console.log('✅ Opération correctement bloquée');
      console.log(`Stock actuel: ${error.details.currentStock}`);
      console.log(`Quantité demandée: ${error.details.requestedQuantity}`);
      console.log(`Manque: ${error.details.missingQuantity} unités`);
    } else {
      console.error('❌ Erreur inattendue:', error.message);
    }
  }
}

// Exemple 4 : Calculer le stock actuel
async function example4_getCurrentStock() {
  console.log('\n=== Exemple 4 : Calculer le stock actuel ===');
  
  try {
    const stock = await stockService.calculateCurrentStock(1);
    console.log(`Stock actuel du produit 1: ${stock} unités`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Exemple 5 : Obtenir l'historique complet
async function example5_getHistory() {
  console.log('\n=== Exemple 5 : Historique des mouvements ===');
  
  try {
    const history = await stockService.getProductHistory(1);
    console.log(`Nombre de mouvements: ${history.length}`);
    
    history.forEach((movement, index) => {
      console.log(`\n${index + 1}. ${movement.type} - ${movement.quantity} unités`);
      console.log(`   Date: ${movement.createdAt}`);
      console.log(`   Origine: ${movement.origin || 'N/A'}`);
      console.log(`   Raison: ${movement.reason || 'N/A'}`);
      console.log(`   Stock après: ${movement.stockAfter}`);
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Exemple 6 : Vérifier la cohérence du stock
async function example6_verifyConsistency() {
  console.log('\n=== Exemple 6 : Vérification de cohérence ===');
  
  try {
    const verification = await stockService.verifyStockConsistency(1);
    
    if (verification.isConsistent) {
      console.log('✅ Stock cohérent');
      console.log(`Stock stocké: ${verification.storedStock}`);
      console.log(`Stock calculé: ${verification.calculatedStock}`);
    } else {
      console.log('⚠️  Incohérence détectée!');
      console.log(`Stock stocké: ${verification.storedStock}`);
      console.log(`Stock calculé: ${verification.calculatedStock}`);
      console.log(`Différence: ${verification.difference}`);
    }
    
    console.log(`Nombre de mouvements: ${verification.movementsCount}`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Exemple 7 : Ajustement de stock
async function example7_adjustment() {
  console.log('\n=== Exemple 7 : Ajustement de stock ===');
  
  try {
    // Ajustement positif (on trouve plus de stock que prévu)
    const adjustment = await stockService.recordMovement({
      productId: 1,
      type: 'ADJUSTMENT',
      quantity: 10, // Ajoute 10 unités
      origin: 'INVENTAIRE_2024',
      reason: 'Correction inventaire physique (plus-value)',
      userId: 'user_3'
    });
    
    console.log('✅ Ajustement créé:', adjustment.id);
    console.log(`Stock avant: ${adjustment.stockBefore}`);
    console.log(`Stock après: ${adjustment.stockAfter}`);
  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

// Exemple 8 : Annuler un mouvement
async function example8_cancelMovement() {
  console.log('\n=== Exemple 8 : Annuler un mouvement ===');
  
  try {
    // Supposons que le mouvement ID 5 existe
    const result = await stockService.cancelMovement(5);
    
    console.log('✅ Mouvement annulé');
    console.log(`Stock avant annulation: ${result.stockBefore}`);
    console.log(`Stock après annulation: ${result.stockAfter}`);
  } catch (error) {
    if (error.code === 'MOVEMENT_NOT_FOUND') {
      console.log('ℹ️  Mouvement non trouvé (normal si la base est vide)');
    } else if (error.code === 'NEGATIVE_STOCK_VIOLATION') {
      console.log('⚠️  Annulation bloquée: créerait un stock négatif');
    } else {
      console.error('❌ Erreur:', error.message);
    }
  }
}

// Exécuter tous les exemples
async function runAllExamples() {
  console.log('🚀 Exemples d\'utilisation du service de gestion de stock\n');
  
  // Note: Ces exemples nécessitent une base de données configurée
  // et au moins un produit avec ID 1
  
  try {
    await example1_receiveOrder();
    await example2_sellProducts();
    await example3_insufficientStock();
    await example4_getCurrentStock();
    await example5_getHistory();
    await example6_verifyConsistency();
    await example7_adjustment();
    await example8_cancelMovement();
    
    console.log('\n✅ Tous les exemples terminés');
  } catch (error) {
    console.error('\n❌ Erreur lors de l\'exécution:', error);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  runAllExamples().then(() => {
    process.exit(0);
  }).catch(error => {
    console.error('Erreur fatale:', error);
    process.exit(1);
  });
}

module.exports = {
  example1_receiveOrder,
  example2_sellProducts,
  example3_insufficientStock,
  example4_getCurrentStock,
  example5_getHistory,
  example6_verifyConsistency,
  example7_adjustment,
  example8_cancelMovement
};
