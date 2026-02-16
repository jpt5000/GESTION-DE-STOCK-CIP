const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sécurité - sanitization et rate limiting
const { sanitizeInput, rateLimit } = require("./middlewares/security");
app.use(sanitizeInput);
app.use('/api', rateLimit(15 * 60 * 1000, 100)); // 100 requêtes par 15 minutes

// Servir les fichiers statiques du frontend (frontend/index.html)
const frontendDir = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendDir));

// Routes API
const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");
const suppliersRouter = require("./routes/suppliers");
const movementsRouter = require("./routes/movements");
const stockEntriesRouter = require("./routes/stockEntries");
const stockExitsRouter = require("./routes/stockExits");
const stockExitDocumentsRouter = require("./routes/stockExitDocuments");
const initRouter = require("./routes/init");

app.use("/api/items", itemsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/suppliers", suppliersRouter);
app.use("/api/movements", movementsRouter);
app.use("/api/stock-entries", stockEntriesRouter);
app.use("/api/stock-exits", stockExitsRouter);
app.use("/api/stock-exit-documents", stockExitDocumentsRouter);
app.use("/api/init", initRouter);

// Si la route n'est pas une API et n'a pas été trouvée, renvoyer index.html (SPA fallback)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

// Middleware 404 pour les routes API non trouvées
const notFound = require("./middlewares/notFound");
app.use("/api", notFound);

// Middleware de gestion des erreurs (doit être en dernier)
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
