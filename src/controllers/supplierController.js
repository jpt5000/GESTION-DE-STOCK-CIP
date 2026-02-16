const { prisma, usePrisma } = require('../config/database');

// Stockage en mémoire (fallback)
let suppliers = [];
let nextSupplierId = 1;

const getAllSuppliers = async (req, res, next) => {
  try {
    if (usePrisma) {
      const suppliers = await prisma.supplier.findMany({
        include: { _count: { select: { products: true } } }
      });
      return res.json(suppliers);
    }
    return res.json(suppliers);
  } catch (err) {
    next(err);
  }
};

const getSupplierById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const supplier = await prisma.supplier.findUnique({
        where: { id },
        include: { products: true }
      });
      
      if (!supplier) {
        return res.status(404).json({ error: 'not found' });
      }
      
      return res.json(supplier);
    }
    
    const supplier = suppliers.find(s => s.id === id);
    if (!supplier) {
      return res.status(404).json({ error: 'not found' });
    }
    return res.json(supplier);
  } catch (err) {
    next(err);
  }
};

const createSupplier = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    
    if (usePrisma) {
      const supplier = await prisma.supplier.create({
        data: {
          name: String(name),
          email: email ? String(email) : null,
          phone: phone ? String(phone) : null
        }
      });
      return res.status(201).json(supplier);
    }
    
    const supplier = { id: nextSupplierId++, name, email: email || null, phone: phone || null };
    suppliers.push(supplier);
    return res.status(201).json(supplier);
  } catch (err) {
    next(err);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, email, phone } = req.body;
    
    if (usePrisma) {
      const existing = await prisma.supplier.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      const data = {};
      if (name !== undefined) data.name = String(name);
      if (email !== undefined) data.email = email ? String(email) : null;
      if (phone !== undefined) data.phone = phone ? String(phone) : null;
      
      const updated = await prisma.supplier.update({
        where: { id },
        data
      });
      
      return res.json(updated);
    }
    
    const idx = suppliers.findIndex(s => s.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    suppliers[idx] = {
      ...suppliers[idx],
      ...(name !== undefined ? { name } : {}),
      ...(email !== undefined ? { email } : {}),
      ...(phone !== undefined ? { phone } : {})
    };
    
    return res.json(suppliers[idx]);
  } catch (err) {
    next(err);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    
    if (usePrisma) {
      const existing = await prisma.supplier.findUnique({ where: { id } });
      if (!existing) {
        return res.status(404).json({ error: 'not found' });
      }
      
      await prisma.supplier.delete({ where: { id } });
      return res.json({ id });
    }
    
    const idx = suppliers.findIndex(s => s.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: 'not found' });
    }
    
    const removed = suppliers.splice(idx, 1)[0];
    return res.json(removed);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier
};
