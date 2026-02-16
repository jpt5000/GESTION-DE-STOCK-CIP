# Documentation - Système de gestion de stock par lots avec FIFO

## Vue d'ensemble

Le système implémente une gestion de stock avancée avec :
- **Lots distincts** : Chaque entrée crée un lot avec son propre prix d'achat
- **Méthode FIFO** : First In, First Out (premier entré, premier sorti)
- **Traçabilité complète** : Détails précis des lots consommés par chaque sortie
- **Calcul automatique des coûts** : Coût total calculé à partir des prix d'achat des lots

## Architecture

### Modèles de données

#### StockEntry (Lot)
Chaque entrée de stock crée un lot distinct avec :
- `quantity` : Quantité totale du lot
- `quantityUsed` : Quantité déjà utilisée
- `availableQuantity` : Quantité disponible (quantity - quantityUsed)
- `unitCost` : Prix d'achat unitaire du lot
- `entryDate` : Date d'entrée (pour tri FIFO)
- `origin` : Origine de l'entrée
- `reason` : Raison de l'entrée

#### StockExit (Sortie)
Une sortie de stock avec :
- `type` : "INDIVIDU" ou "SUPERVISEUR"
- `quantity` : Quantité totale sortie
- `totalCost` : Coût total calculé automatiquement
- `exitDate` : Date de sortie

#### StockExitDetail (Détail de sortie)
Traçabilité complète :
- `entryId` : ID du lot consommé
- `quantity` : Quantité prélevée sur ce lot
- `unitCost` : Prix d'achat unitaire du lot
- `subtotal` : Coût pour ce lot (quantity × unitCost)

## Règles métier implémentées

### 1. Entrée de stock
- Chaque entrée crée un **lot distinct**
- Chaque lot a son **prix d'achat unitaire**
- Le stock total = somme des quantités disponibles de tous les lots

### 2. Sortie de stock
- **Type INDIVIDU** : Sortie unitaire
- **Type SUPERVISEUR** : Sortie en gros
- **Méthode FIFO** : Les lots les plus anciens sont consommés en premier
- **Consommation multiple** : Une sortie peut consommer plusieurs lots
- **Validation** : Vérifie que le stock disponible est suffisant

### 3. Calcul du coût
```
Coût total = Σ (quantité_prélevée_par_lot × prix_achat_du_lot)
```

### 4. Validation stricte
- ✅ Stock non négatif : Bloqué au niveau applicatif
- ✅ Transactions atomiques : Rollback en cas d'erreur
- ✅ Traçabilité complète : Chaque lot consommé est enregistré

## Utilisation

### Créer une entrée de stock (lot)

```javascript
const lotService = require('./src/services/lotService');

// Créer un lot de 100 unités à 10€
const lot = await lotService.createStockEntry({
  productId: 1,
  quantity: 100,
  unitCost: 10.00,
  origin: 'COMMANDE_123',
  reason: 'Réception commande fournisseur',
  userId: 'user_1'
});
```

### Créer une sortie de stock (avec FIFO)

```javascript
// Sortie de 120 unités
// Le système consomme automatiquement les lots selon FIFO
const exit = await lotService.createStockExit({
  productId: 1,
  type: 'INDIVIDU', // ou 'SUPERVISEUR'
  quantity: 120,
  origin: 'VENTE_456',
  reason: 'Vente au client',
  userId: 'user_2'
});

// Le résultat contient :
// - exit.totalCost : Coût total calculé
// - exit.details : Détails des lots consommés
```

### Exemple complet : Sortie approvisionnée par plusieurs lots

```javascript
// 1. Créer plusieurs lots avec prix différents
await lotService.createStockEntry({
  productId: 1,
  quantity: 100,
  unitCost: 10.00,
  origin: 'COMMANDE_001'
}); // Lot 1 : 100 unités à 10€

await lotService.createStockEntry({
  productId: 1,
  quantity: 50,
  unitCost: 12.00,
  origin: 'COMMANDE_002'
}); // Lot 2 : 50 unités à 12€

// 2. Sortie de 120 unités (consomme plusieurs lots)
const exit = await lotService.createStockExit({
  productId: 1,
  type: 'INDIVIDU',
  quantity: 120,
  origin: 'VENTE_789'
});

// Résultat :
// - 100 unités du Lot 1 (10€) = 1000€
// - 20 unités du Lot 2 (12€) = 240€
// - Coût total : 1240€
//
// exit.details = [
//   { entryId: 1, quantity: 100, unitCost: 10.00, subtotal: 1000.00 },
//   { entryId: 2, quantity: 20, unitCost: 12.00, subtotal: 240.00 }
// ]
```

## API REST

### POST /api/stock-entries
Créer une nouvelle entrée de stock (lot).

**Corps :**
```json
{
  "productId": 1,
  "quantity": 100,
  "unitCost": 10.00,
  "origin": "COMMANDE_123",
  "reason": "Réception commande",
  "userId": "user_1"
}
```

### POST /api/stock-exits
Créer une sortie avec consommation FIFO.

