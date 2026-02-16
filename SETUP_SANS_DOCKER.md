# Configuration sans Docker

Ce guide vous explique comment configurer le projet **sans utiliser Docker**.

## 🎯 Option 1 : SQLite (Recommandé pour le développement)

**Avantages** : Simple, rapide, pas besoin de serveur de base de données

### Étapes :

**Méthode automatique (recommandée)** :
```bash
npm run setup:sqlite
npm run prisma:generate
npx prisma migrate dev --name init
npm run dev
```

**Méthode manuelle** :

1. **Modifier le schéma Prisma** :
   Ouvrez `prisma/schema.prisma` et assurez-vous que SQLite est actif :
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```
   (MySQL doit être commenté)

2. **Créer le fichier `.env`** :
   ```bash
   cp .env.example .env
   ```
   Ou créer manuellement :
   ```env
   DATABASE_URL="file:./prisma/dev.db"
   PORT=3001
   NODE_ENV=development
   ```

3. **Générer le client Prisma** :
   ```bash
   npm run prisma:generate
   ```

4. **Appliquer les migrations** :
   ```bash
   npx prisma migrate dev --name init
   ```
   (Les migrations SQLite sont déjà présentes et correctes)

5. **C'est tout !** Vous pouvez maintenant démarrer :
   ```bash
   npm run dev
   ```

---

## 🗄️ Option 2 : MySQL installé localement

**Avantages** : Plus proche de la production, meilleures performances

### Prérequis :
- Installer MySQL sur votre machine :
  - **Windows** : [MySQL Installer](https://dev.mysql.com/downloads/installer/)
  - **macOS** : `brew install mysql` ou [MySQL DMG](https://dev.mysql.com/downloads/mysql/)
  - **Linux** : `sudo apt-get install mysql-server` (Ubuntu/Debian)

### Étapes :

1. **Démarrer MySQL** :
   ```bash
   # Windows (via services)
   # Démarrer le service MySQL depuis les Services Windows
   
   # macOS/Linux
   mysql.server start
   # ou
   sudo systemctl start mysql
   ```

2. **Créer la base de données** :
   ```bash
   mysql -u root -p
   ```
   Puis dans MySQL :
   ```sql
   CREATE DATABASE gestion_stock;
   CREATE USER 'gs_user'@'localhost' IDENTIFIED BY 'gs_password';
   GRANT ALL PRIVILEGES ON gestion_stock.* TO 'gs_user'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   ```

3. **Créer le fichier `.env`** :
   ```env
   DATABASE_URL="mysql://gs_user:gs_password@localhost:3306/gestion_stock"
   PORT=3001
   NODE_ENV=development
   ```

4. **Vérifier que le schéma Prisma utilise MySQL** :
   Dans `prisma/schema.prisma`, assurez-vous que :
   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }
   ```

5. **Appliquer les migrations** :
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

6. **Démarrer l'application** :
   ```bash
   npm run dev
   ```

---

## ☁️ Option 3 : Base de données cloud (PlanetScale, Supabase, etc.)

### Exemple avec PlanetScale (MySQL gratuit) :

1. Créer un compte sur [PlanetScale](https://planetscale.com/)
2. Créer une nouvelle base de données
3. Copier l'URL de connexion (format : `mysql://...`)
4. Créer le fichier `.env` :
   ```env
   DATABASE_URL="mysql://votre-url-planetscale"
   PORT=3001
   NODE_ENV=development
   ```
5. Appliquer les migrations :
   ```bash
   npm run prisma:generate
   npx prisma migrate deploy
   ```

---

## 🔄 Changer de MySQL à SQLite (ou vice versa)

### Si vous aviez déjà des migrations MySQL et voulez passer à SQLite :

1. **Sauvegarder vos données** (si importantes)
2. **Supprimer les migrations existantes** :
   ```bash
   rm -rf prisma/migrations
   rm -f prisma/dev.db*  # Si fichier SQLite existe
   ```
3. **Changer le provider dans `schema.prisma`**
4. **Créer une nouvelle migration** :
   ```bash
   npx prisma migrate dev --name init
   ```

### Si vous voulez passer de SQLite à MySQL :

1. **Sauvegarder vos données**
2. **Supprimer les migrations SQLite** :
   ```bash
   rm -rf prisma/migrations
   ```
3. **Changer le provider dans `schema.prisma`**
4. **Créer une nouvelle migration MySQL** :
   ```bash
   npx prisma migrate dev --name init
   ```

---

## 🆘 Dépannage

### Erreur : "Can't reach database server"
- **MySQL** : Vérifiez que MySQL est démarré
- **SQLite** : Vérifiez que le chemin dans `DATABASE_URL` est correct

### Erreur : "Migration failed"
- Supprimez le dossier `prisma/migrations` et recréez la migration
- Vérifiez que la base de données existe (pour MySQL)

### Réinitialiser complètement
```bash
# Supprimer migrations et base de données
rm -rf prisma/migrations
rm -f prisma/dev.db*  # SQLite
# ou
mysql -u root -p -e "DROP DATABASE gestion_stock; CREATE DATABASE gestion_stock;"  # MySQL

# Recréer
npx prisma migrate dev --name init
```

---

## 📊 Recommandation

- **Développement local** : Utilisez **SQLite** (plus simple)
- **Tests/Production** : Utilisez **MySQL** (meilleures performances)

Le code fonctionne de la même manière avec les deux ! 🎉
