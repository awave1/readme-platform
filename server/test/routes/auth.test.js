const { expect } = require('chai')
const request = require('supertest')
const app = require('../../app')
const User = require('../../models/User')
const db = require('../../db')
const UserController = require('../../controllers/UserController')
require('mocha')

// todo: make a valid user and login with it
describe('/api/auth', () => {
  it('should login', () => {
    request(app)
      .post('/api/auth/login')
      .send({
        username: 'username2',
        password: 'verysecretpassword',
      })
      .end((err, res) => {
        console.log(res.body)
      })
  })
})
