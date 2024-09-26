const request = require('supertest');
const express = require('express');
const IA = require('../routers/IA');

const app = express();
app.use(express.json()); // Middleware para parsear JSON
app.use('/IA', IA); // Usa las rutas definidas

describe('POST /IA', () => {
  it('debería devolver un mensaje con la respuesta del servidor', async () => {
    const reqBody = {
      stratum: '3',
      members: 4,
      account: 15000,
      cubic_meters: 10,
      L_shower: 10,
      reasoning: 10,
      L_faucet: 8,
      L_wash: 6,
      washingMachine: 20,
      carWaterUsage: 30,
      beefWaterUsage: 15,
      milkWaterUsage: 5,
      sodaWaterUsage: 2,
      costPerCubicMeter: 2000,
      waterUsagePerRationingDay: 5
    };

    const response = await request(app)
      .post('/IA')
      .send(reqBody);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('menssage'); // Asegúrate de que esta propiedad existe
  });
});
