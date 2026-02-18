#!/usr/bin/env node
/**
 * Seeder: import a list of products into the database.
 *
 * Behaviour:
 * - Ensures a default category and default supplier exist
 * - Upserts each product by name with default price 0 and quantity 0
 *
 * Usage: `node scripts/seed-products.js`
 */

const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

const PRODUCTS = [
  "Casque oreillette  MAGNY  HELMET",
  "Casque oreillette SPA 3",
  "Bouchons d’oreilles CONICFICT",
  "Cache-nez FFP2",
  "Cache-nez FFP3",
  "Cache-nez KN95",
  "Cache-nez NP 303",
  "Cache-nez NP 305",
  "Lunettes de sécurité VENITEX",
  "Lunettes de sécurité noire",
  "Lunettes de sécurité blanche",
  "Lunettes de sécurité SINGER",
  "Casque chantier jaune ZIRCON",
  "Casque chantier orange ZIRCON",
  "Casque chantier bleu ZIRCON",
  "Casque chantier jaune ordinaire",
  "Casque chantier bleu ordinaire",
  "Gants manutention rouge simple",
  "Gants soudeur",
  "Gants manutention fluorescents",
  "Gants manutention VE730",
  "Gants manutention VE730 SINGER",
  "Gants manutention VE801/802",
  "Gants produit réf n°",
  "Gants manutention DS 202",
  "Combinaison de travail",
  "Blouse de travail",
  "Tenues de travail (Pan + Che) orange",
  "Tenues de travail (Pan + Che) verte",
  "Tenues de travail (Pan + Che) kaki",
  "Gilet de sécurité jaune ordinaire",
  "Gilet de sécurité jaune",
  "Tablier en cuir",
  "Imperméable",
  "Chaussures de sécurité",
  "Bottes de sécurité",
  "Bottes simples",
  "Houe",
  "Coupe-coupe",
  "Balai à brosse",
  "Brouette",
  "Râteau",
  "Harnais de sécurité",
  "Harnais casque chantier",
  "Etiquettes CIP",
  "Pantalon jaune",
  "Tee-shirt jaune"
];

async function main() {
  try {
    console.log('🔎 Vérification catégorie et fournisseur par défaut...');

    const defaultCategoryName = 'Sans catégorie';
    const defaultSupplierName = 'Fournisseur par défaut';

    const category = await prisma.category.upsert({
      where: { name: defaultCategoryName },
      update: {},
      create: { name: defaultCategoryName }
    });

    const supplier = await prisma.supplier.upsert({
      where: { name: defaultSupplierName },
      update: {},
      create: { name: defaultSupplierName }
    });

    console.log(`✅ Category id=${category.id} | Supplier id=${supplier.id}`);

    let created = 0;
    for (const name of PRODUCTS) {
      const trimmed = name.trim();
      if (!trimmed) continue;

      await prisma.product.upsert({
        where: { name: trimmed },
        update: {},
        create: {
          name: trimmed,
          description: null,
          price: 0,
          quantity: 0,
          categoryId: category.id,
          supplierId: supplier.id
        }
      });
      created++;
      process.stdout.write(`\rImported: ${created}/${PRODUCTS.length}`);
    }

    console.log('\n\n✅ Import terminé.');
  } catch (err) {
    console.error('Erreur lors de l import des produits:', err.message || err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
