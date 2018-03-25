import chai from 'chai'
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
    chai.expect(res).to.not.be.undefined
    chai.expect(res).to.haveOwnProperty('id')
    chai.expect(res).to.haveOwnProperty('uid')
    chai.expect(res).to.haveOwnProperty('password')
  })

  it('should not insert new user - duplicate username', async () => {
    await UserController.createNewUser(user)
    const user2 = new User("first", "last", "username", "email2@email.com", "verysecretpassword", new Date().toJSON())
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
    }
    chai.expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  })

  it('should not insert new user - duplicate email', async () => {
    await UserController.createNewUser(user)
    const user2 = new User("first", "last", "username2", "email@email.com", "verysecretpassword", new Date().toJSON())
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
    }
    chai.expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  })

  it('should get user from the database', async () => {
    await UserController.createNewUser(user)
    const res = await UserController.getUserByUsername(user.getUsername())
    chai.expect(res).to.not.be.undefined
    chai.expect(res).to.haveOwnProperty('id')
    chai.expect(res).to.haveOwnProperty('uid')
    chai.expect(res).to.haveOwnProperty('password')
  })

  it('should not get the user from the database and return undefined', async () => {
    const res = await UserController.getUserByUsername(user.getUsername())
    chai.expect(res).to.be.undefined
  })
})
