// tslint:disable

import { expect } from 'chai'
import 'mocha'
import bcrypt from 'bcrypt'
import User from '../../src/models/User'
import UserController from '../../src/controllers/UserController'
import db from '../../src/db'

describe('userController test', () => {

  let user: User;

  before(async () => {
    user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())
  })

  afterEach(async () => {
    await db.query('DELETE FROM users WHERE uid = $1', [user.getId()])
  })

  it('should insert user in database', async () => {
    const res = await UserController.createNewUser(user)
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
  }).timeout(10000)

  it('should not insert new user - duplicate username', async () => {
    await UserController.createNewUser(user)
    const user2 = new User("first", "last", "username", "email2@email.com", "verysecretpassword", new Date().toJSON())
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
    }
    expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  }).timeout(10000)

  it('should not insert new user - duplicate email', async () => {
    await UserController.createNewUser(user)
    const user2 = new User("first", "last", "username2", "email@email.com", "verysecretpassword", new Date().toJSON())
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
    }
    expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  }).timeout(10000)

  it('should get user from the database', async () => {
    await UserController.createNewUser(user)
    const res = await UserController.getUserByUsername(user.getUsername())
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
  }).timeout(10000)

  it('should not get the user from the database and return undefined', async () => {
    const res = await UserController.getUserByUsername(user.getUsername())
    expect(res).to.be.undefined
  })
})