**Corps :**
```json
{
  "productId": 1,
  "type": "INDIVIDU",
  "quantity": 120,
  "origin": "VENTE_456",
  "reason": "Vente au client",
  "userId": "user_2"
}
```

**Réponse :**
```json
{
  "message": "Sortie créée avec succès",
  "exit": {
    "id": 1,
    "quantity": 120,
    "type": "INDIVIDU",
    "totalCost": 1240.00,
    "details": [
      {
        "entryId": 1,
        "quantity": 100,
        "unitCost": 10.00,
        "subtotal": 1000.00
      },
      {
        "entryId": 2,
        "quantity": 20,
        "unitCost": 12.00,
        "subtotal": 240.00
      }
    ]
  },
  "stockBefore": 150,
  "stockAfter": 30,
  "totalCost": 1240.00
}
```

### GET /api/stock-entries/product/:productId
Récupère tous les lots d'un produit (ordre FIFO).

### GET /api/stock-exits/product/:productId
Récupère toutes les sorties d'un produit avec détails.

## Logique FIFO - Décisions techniques

### Pourquoi FIFO ?

**Avantages :**
- ✅ Respecte la rotation naturelle des stocks (évite la péremption)
- ✅ Calcul de coût réaliste (ancien prix → ancien coût)
- ✅ Conforme aux pratiques comptables standards
- ✅ Facilite la traçabilité

### Implémentation

```javascript
// 1. Récupérer les lots disponibles triés par date croissante
const lots = await prisma.stockEntry.findMany({
  where: { productId, availableQuantity: { gt: 0 } },
  orderBy: { entryDate: 'asc' } // FIFO : plus ancien en premier
});

// 2. Consommer séquentiellement jusqu'à satisfaire la quantité
for (const lot of lots) {
  const quantityFromLot = Math.min(remainingQuantity, lot.availableQuantity);
  // Mettre à jour le lot et calculer le coût
  // ...
  remainingQuantity -= quantityFromLot;
  if (remainingQuantity <= 0) break;
}
```

### Pourquoi des transactions atomiques ?

Toutes les opérations utilisent `prisma.$transaction()` pour garantir :
- **Atomicité** : Soit tout réussit, soit rien n'est modifié
- **Cohérence** : Les lots, le stock et les détails sont toujours synchronisés
- **Isolation** : Les opérations concurrentes ne se chevauchent pas

### Traçabilité

Chaque sortie enregistre dans `StockExitDetail` :
- Quel lot a été consommé
- Combien d'unités ont été prélevées
- Le prix d'achat du lot au moment de la consommation
- Le sous-total pour ce lot

Cela permet de :
- Vérifier a posteriori les calculs
- Auditer les mouvements
- Recalculer les coûts si nécessaire

## Exemple détaillé

### Scénario : Sortie de 150 unités avec 3 lots

**État initial :**
- Lot 1 : 100 unités à 10€ (entré le 01/01/2024)
- Lot 2 : 50 unités à 12€ (entré le 05/01/2024)
- Lot 3 : 75 unités à 9.50€ (entré le 10/01/2024)
- Stock total : 225 unités

**Sortie de 150 unités :**

1. **Consommation FIFO :**
   - Lot 1 : 100 unités × 10€ = 1000€
   - Lot 2 : 50 unités × 12€ = 600€
   - Coût total : 1600€

2. **État après :**
   - Lot 1 : 0/100 unités disponibles (100% utilisé)
   - Lot 2 : 0/50 unités disponibles (100% utilisé)
   - Lot 3 : 75/75 unités disponibles (0% utilisé)
   - Stock total : 75 unités

3. **Détails enregistrés :**
   ```json
   {
     "exitId": 1,
     "totalCost": 1600.00,
     "details": [
       {
         "entryId": 1,
         "quantity": 100,
         "unitCost": 10.00,
         "subtotal": 1000.00
       },
       {
         "entryId": 2,
         "quantity": 50,
         "unitCost": 12.00,
         "subtotal": 600.00
       }
     ]
   }
   ```

## Tests

Pour tester le système :

```bash
node examples/fifo-example.js
```

Ce script illustre :
- Création de plusieurs lots avec prix différents
- Sortie qui consomme plusieurs lots
- Calcul automatique du coût total
- Affichage des détails de consommation

## Maintenance

### Vérifier le stock disponible

```javascript
const stock = await lotService.calculateAvailableStock(productId);
```

### Obtenir le coût moyen pondéré

```javascript
const avgCost = await lotService.getAverageCost(productId);
```

### Voir tous les lots d'un produit

```javascript
const lots = await lotService.getProductLots(productId);
```

## Notes importantes

1. **Stock calculé** : Le champ `quantity` dans `Product` est mis à jour automatiquement, mais le stock réel est toujours calculé à partir des lots
2. **Prix d'achat variable** : Chaque lot peut avoir un prix différent
3. **Pas de modification** : Les lots ne peuvent pas être modifiés après création (traçabilité)
4. **Pas d'annulation** : Les sorties ne peuvent pas être annulées directement (créer une entrée inverse si nécessaire)
