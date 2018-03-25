// tslint:disable

import { expect } from 'chai'
import request from 'supertest'
import 'mocha'
import app from '../../src/app'
import User from '../../src/models/User'
import db from '../../src/db'

describe('/api/users test', () => {

  let userData: any

  beforeEach(() => {
    userData = {
      first: 'first',
      last: 'last',
      username: 'username',
      email: 'email@email.com',
      password: 'verysecret',
    }
  })

  it('should successfully send POST request: 200', (done) => {
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end(async (err, res) => {
        expect(res.status).equal(200)
        expect(res.body).not.undefined
        expect(res.body).not.empty
        expect(res.body.pasword).not.equal(userData.password)
        expect(res.body.email).equal(userData.email)

        await db.query('DELETE FROM users WHERE uid = $1', [res.body.uid])
      })
    done()
  }).timeout(10000)

  it('should send invalid POST request: 422 - empty email', () => {
    userData.email = ''
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end((err, res) => {
        expect(res.status).equal(422)
        expect(res.body).not.undefined
        expect(res.body).not.empty
      })
  })

  it('should send invalid POST request: 422 - empty password', () => {
    userData.password = ''
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end((err, res) => {
        expect(res.status).equal(422)
        expect(res.body).not.undefined
        expect(res.body).not.empty
      })
  })
})
