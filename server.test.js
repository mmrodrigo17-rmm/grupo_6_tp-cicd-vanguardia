const request = require('supertest');
const app = require('./server');

describe('Pruebas del Servidor Express', () => {
  it('Debe responder con estado 200 en la ruta raíz (/)', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Debe servir el archivo index.html con el título correcto', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('¡Hola desde CI/CD!');
  });
});