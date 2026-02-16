const { PrismaClient } = require('../generated/prisma');

let prisma = null;
let usePrisma = false;

if (process.env.DATABASE_URL) {
  try {
    prisma = new PrismaClient();
    usePrisma = true;
    console.log('Prisma client initialisé (utilisation de la base).');
  } catch (e) {
    console.warn('Impossible d\'initialiser Prisma, utilisation du stockage en mémoire.', e.message || e);
    usePrisma = false;
  }
}

module.exports = { prisma, usePrisma };
