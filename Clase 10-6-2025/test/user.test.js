const request = require('supertest');
const app = require('../app');
const userService = require('../app/services/userServices');

jest.mock('../app/services/userServices');

describe('Pruebas de usuario', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /AYD1/ retorna lista de usuarios', () => {

        it('debería retornar un array de usuarios', async () => {
            const mockUsers = [
                { id_usuario: 1, nombre: 'Juan' },
                { id_usuario: 2, nombre: 'Lucía' }
            ];
            userService.getAllUsers.mockResolvedValue(mockUsers);

            const res = await request(app).get('/AYD1/');

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(mockUsers);
        });

        it('debería retorna un array vacío si no hay usuarios', async () => {
            userService.getAllUsers.mockResolvedValue([]);

            const res = await request(app).get('/AYD1/');

            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([]);
        });

        it('debería retornar un error 500 si ocurre un problema en el servidor', async () => {
            userService.getAllUsers.mockRejectedValue(new Error('Database error'));

            const res = await request(app).get('/AYD1/');

            expect(res.statusCode).toBe(500);
            expect(res.body).toEqual({ message: 'Internal Server Error' });
        });
    }
    );

    describe('POST /AYD1/ crea un usuario', () => {

        test('debería crear un nuevo usuario y retornar el usuario creado', async () => {
            const newUser = { nombre: 'Ana', apellido: 'Gómez', genero: 'F', email: 'ana@example.com', pass: '123456', direccion: 'Calle Falsa 123', fecha_nacimiento: '1990-01-01' };
            userService.createUser.mockResolvedValue({ id_usuario: 3, ...newUser });
            const res = await request(app).post('/AYD1/').send(newUser);

            expect(res.statusCode).toBe(201);
            expect(res.body).toEqual({ id_usuario: 3, ...newUser });
        }
        );

        test('debería retornar error si algun campo requerido falta', async () => {
            const newUser = { nombre: 'Ana', apellido: 'Gómez' }; // Faltan campos requeridos
            const res = await request(app).post('/AYD1/').send(newUser);
            expect(res.statusCode).toBe(400);
            expect(res.body).toEqual({ message: 'Bad Request: Missing required fields' });
        })
    });

    describe('PUT /AYD1/:id actualiza un usuario existente', () => {
        test('debería actualizar un usuario y retornar el usuario actualizado', async () => {
            const updatedUser = { nombre: 'Ana', apellido: 'Gómez', genero: 'F', email: 'ana@example.com', pass: '123456', direccion: 'Calle Falsa 123', fecha_nacimiento: '1990-01-01' };
            userService.updateUser.mockResolvedValue({ id_usuario: 1, ...updatedUser });
            const res = await request(app).put('/AYD1/1').send(updatedUser);
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({ id_usuario: 1, ...updatedUser });
        }
        );
        test('debería retornar un error 404 si el usuario no existe', async () => {
            const updatedUser = { nombre: 'Ana', apellido: 'Gómez', genero: 'F', email: 'ana@example.com', pass: '123456', direccion: 'Calle Falsa 123', fecha_nacimiento: '1990-01-01' };
            userService.updateUser.mockResolvedValue(null);
            const res = await request(app).put('/AYD1/999').send(updatedUser);
            expect(res.statusCode).toBe(404);
            expect(res.body).toEqual({ message: 'User not found' });
        });
    });
});
