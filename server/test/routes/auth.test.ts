// tslint:disable

import { expect } from 'chai'
import request from 'supertest'
import 'mocha'
import app from '../../src/app'
import User from '../../src/models/User'
import db from '../../src/db'
import UserController from '../../src/controllers/UserController'

// todo: make a valid user and login with it
describe('/api/auth', () => {
  it.only('should login', () => {
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
