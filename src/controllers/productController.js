const { prisma, usePrisma } = require('../config/database');

// Stockage en mémoire (fallback)
let items = [
  { id: 1, name: 'Stylo', quantity: 100, price: 0.5 },
  { id: 2, name: 'Cahier', quantity: 50, price: 1.2 },
];
let nextId = 3;

const getAllProducts = async (req, res, next) => {
  try {
    if (usePrisma) {
      const products = await prisma.product.findMany({
        include: {
          category: { select: { id: true, name: true } },
          supplier: { select: { id: true, name: true, email: true, phone: true } }
        }
      });
      
      // Calculer le stock réel depuis les lots pour chaque produit
      const lotService = require('../services/lotService');
      const productsWithRealStock = await Promise.all(
        products.map(async (product) => {
          try {
            // Calculer le stock disponible réel depuis les lots
            const realStock = await lotService.calculateAvailableStock(product.id);
            const finalQty = (typeof realStock === 'number' && realStock > 0) ? realStock : product.quantity;
            return {
              ...product,
              quantity: finalQty // Utiliser stock des lots si présent, sinon garder quantity stockée
            };
          } catch (error) {
            // Si erreur (pas de lots ou autre), utiliser le stock du produit
            return product;
          }
        })
      );
      
      return res.json(productsWithRealStock);
    }
    return res.json(items);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          category: { select: { id: true, name: true } },
          supplier: { select: { id: true, name: true, email: true, phone: true } }
        }
      });
      
      if (!product) {
        return res.status(404).json({ error: 'not found' });
      }
      
      // Calculer le stock réel depuis les lots
      try {
        const lotService = require('../services/lotService');
        const realStock = await lotService.calculateAvailableStock(product.id);
        const finalQty = (typeof realStock === 'number' && realStock > 0) ? realStock : product.quantity;
        return res.json({
          ...product,
          quantity: finalQty // Utiliser stock des lots si présent, sinon garder quantity stockée
        });
      } catch (error) {
        // Si erreur (pas de lots), retourner le produit avec son stock
        return res.json(product);
      }
    }
    
    const item = items.find(i => i.id === id);
    if (!item) {
      return res.status(404).json({ error: 'not found' });
    }
    return res.json(item);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, description, categoryId, supplierId } = req.body;
    
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Le nom du produit est requis' });
    }
    
    if (usePrisma) {
      // Utiliser le service d'initialisation pour obtenir les valeurs par défaut
      const initService = require('../services/initService');
      
      // Vérifier ou créer une catégorie
      let category;
      if (categoryId) {
        category = await prisma.category.findUnique({ where: { id: categoryId } });
        if (!category) {
          return res.status(400).json({ error: 'Catégorie introuvable' });
        }
      } else {
        category = await initService.getOrCreateDefaultCategory();
      }
      
      // Vérifier ou créer un fournisseur
      let supplier;
      if (supplierId) {
        supplier = await prisma.supplier.findUnique({ where: { id: supplierId } });
        if (!supplier) {
          return res.status(400).json({ error: 'Fournisseur introuvable' });
        }
      } else {
        supplier = await initService.getOrCreateDefaultSupplier();
      }
      
      // Créer le produit. On accepte `quantity` et `price` fournis
      const qty = req.body.quantity !== undefined ? Number(req.body.quantity) : 0;
      const priceVal = req.body.price !== undefined ? Number(req.body.price) : 0;

      const product = await prisma.product.create({
        data: {
          name: String(name).trim(),
          quantity: Number.isFinite(qty) ? qty : 0,
          price: Number.isFinite(priceVal) ? priceVal : 0,
          description: description ? String(description).trim() : null,
          categoryId: category.id,
          supplierId: supplier.id,
        },
        include: {
          category: { select: { id: true, name: true } },
          supplier: { select: { id: true, name: true, email: true, phone: true } }
        }
      });
      
      return res.status(201).json(product);
    }
    
    const it = { id: nextId++, name, quantity: 0, price: 0 };
    items.push(it);
    return res.status(201).json(it);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, price, description, categoryId, supplierId } = req.body;
    
    // Note: quantity n'est plus modifiable, elle est gérée uniquement par les lots
    
    if (usePrisma) {
      const existing = await prisma.product.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      const data = {};
      console.debug('updateProduct.req.body=', req.body);
      if (name !== undefined) data.name = String(name).trim();
      if (price !== undefined) data.price = Number(price);
      if (req.body.quantity !== undefined) data.quantity = Number(req.body.quantity);
      if (description !== undefined) data.description = description ? String(description).trim() : null;
      if (categoryId !== undefined) {
        const category = await prisma.category.findUnique({ where: { id: categoryId } });
        if (!category) {
          return res.status(400).json({ error: 'Category not found' });
        }
        data.categoryId = categoryId;
      }
      if (supplierId !== undefined) {
        const supplier = await prisma.supplier.findUnique({ where: { id: supplierId } });
        if (!supplier) {
          return res.status(400).json({ error: 'Supplier not found' });
        }
        data.supplierId = supplierId;
      }
      
      console.debug('updateProduct.data=', data);
      const updated = await prisma.product.update({
        where: { id },
        data,
        include: {
          category: { select: { id: true, name: true } },
          supplier: { select: { id: true, name: true, email: true, phone: true } }
        }
      });
      
      // Calculer le stock réel depuis les lots
      try {
        const lotService = require('../services/lotService');
        const realStock = await lotService.calculateAvailableStock(updated.id);
        return res.json({
          ...updated,
          quantity: realStock
        });
      } catch (error) {
        return res.json(updated);
      }
    }
    
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    items[idx] = {
      ...items[idx],
      ...(name !== undefined ? { name } : {}),
      ...(price !== undefined ? { price: Number(price) } : {})
    };
    
    return res.json(items[idx]);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const existing = await prisma.product.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      // Vérifier que le stock est vide avant de supprimer
      const lotService = require('../services/lotService');
      const currentStock = await lotService.calculateAvailableStock(id);
      
      if (currentStock > 0) {
        return res.status(400).json({ 
          error: 'Impossible de supprimer le produit: le stock n\'est pas vide',
          details: `Stock disponible: ${currentStock} unité(s). Veuillez d'abord vider le stock avant de supprimer le produit.`
        });
      }
      
      // Supprimer le produit et tous ses enregistrements liés dans une transaction
      // Ordre de suppression : StockExitDetail -> StockExit -> StockEntry -> Movement -> Product
      await prisma.$transaction(async (tx) => {
        // 1. Récupérer les IDs des sorties et entrées liées à ce produit
        const [exits, entries] = await Promise.all([
          tx.stockExit.findMany({
            where: { productId: id },
            select: { id: true }
          }),
          tx.stockEntry.findMany({
            where: { productId: id },
            select: { id: true }
          })
        ]);
        
        const exitIds = exits.map(e => e.id);
        const entryIds = entries.map(e => e.id);
        
        // 2. Supprimer les détails de sortie (liés aux sorties OU aux entrées de ce produit)
        // Note: Un détail a à la fois exitId et entryId, donc on supprime ceux qui sont liés
        if (exitIds.length > 0 || entryIds.length > 0) {
          await tx.stockExitDetail.deleteMany({
            where: {
              OR: [
                ...(exitIds.length > 0 ? [{ exitId: { in: exitIds } }] : []),
                ...(entryIds.length > 0 ? [{ entryId: { in: entryIds } }] : [])
              ]
            }
          });
        }
        
        // 3. Supprimer les sorties de stock
        if (exitIds.length > 0) {
          await tx.stockExit.deleteMany({
            where: { productId: id }
          });
        }
        
        // 4. Supprimer les lots d'entrée
        if (entryIds.length > 0) {
          await tx.stockEntry.deleteMany({
            where: { productId: id }
          });
        }
        
        // 5. Supprimer les mouvements
        await tx.movement.deleteMany({
          where: { productId: id }
        });
        
        // 6. Supprimer le produit
        await tx.product.delete({
          where: { id }
        });
      });
      
      return res.json({ 
        id,
        message: 'Produit supprimé avec succès'
      });
    }
    
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    const removed = items.splice(idx, 1)[0];
    return res.json(removed);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
