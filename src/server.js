require('dotenv').config();
const app = require("./app");
const { usePrisma } = require("./config/database");

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, async () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
  
  // Initialiser les données par défaut (catégories, fournisseurs)
  if (usePrisma) {
    try {
      const initService = require("./services/initService");
      const result = await initService.initializeDefaults();
      console.log(result.message);
    } catch (error) {
      console.error("Erreur lors de l'initialisation des données:", error.message);
    }
  }
});

server.on("error", (err) => {
  console.error("Erreur du serveur:", err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("uncaughtException:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("unhandledRejection:", reason);
});
