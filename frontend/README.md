# Frontend léger — Gestion de stock

Ce petit frontend utilise React via CDN et axios pour communiquer avec votre backend.

Pré-requis
- Démarrer votre backend (ex: `npm start`) sur `http://localhost:3001`.

Usage
1. Ouvrir `frontend/index.html` directement dans le navigateur OU lancer un petit serveur statique (recommandé) :

```bash
npx http-server frontend -p 8080

# ou
npx live-server frontend --port=8080
```

2. Accéder à `http://localhost:8080` et tester l'UI.

Notes
- L'UI attend des endpoints REST au chemin `/api/items` :
  - `GET /api/items` -> liste d'objets {id,name,quantity,price}
  - `POST /api/items` -> créer
  - `PUT /api/items/:id` -> mettre à jour
  - `DELETE /api/items/:id` -> supprimer
- Si votre backend écoute sur un port différent, mettez à jour `API_BASE` dans `index.html`.
