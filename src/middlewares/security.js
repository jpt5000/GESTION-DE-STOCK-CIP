const sanitizeInput = (req, res, next) => {
  // Fonction récursive pour nettoyer les objets
  const sanitize = (obj) => {
    if (typeof obj === 'string') {
      // Échapper les caractères HTML dangereux
      return obj
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .trim();
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => sanitize(item));
    }
    
    if (obj && typeof obj === 'object') {
      const sanitized = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          sanitized[key] = sanitize(obj[key]);
        }
      }
      return sanitized;
    }
    
    return obj;
  };

  // Sanitizer les body, query et params
  if (req.body) {
    // Ne pas sanitizer les valeurs numériques et autres types non-string
    req.body = Object.keys(req.body).reduce((acc, key) => {
      const value = req.body[key];
      // Garder les nombres et booléens comme ils sont
      if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
        acc[key] = value;
      } else {
        acc[key] = sanitize(value);
      }
      return acc;
    }, {});
  }

  if (req.query) {
    req.query = sanitize(req.query);
  }

  next();
};

// Middleware pour limiter le rate limiting basique
const rateLimitStore = new Map();
const rateLimit = (windowMs = 15 * 60 * 1000, maxRequests = 100) => {
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress || 'unknown';
    const now = Date.now();
    const windowStart = now - windowMs;

    // Nettoyer les anciennes entrées
    if (rateLimitStore.has(ip)) {
      const requests = rateLimitStore.get(ip).filter(time => time > windowStart);
      rateLimitStore.set(ip, requests);
    } else {
      rateLimitStore.set(ip, []);
    }

    const requests = rateLimitStore.get(ip);
    
    if (requests.length >= maxRequests) {
      return res.status(429).json({
        error: 'Too many requests',
        message: `Limite de ${maxRequests} requêtes par ${windowMs / 1000 / 60} minutes dépassée`
      });
    }

    requests.push(now);
    next();
  };
};

module.exports = {
  sanitizeInput,
  rateLimit
};
