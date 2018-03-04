const { chai, assert, should, expect, User } = require('../common')

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com")
    chai.expect(user).to.have.property("uuid")
    chai.expect(user).to.have.property("fullName")
    chai.expect(user).to.have.property("fullName").equal("first last")
  })
})
