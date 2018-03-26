const {
  expect,
  bcrypt,
  Post,
  Tag,
  Comment,
  randUser
} = require('../common')

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = randUser()

    expect(user).to.have.property("userId")
    expect(bcrypt.compareSync("verysecret", user.getPassword())).true
  })
})
