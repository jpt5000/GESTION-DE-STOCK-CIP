# Documentation - Gestion de Stock

## Vue d'ensemble

Le système de gestion de stock est conçu pour garantir la **traçabilité**, la **cohérence** et la **fiabilité** de toutes les opérations sur le stock. Toute modification du stock passe obligatoirement par un mouvement historisé.

## Architecture

### Composants principaux

1. **Modèle de données** (`prisma/schema.prisma`)
   - `Product` : Produits avec stock initial
   - `Movement` : Historique de tous les mouvements

2. **Service métier** (`src/services/stockService.js`)
   - Logique métier centralisée
   - Validation stricte des règles
   - Transactions atomiques

3. **Contrôleur** (`src/controllers/movementController.js`)
   - Gestion des requêtes HTTP
   - Délégation au service

## Règles métier

### 1. Calcul du stock

**Règle fondamentale** : Le stock actuel est calculé dynamiquement à partir de la somme des mouvements.

```
Stock actuel = Stock initial (0) + Σ mouvements validés
```

**Note** : Le champ `quantity` dans la table `Product` est maintenu pour des raisons de performance, mais le stock réel est toujours recalculé à partir des mouvements pour garantir la cohérence.

### 2. Types de mouvements

| Type | Description | Effet sur le stock |
|------|-------------|-------------------|
| `IN` | Entrée de stock | `+ quantity` |
| `OUT` | Sortie de stock | `- quantity` |
| `ADJUSTMENT` | Ajustement | `+ quantity` (peut être négatif) |

### 3. Validation stricte

