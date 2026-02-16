# Gestion de Stock - API REST

Application de gestion de stock avec Node.js, Express, Prisma et MySQL.

## 🚀 Fonctionnalités

- ✅ Gestion complète des produits (CRUD)
- ✅ Gestion des catégories
- ✅ Gestion des fournisseurs
- ✅ Gestion des mouvements de stock (entrées/sorties)
- ✅ Validation des données
- ✅ Sécurité (sanitization, rate limiting)
- ✅ Gestion d'erreurs centralisée
- ✅ Documentation API avec Swagger
- ✅ Tests unitaires et d'intégration
- ✅ Architecture MVC avec controllers et middlewares

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn

**Base de données** (choisir une option) :
- Option 1 : SQLite (pas d'installation nécessaire - recommandé pour le développement)
- Option 2 : MySQL local (installation requise)
- Option 3 : Docker (optionnel - voir `docker-compose.yml`)

## 🔧 Installation

1. Cloner le projet
2. Installer les dépendances :
```bash
npm install
```

3. Configurer la base de données :

### 🟢 Option A : SQLite (Simple - Recommandé)

1. Modifier `prisma/schema.prisma` :
   ```prisma
   datasource db {
     provider = "sqlite"  // Changez de "mysql" à "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

2. Créer le fichier `.env` :
   ```env
   DATABASE_URL="file:./prisma/dev.db"
   PORT=3001
   NODE_ENV=development
   ```

3. Créer la migration :
   ```bash
   rm -rf prisma/migrations  # Supprimer les migrations MySQL existantes
   npx prisma migrate dev --name init
   ```

### 🔵 Option B : MySQL avec Docker

```bash
# Démarrer MySQL avec Docker Compose
docker-compose up -d
```

Puis créer le fichier `.env` :
```env
DATABASE_URL="mysql://gs_user:gs_password@localhost:3306/gestion_stock"
PORT=3001
NODE_ENV=development
```

### 🟡 Option C : MySQL local (sans Docker)

Voir le guide complet dans [`SETUP_SANS_DOCKER.md`](SETUP_SANS_DOCKER.md)

4. Générer le client Prisma :
```bash
npm run prisma:generate
```

5. Appliquer les migrations (si MySQL) :
```bash
npm run prisma:migrate
```

## 🏃 Démarrage

### Mode développement
```bash
npm run dev
```

### Mode production
```bash
npm start
```

Le serveur démarre sur `http://localhost:3001`

## 📚 Documentation API

La documentation Swagger est disponible à : `http://localhost:3001/api-docs`

## 🧪 Tests

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode watch
npm run test:watch
```

## 📁 Structure du projet

```
Gestion de stock/
├── src/
│   ├── config/              # Configuration (database, swagger)
│   ├── controllers/         # Contrôleurs (logique métier)
│   │   ├── productController.js
│   │   ├── categoryController.js
│   │   ├── supplierController.js
│   │   └── movementController.js
│   ├── middlewares/         # Middlewares Express
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   ├── notFound.js
│   │   ├── security.js
│   │   └── validation.js
│   ├── routes/              # Routes API
│   │   ├── items.js
│   │   ├── categories.js
│   │   ├── suppliers.js
│   │   └── movements.js
│   ├── app.js               # Configuration Express
│   └── server.js            # Point d'entrée
├── prisma/
│   ├── schema.prisma        # Schéma Prisma
│   └── migrations/          # Migrations MySQL
├── tests/                   # Tests
├── frontend/                # Frontend React
└── docker-compose.yml       # Services Docker
```

## 🔌 Endpoints API

### Produits (`/api/items`)
- `GET /api/items` - Liste tous les produits
- `GET /api/items/:id` - Récupère un produit
- `POST /api/items` - Crée un produit
- `PUT /api/items/:id` - Met à jour un produit
- `DELETE /api/items/:id` - Supprime un produit

### Catégories (`/api/categories`)
- `GET /api/categories` - Liste toutes les catégories
- `GET /api/categories/:id` - Récupère une catégorie
- `POST /api/categories` - Crée une catégorie
- `PUT /api/categories/:id` - Met à jour une catégorie
- `DELETE /api/categories/:id` - Supprime une catégorie

### Fournisseurs (`/api/suppliers`)
- `GET /api/suppliers` - Liste tous les fournisseurs
- `GET /api/suppliers/:id` - Récupère un fournisseur
- `POST /api/suppliers` - Crée un fournisseur
- `PUT /api/suppliers/:id` - Met à jour un fournisseur
- `DELETE /api/suppliers/:id` - Supprime un fournisseur

### Mouvements (`/api/movements`)
- `GET /api/movements` - Liste tous les mouvements
- `GET /api/movements/:id` - Récupère un mouvement
- `GET /api/movements/product/:productId` - Mouvements d'un produit
- `POST /api/movements` - Crée un mouvement (met à jour le stock automatiquement)
- `DELETE /api/movements/:id` - Supprime un mouvement (annule son effet)

## 🔒 Sécurité

- **Sanitization** : Nettoyage automatique des entrées utilisateur
- **Rate Limiting** : Limite de 100 requêtes par 15 minutes par IP
- **Validation** : Validation stricte des données avant traitement
- **Authentification** : Support pour API keys (configurable via `API_KEY`)

## 🗄️ Base de données

Le projet utilise MySQL avec Prisma ORM. Le schéma inclut :
- **Product** : Produits avec prix, quantité, catégorie et fournisseur
- **Category** : Catégories de produits
- **Supplier** : Fournisseurs
- **Movement** : Historique des mouvements de stock

## 🐳 Docker

Services disponibles :
- **MySQL** : Port 3306
- **Adminer** : Interface web pour MySQL (http://localhost:8081)

## 📝 Scripts disponibles

- `npm start` - Démarre le serveur en production
- `npm run dev` - Démarre en mode développement avec nodemon
- `npm test` - Lance les tests
- `npm run prisma:generate` - Génère le client Prisma
- `npm run prisma:migrate` - Applique les migrations
- `npm run prisma:studio` - Ouvre Prisma Studio

## 🔄 Améliorations récentes

- ✅ Correction de l'incohérence MySQL/SQLite
- ✅ Refactorisation en architecture MVC
- ✅ Implémentation complète des APIs (catégories, fournisseurs, mouvements)
- ✅ Ajout de la validation avec middlewares
- ✅ Sécurisation avec sanitization et rate limiting
- ✅ Gestion d'erreurs centralisée
- ✅ Tests unitaires et d'intégration
- ✅ Documentation Swagger/OpenAPI

## 📄 Licence

ISC
