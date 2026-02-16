const request = require('supertest');
const app = require('../src/app');

describe('Middlewares', () => {
  test('Sanitization - devrait échapper les caractères HTML', async () => {
    const maliciousInput = {
      name: '<script>alert("xss")</script>Test',
      quantity: 10,
      price: 25.99
    };

    const response = await request(app)
      .post('/api/items')
      .send(maliciousInput)
      .expect(201);

    // Le nom devrait être sanitizé
    expect(response.body.name).not.toContain('<script>');
  });

  test('404 - devrait retourner 404 pour une route inexistante', async () => {
    await request(app)
      .get('/api/unknown-route')
      .expect(404);
  });

  test('Validation - devrait rejeter les données invalides', async () => {
    const invalidData = {
      name: '',
      quantity: 'not-a-number',
      price: -100
    };

    const response = await request(app)
      .post('/api/items')
      .send(invalidData)
      .expect(400);

    expect(response.body).toHaveProperty('errors');
    expect(Array.isArray(response.body.errors)).toBe(true);
  });
});
