const request = require('supertest');
const app = require('./server');

describe('Health Endpoint', () => {
  it('GET /health should return 200 status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  it('GET /health should return status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('OK');
  });

  it('GET /health should return a message', async () => {
    const res = await request(app).get('/health');
    expect(res.body.message).toBe('Server is running');
  });

  it('GET /health should return a timestamp', async () => {
    const res = await request(app).get('/health');
    expect(res.body.timestamp).toBeDefined();
  });

  it('GET /health should return uptime', async () => {
    const res = await request(app).get('/health');
    expect(res.body.uptime).toBeDefined();
  });
});
