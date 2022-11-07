import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const login = {
	"name": "Craig",
	"email": "cmccoy2@bluehost.com"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ3JhaWciLCJlbWFpbCI6ImNtY2NveTJAYmx1ZWhvc3QuY29tIiwiaWF0IjoxNjY3ODQwODc1LCJleHAiOjE2Njg0NDU2NzV9.sxokCWVDJxN0amBc2hoIbsgs7VjvKuST4zOHXQcGCtA"
const invaliToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NTgzNTc1MjcsImV4cCI6MTY1ODk2MjMyN30.5PY03uLjRXWp364Fit4Wo_gYeC0UccQHXkjRoYug-00"


describe('Testa a rota /login', () => {

  it('Quando o cliente não cadastrar as informações de login, retorne uma messagem de error e o status 400', async () => {
    const chaiHttpResponse = await chai.request(app)
    .post('/login').send();

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.eql({ message: 'All fields must be filled' });
  });


  it('Quando o cliente enviar um email inválido, retorne um status 400 e uma messagem de email inválido', async () => {
    const chaiHttpResponse = await chai.request(app)
    .post('/login').send({ firstName: 'Craig ', email: 'invalid_email' });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.eql({ message: 'email must be a valid email' });
  });
});

describe('Testa a rota /login/validate', () => {
  it('Testa se o token é inválido, caso esteja incoreto, não retornara o id', async () => {
    const chaiHttpResponse = await chai.request(app).get('/login/validate').set('authorization', invaliToken)
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.eql({
      "message": "Token must be a valid token"
    })
  });
});