- ✅ **Produit doit exister** : Tout mouvement nécessite un produit valide
- ✅ **Quantité positive** : La quantité doit toujours être un entier positif
- ✅ **Stock non négatif** : Aucune opération ne peut créer un stock négatif
- ✅ **Sortie contrôlée** : Les sorties sont bloquées si le stock est insuffisant
- ✅ **Transaction atomique** : Toutes les opérations sont atomiques (rollback en cas d'erreur)

### 4. Traçabilité

Chaque mouvement enregistre :
- **Type** : IN, OUT, ou ADJUSTMENT
- **Quantité** : Toujours positive
- **Date** : Horodatage automatique
- **Origine** : Provenance du mouvement (ex: "COMMANDE_123", "INVENTAIRE")
- **Raison** : Motif du mouvement (ex: "Réception commande", "Inventaire physique")
- **Utilisateur** : ID de l'utilisateur qui effectue l'opération

## Utilisation

### Enregistrer une entrée de stock

```javascript
const stockService = require('./src/services/stockService');

// Entrée de 100 unités suite à une commande
const movement = await stockService.recordMovement({
  productId: 1,
  type: 'IN',
  quantity: 100,
  origin: 'COMMANDE_12345',
  reason: 'Réception commande fournisseur',
  userId: 'user_123'
});
```

### Enregistrer une sortie de stock

```javascript
// Sortie de 50 unités pour une vente
// La validation vérifie automatiquement que le stock est suffisant
try {
  const movement = await stockService.recordMovement({
    productId: 1,
    type: 'OUT',
    quantity: 50,
    origin: 'VENTE_67890',
    reason: 'Vente au client',
    userId: 'user_123'
  });
} catch (error) {
  if (error.code === 'INSUFFICIENT_STOCK') {
    console.error('Stock insuffisant:', error.details);
  }
}
```

### Ajustement de stock

```javascript
// Ajustement positif (correction d'inventaire)
await stockService.recordMovement({
  productId: 1,
  type: 'ADJUSTMENT',
  quantity: 10,  // Ajoute 10 unités
  origin: 'INVENTAIRE_2024',
  reason: 'Correction inventaire physique',
  userId: 'user_123'
});

// Ajustement négatif (perte, casse)
await stockService.recordMovement({
  productId: 1,
  type: 'ADJUSTMENT',
  quantity: 5,   // Retire 5 unités (géré comme soustraction)
  origin: 'INVENTAIRE_2024',
  reason: 'Casse détectée lors de l\'inventaire',
  userId: 'user_123'
});
```

### Calculer le stock actuel

```javascript
const currentStock = await stockService.calculateCurrentStock(productId);
console.log(`Stock actuel: ${currentStock}`);
```

### Obtenir l'historique complet

```javascript
const history = await stockService.getProductHistory(productId);
// Retourne tous les mouvements avec le stock cumulatif après chaque mouvement
```

### Vérifier la cohérence

```javascript
const verification = await stockService.verifyStockConsistency(productId);
if (!verification.isConsistent) {
  console.error('Incohérence détectée:', verification);
  // Stock stocké != Stock calculé
}
```

### Annuler un mouvement

```javascript
try {
  const result = await stockService.cancelMovement(movementId);
  // Le mouvement est supprimé et le stock est recalculé
} catch (error) {
  if (error.code === 'NEGATIVE_STOCK_VIOLATION') {
    console.error('Impossible d\'annuler: créerait un stock négatif');
  }
}
```

## API REST

### POST /api/movements

Créer un nouveau mouvement.

**Corps de la requête** :
```json
{
  "productId": 1,
  "type": "IN",
  "quantity": 100,
  "origin": "COMMANDE_123",
  "reason": "Réception commande",
  "userId": "user_123"
}
```

**Réponse** :
```json
{
  "message": "Mouvement enregistré avec succès",
  "movement": { ... },
  "stockBefore": 50,
  "stockAfter": 150
}
```

### GET /api/movements/product/:productId

Obtenir l'historique complet d'un produit.

### GET /api/movements/product/:productId/verify

Vérifier la cohérence du stock.

**Réponse** :
```json
{
  "productId": 1,
  "productName": "Produit A",
  "storedStock": 150,
  "calculatedStock": 150,
  "isConsistent": true,
  "difference": 0,
  "movementsCount": 5
}
```

### DELETE /api/movements/:id

Annuler un mouvement (supprime et inverse son effet).

## Gestion des erreurs

### Codes d'erreur

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `PRODUCT_NOT_FOUND` | Produit introuvable | 404 |
| `INSUFFICIENT_STOCK` | Stock insuffisant pour une sortie | 400 |
| `NEGATIVE_STOCK_VIOLATION` | Opération créerait un stock négatif | 400 |
| `INVALID_MOVEMENT_TYPE` | Type de mouvement invalide | 400 |
| `INVALID_QUANTITY` | Quantité invalide | 400 |
| `INVALID_PRODUCT_ID` | ID produit invalide | 400 |
| `MOVEMENT_NOT_FOUND` | Mouvement introuvable | 404 |
| `DB_NOT_AVAILABLE` | Base de données indisponible | 500 |

### Exemple de réponse d'erreur

```json
{
  "error": "Stock insuffisant. Stock actuel: 50, Quantité demandée: 100",
  "code": "INSUFFICIENT_STOCK",
  "details": {
    "productId": 1,
    "currentStock": 50,
    "requestedQuantity": 100,
    "missingQuantity": 50
  }
}
```

## Décisions techniques

### Pourquoi calculer le stock à partir des mouvements ?

1. **Traçabilité complète** : Chaque modification est historisée
2. **Audit** : Possibilité de vérifier le stock à n'importe quel moment historique
3. **Cohérence** : Impossible d'avoir des incohérences si toutes les opérations passent par les mouvements
4. **Récupération** : En cas d'erreur, on peut recalculer le stock depuis le début

### Pourquoi maintenir le champ `quantity` dans `Product` ?

Le champ `quantity` dans la table `Product` est maintenu pour :
- **Performance** : Éviter de recalculer la somme à chaque requête
- **Compatibilité** : Compatible avec l'ancien code
- **Indicateur rapide** : Affichage rapide dans les listes

**Important** : Ce champ est mis à jour automatiquement lors de chaque mouvement, mais il est toujours vérifié contre le calcul réel pour détecter les incohérences.

### Pourquoi utiliser des transactions ?

Toutes les opérations de mouvement utilisent des transactions Prisma pour garantir :
- **Atomicité** : Soit tout réussit, soit tout échoue (pas d'état intermédiaire)
- **Cohérence** : Le mouvement et la mise à jour du stock sont toujours synchronisés
- **Isolation** : Les opérations concurrentes ne se chevauchent pas

### Pourquoi bloquer les opérations qui créent un stock négatif ?

C'est une **règle métier fondamentale** : dans un système de gestion de stock réel, un stock négatif indique une erreur ou une incohérence. Bloquer ces opérations permet de :
- Détecter les problèmes immédiatement
- Forcer la correction des données avant de continuer
- Maintenir la cohérence du système

## Exemples de scénarios

### Scénario 1 : Réception d'une commande

```javascript
// 1. Réception de 100 unités
await stockService.recordMovement({
  productId: 1,
  type: 'IN',
  quantity: 100,
  origin: 'COMMANDE_12345',
  reason: 'Réception commande fournisseur',
  userId: 'user_1'
});
// Stock: 0 → 100
```

### Scénario 2 : Vente de produits

```javascript
// 2. Vente de 30 unités
await stockService.recordMovement({
  productId: 1,
  type: 'OUT',
  quantity: 30,
  origin: 'VENTE_67890',
  reason: 'Vente au client',
  userId: 'user_2'
});
// Stock: 100 → 70
```

### Scénario 3 : Tentative de sortie avec stock insuffisant

```javascript
// 3. Tentative de vente de 100 unités (stock actuel: 70)
try {
  await stockService.recordMovement({
    productId: 1,
    type: 'OUT',
    quantity: 100,
    origin: 'VENTE_99999',
    reason: 'Vente au client',
    userId: 'user_2'
  });
} catch (error) {
  // Erreur: INSUFFICIENT_STOCK
  // Stock actuel: 70, Quantité demandée: 100
  // Opération bloquée
}
```

### Scénario 4 : Ajustement d'inventaire

```javascript
// 4. Inventaire physique: on trouve 5 unités de plus
await stockService.recordMovement({
  productId: 1,
  type: 'ADJUSTMENT',
  quantity: 5,
  origin: 'INVENTAIRE_2024',
  reason: 'Différence d\'inventaire (plus-value)',
  userId: 'user_3'
});
// Stock: 70 → 75
```

### Scénario 5 : Vérification de cohérence

```javascript
// 5. Vérifier que tout est cohérent
const verification = await stockService.verifyStockConsistency(1);
console.log(verification);
// {
//   productId: 1,
//   storedStock: 75,
//   calculatedStock: 75,
//   isConsistent: true,
//   movementsCount: 3
// }
```

## Tests et validation

Pour tester la logique, utilisez les tests unitaires dans `tests/`. Exemples :

```javascript
// Test: Stock insuffisant
test('Should reject OUT movement when stock is insufficient', async () => {
  await expect(
    stockService.recordMovement({
      productId: 1,
      type: 'OUT',
      quantity: 1000 // Plus que le stock disponible
    })
  ).rejects.toThrow(StockError);
});
```

## Maintenance

### Détecter et corriger les incohérences

Si vous suspectez une incohérence :

1. Utilisez `verifyStockConsistency()` pour vérifier
2. Si `isConsistent: false`, examinez les mouvements
3. Si nécessaire, créez un mouvement d'ajustement pour corriger

### Recalculer le stock pour tous les produits

```javascript
// Script de maintenance
const products = await prisma.product.findMany();

for (const product of products) {
  const calculated = await stockService.calculateCurrentStock(product.id);
  
  if (product.quantity !== calculated) {
    console.log(`Incohérence pour ${product.name}: stocké=${product.quantity}, calculé=${calculated}`);
    
    // Option: Corriger automatiquement
    await prisma.product.update({
      where: { id: product.id },
      data: { quantity: calculated }
    });
  }
}
```
