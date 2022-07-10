const app = require ("../../app");
const request = require("supertest");

describe('login', ()  => {
  it('password missing', async () => {
    const response = await request(app)
      .post('/login')
      .send({username: 'soumyadip'})
      .set('Accept', 'application/json');

    expect(response.headers["Content-Type"]).toString().match(/json/);   
    expect(response.status).toEqual(400);
  });

  it('username missing', async () => {
    const response = await request(app)
      .post('/login')
      .send({password: 'test123'})
      .set('Accept', 'application/json');

    expect(response.headers["Content-Type"]).toString().match(/json/);   
    expect(response.status).toEqual(400);
  });

  it('successful login', async () => {
    const response = await request(app)
      .post('/login')
      .send({username: 'soumyadip', password: 'test123'})
      .set('Accept', 'application/json');

    expect(response.headers["Content-Type"]).toString().match(/json/);   
    expect(response.status).toEqual(200);
  });

  it('incorrect password', async () => {
    const response = await request(app)
      .post('/login')
      .send({username: 'soumyadip', password: 'test023'})
      .set('Accept', 'application/json');

    expect(response.headers["Content-Type"]).toString().match(/json/);   
    expect(response.status).toEqual(401);
  });

  it('invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({username: 'nouser', password: '12345'})
      .set('Accept', 'application/json');

    expect(response.headers["Content-Type"]).toString().match(/json/);   
    expect(response.status).toEqual(401);
  });

});