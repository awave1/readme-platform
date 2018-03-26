const {
  expect,
  bcrypt,
  Post,
  Tag,
  Comment
} = require('../common')

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())

    expect(user).to.have.property("userId")
    expect(bcrypt.compareSync("verysecretpassword", user.getPassword())).true
  })
})
