# 🔧 Guide de dépannage

## Erreurs courantes et solutions

### ❌ Erreur : "Cannot find module '../generated/prisma'"

**Cause** : Le client Prisma n'a pas été généré.

**Solution** :
```bash
npm run prisma:generate
```

---

### ❌ Erreur : "Environment variable not found: DATABASE_URL"

**Cause** : Le fichier `.env` n'existe pas ou est mal configuré.

**Solution** :
1. Créer un fichier `.env` à la racine du projet
2. Ajouter cette ligne (pour SQLite) :
   ```env
   DATABASE_URL="file:./prisma/dev.db"
   PORT=3001
   NODE_ENV=development
   ```

---

### ❌ Erreur : "Migration failed" ou "Migration engine failed"

**Cause** : Les migrations ne sont pas synchronisées avec le schéma.

**Solutions** :

**Option 1 - Réinitialiser complètement** :
```bash
# Supprimer les migrations et la base de données
Remove-Item -Recurse -Force prisma/migrations
Remove-Item prisma/dev.db* -ErrorAction SilentlyContinue

# Recréer la migration
npx prisma migrate dev --name init
```

**Option 2 - Si vous avez des données importantes** :
```bash
# Réappliquer les migrations
npx prisma migrate reset
```

---

### ❌ Erreur : "P1001: Can't reach database server"

**Cause MySQL** : MySQL n'est pas démarré ou la connexion est incorrecte.

**Solutions** :
- Vérifier que MySQL est démarré
- Vérifier les identifiants dans `.env`
- Vérifier que le port 3306 est libre

**Cause SQLite** : Le chemin dans `DATABASE_URL` est incorrect.

**Solution** : Utiliser un chemin relatif :
```env
DATABASE_URL="file:./prisma/dev.db"
```

---

### ❌ Erreur : "P2002: Unique constraint failed"

**Cause** : Tentative d'ajouter une valeur qui existe déjà (ex: catégorie avec le même nom).

**Solution** : Vérifier que la valeur est unique avant de créer.

---

### ❌ Erreur : "Cannot find module 'swagger-ui-express'"

**Cause** : Les dépendances ne sont pas installées.

**Solution** :
```bash
npm install
```

---

### ❌ Erreur : "Port 3001 is already in use"

**Cause** : Le port est déjà utilisé par un autre processus.

**Solutions** :
1. Arrêter l'autre processus utilisant le port 3001
2. Changer le port dans `.env` :
   ```env
   PORT=3002
   ```

---

### ❌ Erreur au démarrage : SyntaxError ou autres erreurs JavaScript

**Causes possibles** :
- Node.js version trop ancienne (besoin de v18+)
- Fichiers corrompus

**Solutions** :
```bash
# Vérifier la version de Node.js
node --version

# Réinstaller les dépendances
Remove-Item -Recurse -Force node_modules
npm install
```

---

### ⚠️ L'application démarre mais les routes ne fonctionnent pas

**Vérifications** :
1. Le client Prisma est généré ? `npm run prisma:generate`
2. Les migrations sont appliquées ? `npx prisma migrate dev`
3. La base de données existe ? (SQLite : `prisma/dev.db`, MySQL : base créée)

---

## 🚀 Checklist de démarrage

Avant de lancer l'application, assurez-vous d'avoir :

- [ ] Installé les dépendances : `npm install`
- [ ] Créé le fichier `.env` avec `DATABASE_URL`
- [ ] Configuré `prisma/schema.prisma` (SQLite ou MySQL)
- [ ] Généré le client Prisma : `npm run prisma:generate`
- [ ] Appliqué les migrations : `npx prisma migrate dev --name init`

---

## 🆘 Commandes de diagnostic

```bash
# Vérifier que le client Prisma est généré
Test-Path src/generated/prisma

# Vérifier que le fichier .env existe
Test-Path .env

# Vérifier la base de données SQLite
Test-Path prisma/dev.db

# Tester la connexion Prisma
npx prisma db push

# Voir l'état de la base de données
npx prisma studio
```

---

## 📞 Obtenir de l'aide

Si l'erreur persiste, partagez :
1. Le message d'erreur complet
2. La commande que vous avez exécutée
3. Le contenu de votre fichier `.env` (sans les mots de passe)
4. La sortie de `node --version` et `npm --version`
