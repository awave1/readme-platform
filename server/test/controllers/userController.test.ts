import chai from 'chai'
import 'mocha'
import bcrypt from 'bcrypt'
import User from '../../src/models/User'
import UserController from '../../src/controllers/UserController'
import db from '../../src/db'

describe('userController test', () => {
  it('should create a user object with valid fields and insert it in database', async () => {
    const user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())

    const res = await UserController.createNewUser(user)
    chai.expect(res).to.not.be.undefined
    chai.expect(res).to.haveOwnProperty('id')
    chai.expect(res).to.haveOwnProperty('uid')
    chai.expect(res).to.haveOwnProperty('password')

    await db.query('DELETE FROM users WHERE uid = $1', [user.getId()])
  })
})
