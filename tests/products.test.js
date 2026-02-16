const request = require('supertest');
const app = require('../src/app');

describe('Products API', () => {
  let productId;

  test('GET /api/items - devrait retourner une liste de produits', async () => {
    const response = await request(app)
      .get('/api/items')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/items - devrait créer un nouveau produit', async () => {
    const newProduct = {
      name: 'Test Product',
      quantity: 10,
      price: 25.99
    };

    const response = await request(app)
      .post('/api/items')
      .send(newProduct)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newProduct.name);
    expect(response.body.quantity).toBe(newProduct.quantity);
    expect(response.body.price).toBe(newProduct.price);
    
    productId = response.body.id;
  });

  test('POST /api/items - devrait rejeter un produit invalide', async () => {
    const invalidProduct = {
      name: '',
      quantity: -1,
      price: -10
    };

    const response = await request(app)
      .post('/api/items')
      .send(invalidProduct)
      .expect(400);

    expect(response.body).toHaveProperty('errors');
    expect(Array.isArray(response.body.errors)).toBe(true);
  });

  test('GET /api/items/:id - devrait retourner un produit spécifique', async () => {
    const response = await request(app)
      .get(`/api/items/${productId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', productId);
  });

  test('PUT /api/items/:id - devrait mettre à jour un produit', async () => {
    const updatedData = {
      name: 'Updated Product',
      quantity: 20,
      price: 30.99
    };

    const response = await request(app)
      .put(`/api/items/${productId}`)
      .send(updatedData)
      .expect(200);

    expect(response.body.name).toBe(updatedData.name);
    expect(response.body.quantity).toBe(updatedData.quantity);
    expect(response.body.price).toBe(updatedData.price);
  });

  test('DELETE /api/items/:id - devrait supprimer un produit', async () => {
    await request(app)
      .delete(`/api/items/${productId}`)
      .expect(200);

    // Vérifier que le produit a été supprimé
    await request(app)
      .get(`/api/items/${productId}`)
      .expect(404);
  });

  test('GET /api/items/:id - devrait retourner 404 pour un produit inexistant', async () => {
    await request(app)
      .get('/api/items/99999')
      .expect(404);
  });
});
