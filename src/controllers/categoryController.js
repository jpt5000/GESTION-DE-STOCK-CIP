const { prisma, usePrisma } = require('../config/database');

// Stockage en mémoire (fallback)
let categories = [];
let nextCategoryId = 1;

const getAllCategories = async (req, res, next) => {
  try {
    if (usePrisma) {
      const categories = await prisma.category.findMany({
        include: { _count: { select: { products: true } } }
      });
      return res.json(categories);
    }
    return res.json(categories);
  } catch (err) {
    next(err);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const category = await prisma.category.findUnique({
        where: { id },
        include: { products: true }
      });
      
      if (!category) {
        return res.status(404).json({ error: 'not found' });
      }
      
      return res.json(category);
    }
    
    const category = categories.find(c => c.id === id);
    if (!category) {
      return res.status(404).json({ error: 'not found' });
    }
    return res.json(category);
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    if (usePrisma) {
      const category = await prisma.category.create({
        data: { name: String(name) }
      });
      return res.status(201).json(category);
    }
    
    const category = { id: nextCategoryId++, name };
    categories.push(category);
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name } = req.body;
    
    if (usePrisma) {
      const existing = await prisma.category.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      const updated = await prisma.category.update({
        where: { id },
        data: { name: String(name) }
      });
      
      return res.json(updated);
    }
    
    const idx = categories.findIndex(c => c.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    categories[idx] = { ...categories[idx], name };
    return res.json(categories[idx]);
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const existing = await prisma.category.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      await prisma.category.delete({ where: { id } });
      return res.json({ id });
    }
    
    const idx = categories.findIndex(c => c.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    const removed = categories.splice(idx, 1)[0];
    return res.json(removed);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};
