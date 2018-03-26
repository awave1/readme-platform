const {
  expect,
  bcrypt,
  Post,
  User,
  Tag,
  UserController,
  db,
  faker,
  randUser
} = require('../common')

describe('userController test', () => {

  let user
  const timeout = 1000000

  beforeEach(async () => {
    const name = faker.name.findName()
    user = new User(
      name[0],
      name[1],
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
      new Date().toJSON())
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
  }).timeout(timeout)

  it('should not insert new user - duplicate username', async () => {
    await UserController.createNewUser(user)
    const user2 = new User("first", "last", "username", "email2@email.com", "verysecretpassword", new Date().toJSON())
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
      console.log(e)
    }
    expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  }).timeout(timeout)

  it('should not insert new user - duplicate email', async () => {
    await UserController.createNewUser(user)
    const user2 = user
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) { 
      console.log(e)
    }
    expect(res).to.be.undefined
    await db.query('DELETE FROM users WHERE uid = $1', [user2.getId()])
  }).timeout(timeout)

  it('should get user from the database', async () => {
    await UserController.createNewUser(user)
    const res = await UserController.getUserByUsername(user.getUsername())
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
  }).timeout(timeout)

  it('should not get the user from the database and return undefined', async () => {
    const res = await UserController.getUserByUsername(user.getUsername())
    expect(res).to.be.undefined
  }).timeout(timeout)
})
