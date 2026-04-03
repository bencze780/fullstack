const request = require('supertest');
const app = require('../server'); // Az útmutató alapján a server.js elérési útja
const mysql = require('mysql2/promise');

// Adatbázis hívások mockolása
jest.mock('mysql2/promise', () => ({
    createPool: jest.fn(() => ({
        query: jest.fn(),
    })),
}));

let dbMock;

beforeAll(() => {
    dbMock = mysql.createPool();
});

describe('API Végpontok Tesztelése', () => {

    // 1. Alap útvonal tesztje
    test('GET / - Szerver futásának ellenőrzése', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, a backend szerver fut!');
    });

    // 2. Adatbázis ping tesztje
    test('GET /ping - Adatbázis kapcsolat tesztelése', async () => {
        dbMock.query.mockResolvedValueOnce([[{ solution: 2 }]]);

        const res = await request(app).get('/ping');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(2);
    });

    // 3. Összes felhasználó lekérése
    test('GET /api/users - Összes felhasználó listázása', async () => {
        const mockUsers = [
            { id: 1, name: 'Teszt Elek', email: 'teszt@gmail.com' }
        ];
        dbMock.query.mockResolvedValueOnce([mockUsers]);

        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body[0].name).toBe('Teszt Elek');
    });

    // 4. Új felhasználó létrehozása
    test('POST /api/users - Új felhasználó hozzáadása', async () => {
        dbMock.query.mockResolvedValueOnce([{ insertId: 10 }]);

        const newUser = { name: 'Kovács János', email: 'janos@example.com' };
        const res = await request(app)
            .post('/api/users')
            .send(newUser);

        expect(res.statusCode).toBe(201);
        expect(res.body.id).toBe(10);
    });

    // 5. Felhasználó módosítása
    test('PATCH /api/users/:id - Felhasználó frissítése', async () => {
        dbMock.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

        const updateData = { name: 'Módosított Név', email: 'mod@email.com' };
        const res = await request(app)
            .patch('/api/users/1')
            .send(updateData);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toContain('sikeresen módosítva');
    });

    // 6. Felhasználó törlése
    test('DELETE /api/users/:id - Felhasználó eltávolítása', async () => {
        dbMock.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

        const res = await request(app).delete('/api/users/1');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toContain('sikeresen törölve');
    });

    // 7. Hibaág tesztelése (Validáció)
    test('POST /api/users - Hiba, ha hiányzik a név', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ email: 'csakemail@test.com' });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBeDefined();
    });
});