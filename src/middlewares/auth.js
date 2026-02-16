// Middleware d'authentification basique
// Pour une vraie application, utiliser JWT ou sessions
const API_KEY = process.env.API_KEY || null;

const authenticate = (req, res, next) => {
  // Si API_KEY n'est pas configurée, permettre l'accès (mode développement)
  if (!API_KEY) {
    return next();
  }

  const authHeader = req.headers.authorization;
  const apiKey = req.headers['x-api-key'];

  // Vérifier le token Bearer ou l'API key
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    if (token === API_KEY) {
      return next();
    }
  } else if (apiKey && apiKey === API_KEY) {
    return next();
  }

  return res.status(401).json({
    error: 'Unauthorized',
    message: 'Authentification requise. Fournissez un token valide.'
  });
};

// Middleware pour protéger certaines routes (peut être étendu avec des rôles)
const requireAuth = (req, res, next) => {
  authenticate(req, res, next);
};

module.exports = {
  authenticate,
  requireAuth
};
