const request = require('supertest');
const app = require('../src/app');

describe('Categories API', () => {
  let categoryId;

  test('GET /api/categories - devrait retourner une liste de catégories', async () => {
    const response = await request(app)
      .get('/api/categories')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/categories - devrait créer une nouvelle catégorie', async () => {
    const newCategory = {
      name: 'Test Category'
    };

    const response = await request(app)
      .post('/api/categories')
      .send(newCategory)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newCategory.name);
    
    categoryId = response.body.id;
  });

  test('POST /api/categories - devrait rejeter une catégorie invalide', async () => {
    const invalidCategory = {
      name: ''
    };

    const response = await request(app)
      .post('/api/categories')
      .send(invalidCategory)
      .expect(400);

    expect(response.body).toHaveProperty('errors');
  });

  test('GET /api/categories/:id - devrait retourner une catégorie spécifique', async () => {
    const response = await request(app)
      .get(`/api/categories/${categoryId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', categoryId);
  });

  test('PUT /api/categories/:id - devrait mettre à jour une catégorie', async () => {
    const updatedData = {
      name: 'Updated Category'
    };

    const response = await request(app)
      .put(`/api/categories/${categoryId}`)
      .send(updatedData)
      .expect(200);

    expect(response.body.name).toBe(updatedData.name);
  });

  test('DELETE /api/categories/:id - devrait supprimer une catégorie', async () => {
    await request(app)
      .delete(`/api/categories/${categoryId}`)
      .expect(200);
  });
});
