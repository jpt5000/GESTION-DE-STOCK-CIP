const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestion de Stock',
      version: '1.0.0',
      description: 'API REST pour la gestion de stock avec Node.js, Express et Prisma',
      contact: {
        name: 'Support API',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Serveur de développement',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'quantity', 'price'],
          properties: {
            id: {
              type: 'integer',
              description: 'Identifiant unique du produit',
            },
            name: {
              type: 'string',
              description: 'Nom du produit',
            },
            description: {
              type: 'string',
              description: 'Description du produit',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Prix du produit',
            },
            quantity: {
              type: 'integer',
              description: 'Quantité en stock',
            },
            categoryId: {
              type: 'integer',
              description: 'ID de la catégorie',
            },
            supplierId: {
              type: 'integer',
              description: 'ID du fournisseur',
            },
          },
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            id: {
              type: 'integer',
              description: 'Identifiant unique de la catégorie',
            },
            name: {
              type: 'string',
              description: 'Nom de la catégorie',
            },
          },
        },
        Supplier: {
          type: 'object',
          required: ['name'],
          properties: {
            id: {
              type: 'integer',
              description: 'Identifiant unique du fournisseur',
            },
            name: {
              type: 'string',
              description: 'Nom du fournisseur',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email du fournisseur',
            },
            phone: {
              type: 'string',
              description: 'Téléphone du fournisseur',
            },
          },
        },
        Movement: {
          type: 'object',
          required: ['productId', 'type', 'quantity'],
          properties: {
            id: {
              type: 'integer',
              description: 'Identifiant unique du mouvement',
            },
            productId: {
              type: 'integer',
              description: 'ID du produit',
            },
            type: {
              type: 'string',
              enum: ['IN', 'OUT'],
              description: 'Type de mouvement (IN = entrée, OUT = sortie)',
            },
            quantity: {
              type: 'integer',
              description: 'Quantité du mouvement',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date de création du mouvement',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Message d\'erreur',
            },
            details: {
              type: 'string',
              description: 'Détails de l\'erreur',
            },
            errors: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Liste des erreurs de validation',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
