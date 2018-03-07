import chai from 'chai'
import User from '../../src/models/User'
import 'mocha'

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com")
    chai.expect(user).to.have.property("userId")
    chai.expect(user).to.have.property("fullName")
    chai.expect(user).to.have.property("fullName").equal("first last")
  })
})
