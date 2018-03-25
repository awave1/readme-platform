import chai from 'chai'
import 'mocha'
import bcrypt from 'bcrypt'
import User from '../../src/models/User'
import Post from '../../src/models/Post'

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())

    chai.expect(user).to.have.property("userId")
    chai.expect(bcrypt.compareSync("verysecretpassword", user.getPassword())).true;
  })
})
