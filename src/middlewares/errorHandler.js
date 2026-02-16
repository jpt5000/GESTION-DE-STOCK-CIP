const errorHandler = (err, req, res, next) => {
  console.error('Erreur:', err);

  // Erreur de validation
  if (err.name === 'ValidationError' || err.status === 400) {
    return res.status(400).json({
      error: 'Erreur de validation',
      details: err.errors || err.message
    });
  }

  // Erreur de gestion des lots (LotError)
  if (err.name === 'LotError') {
    const statusCode = err.code === 'INSUFFICIENT_STOCK' || 
                      err.code === 'INSUFFICIENT_STOCK_AFTER_CONSUMPTION' ||
                      err.code === 'PRODUCT_NOT_FOUND' ||
                      err.code === 'INVALID_QUANTITY' ||
                      err.code === 'INVALID_UNIT_COST' ||
                      err.code === 'INVALID_PRODUCT_ID' ? 400 : 500;
    
    return res.status(statusCode).json({
      error: err.message,
      code: err.code,
      details: err.details
    });
  }

  // Erreur Prisma
  if (err.code && err.code.startsWith('P')) {
    if (err.code === 'P2002') {
      return res.status(409).json({
        error: 'Conflit: une ressource avec cette valeur existe déjà'
      });
    }
    if (err.code === 'P2025') {
      return res.status(404).json({
        error: 'Ressource non trouvée'
      });
    }
    if (err.code === 'P2003') {
      // Erreur de contrainte de clé étrangère
      return res.status(400).json({
        error: 'Impossible de supprimer: cette ressource est utilisée par d\'autres enregistrements',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }
    return res.status(500).json({
      error: 'Erreur de base de données',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }

  // Erreur 404
  if (err.status === 404) {
    return res.status(404).json({
      error: err.message || 'Ressource non trouvée'
    });
  }

  // Erreur serveur par défaut
  res.status(err.status || 500).json({
    error: err.message || 'Erreur serveur interne',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = errorHandler;
