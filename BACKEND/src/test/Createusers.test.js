const request = require('supertest');

const express = require('express');
const app = express(); // Asegúrate de que `app` está definido correctamente
const user = require('../routers/usersRouters')


app.use(express.json()); // Middleware para parsear JSON
app.use('/users',user); // Usa las rutas definidas

describe('User API', () => {
//   jest.setTimeout(10000); // Aumenta el tiempo de espera a 10 segundos



const userId = 1; // ID de usuario para las pruebas

beforeEach(() => {
    // Aquí podrías reiniciar el estado del mock del modelo de usuario si es necesario
    jest.clearAllMocks();
});

it('debería crear un usuario', async () => {

    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      state: true,
      ID_roles: 1,
    };

    const response = await request(app).post('/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
});



it('debería devolver error si faltan campos requeridos', async () => {
    const incompleteUser = {
      name: 'Incomplete User',
      email: '', // Falta el email
      password: 'password123',
      state: true,
      ID_roles: 1,
    };

    const response = await request(app).post('/users').send(incompleteUser);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('All fields are required.');
    });






    // it('debería actualizar un usuario exitosamente', async () => {
    //     const updatedUser = {
    //         name: 'Jane Doe',
    //         email: 'janes@example.com',
    //         password: 'newpassword',
    //         state: true,
    //         ID_roles: 2,
    //     };

    //     // Mock del modelo de usuarios
    //     const users = require('../models/users'); // Cambia la ruta a tu modelo de usuario
    //     users.update = jest.fn().mockResolvedValue([1]); // Simula que se actualizó 1 usuario
    //     users.findByPk = jest.fn().mockResolvedValue(updatedUser); // Simula que se encuentra el usuario actualizado

    //     const response = await request(app)
    //         .patch(`/users/${userId}`)
    //         .send(updatedUser);

    //     expect(response.status).toBe(201);
    //     expect(response.body).toEqual(updatedUser);
    //     expect(users.update).toHaveBeenCalledWith(updatedUser, { where: { ID_user: userId } });
    //     expect(users.findByPk).toHaveBeenCalledWith(userId);
    // });

    // it('debería devolver un error 404 si el usuario no se encuentra', async () => {
    //     const updatedUser = {
    //         name: 'Jane Doesd',
    //         email: 'jane@example.com',
    //         password: 'newpassword',
    //         state: true,
    //         ID_roles: 2,
    //     };

    //     // Mock del modelo de usuarios
    //     const users = require('../models/users'); // Cambia la ruta a tu modelo de usuario
    //     users.update = jest.fn().mockResolvedValue([0]); // Simula que no se actualizó ningún usuario

    //     const response = await request(app)
    //         .patch(`/users/${userId}`)
    //         .send(updatedUser);

    //     expect(response.status).toBe(404);
    //     expect(response.body).toEqual({ status: 404, message: 'User not found' });
    //     expect(users.update).toHaveBeenCalledWith(updatedUser, { where: { ID_user: userId } });
    // });

    // it('debería devolver un error 500 si ocurre un error en la base de datos', async () => {
    //     const updatedUser = {
    //         name: 'Jane Doe',
    //         email: 'jane@example.com',
    //         password: 'newpassword',
    //         state: 'active',
    //         ID_roles: 2,
    //     };

    //     // Mock del modelo de usuarios
    //     const users = require('../models/users'); // Cambia la ruta a tu modelo de usuario
    //     users.update = jest.fn().mockImplementation(() => {
    //         throw new Error('Database error');
    //     });

    //     const response = await request(app)
    //         .patch(`/users/${userId}`)
    //         .send(updatedUser);

    //     expect(response.status).toBe(500);
    //     expect(response.body).toEqual({ message: 'Error', err: expect.any(Error) });
    // });
});









