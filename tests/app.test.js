const request = require('supertest');
const app = require('../app');

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toStrictEqual({message:'Hello, World!'});
});
