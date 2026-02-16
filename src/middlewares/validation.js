const validateItemPayload = (body, partial = false) => {
  const errors = [];
  
  if (!partial || body.name !== undefined) {
    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      errors.push('name must be a non-empty string');
    }
  }
  
  // quantity et price sont maintenant optionnels (gérés via les lots)
  // On les valide seulement s'ils sont fournis
  if (body.quantity !== undefined && body.quantity !== null) {
    const q = Number(body.quantity);
    if (!Number.isFinite(q) || !Number.isInteger(q) || q < 0) {
      errors.push('quantity must be an integer >= 0');
    }
  }
  
  if (body.price !== undefined && body.price !== null) {
    const p = Number(body.price);
    if (!Number.isFinite(p) || p < 0) {
      errors.push('price must be a number >= 0');
    }
  }
  
  return errors;
};

const validateCategoryPayload = (body, partial = false) => {
  const errors = [];
  
  if (!partial || body.name !== undefined) {
    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      errors.push('name must be a non-empty string');
    }
  }
  
  return errors;
};

const validateSupplierPayload = (body, partial = false) => {
  const errors = [];
  
  if (!partial || body.name !== undefined) {
    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
      errors.push('name must be a non-empty string');
    }
  }
  
  if (body.email !== undefined && body.email !== null) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof body.email !== 'string' || !emailRegex.test(body.email)) {
      errors.push('email must be a valid email address');
    }
  }
  
  if (body.phone !== undefined && body.phone !== null) {
    if (typeof body.phone !== 'string' || body.phone.trim() === '') {
      errors.push('phone must be a non-empty string');
    }
  }
  
  return errors;
};

const validateMovementPayload = (body, partial = false) => {
  const errors = [];
  
  if (!partial || body.productId !== undefined) {
    const productId = Number(body.productId);
    if (!Number.isFinite(productId) || !Number.isInteger(productId) || productId <= 0) {
      errors.push('productId must be a positive integer');
    }
  }
  
  if (!partial || body.type !== undefined) {
    if (!body.type || !['IN', 'OUT', 'ADJUSTMENT'].includes(body.type)) {
      errors.push('type must be either "IN", "OUT", or "ADJUSTMENT"');
    }
  }
  
  if (!partial || body.quantity !== undefined) {
    const q = Number(body.quantity);
    if (!Number.isFinite(q) || !Number.isInteger(q) || q <= 0) {
      errors.push('quantity must be a positive integer');
    }
  }
  
  return errors;
};

const validateStockExitDocumentPayload = (body, partial = false) => {
  const errors = [];

  if (!partial || body.type !== undefined) {
    if (!body.type || !['INDIVIDU', 'SUPERVISEUR'].includes(body.type)) {
      errors.push('type must be either "INDIVIDU" or "SUPERVISEUR"');
    }
  }

  if (!partial || body.lines !== undefined) {
    if (!Array.isArray(body.lines) || body.lines.length === 0) {
      errors.push('lines must be a non-empty array');
    } else {
      body.lines.forEach((line, index) => {
        const productId = Number(line.productId);
        if (!Number.isFinite(productId) || !Number.isInteger(productId) || productId <= 0) {
          errors.push(`lines[${index}].productId must be a positive integer`);
        }

        const q = Number(line.quantity);
        if (!Number.isFinite(q) || !Number.isInteger(q) || q <= 0) {
          errors.push(`lines[${index}].quantity must be a positive integer`);
        }
      });
    }
  }

  return errors;
};

const createValidator = (validateFn, isPartial = false) => {
  return (req, res, next) => {
    const errors = validateFn(req.body, isPartial);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    next();
  };
};

module.exports = {
  validateItemPayload,
  // backward-compatible alias used by routes
  validateProductPayload: validateItemPayload,
  validateCategoryPayload,
  validateSupplierPayload,
  validateMovementPayload,
  validateStockExitDocumentPayload,
  createValidator,
  // Middleware helpers
  validateStockExitDocumentPayload: createValidator(validateStockExitDocumentPayload)
};
