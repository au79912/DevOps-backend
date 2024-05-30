const request = require('supertest');
const { app, server } = require('../server'); // Adjust the path if needed

afterAll(() => {
  server.close();
});

describe('POST /api/user/signup', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/user/signup')
            .send({
                email: `test${Date.now()}@example.com`,
                fullName: 'Test User',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.text).toBe('Successfully account opened ');
    });

    it('should return error if email is already taken', async () => {
        const res = await request(app)
            .post('/api/user/signup')
            .send({
                email: 'test@example.com', // Use an existing email
                fullName: 'Test User',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(500);
    });
});

describe('POST /api/user/signin', () => {
    it('should login user and return token', async () => {
        const res = await request(app)
            .post('/api/user/signin')
            .send({
                email: 'test@example.com',
                password: 'password123',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should return error if user does not exist', async () => {
        const res = await request(app)
            .post('/api/user/signin')
            .send({
                email: 'wrong@gmail.com',
                password: 'password'
            })
        expect(res.statusCode).toEqual(400);
    })
});

describe('GET /api/user', () => {
    it('should return user details', async () => {
        const res = await request(app)
            .get('/api/user')
            .set('Authorization', 'Bearer token'); // Replace token with actual token
        expect(res.statusCode).toEqual(404);
    });
});
