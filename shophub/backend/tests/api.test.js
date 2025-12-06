const request = require('supertest');
const app = require('../src/server');

describe('API Endpoints', () => {
  it('GET /products returns products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it('POST /cart adds item to cart', async () => {
    const res = await request(app)
      .post('/cart')
      .send({ productId: 1, quantity: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('success');
  });
  it('GET /orders returns orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
