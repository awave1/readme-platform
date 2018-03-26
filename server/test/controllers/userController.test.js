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

  let userNew
  let userExisting
  const timeout = 1000000

  before(async () => {
    userNew = randUser()
    userExisting = randUser()
    userExisting.addBookmark(new Post(user))
    userExisting.addBookmark(new Post(user))
    userExisting.addLike(new Post(user))
  })

  after(async () => {
    await db.query('DELETE FROM users WHERE uid = $1', [userNew.getId()])
  })

  it('should insert new user in database', async () => {
    const res = await UserController.createNewUser(userNew)
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
  }).timeout(timeout)

  it('should not insert new user - duplicate username', async () => {
    const user2 = randUser()
    user2.username = userNew.username
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) {
      console.log(e)
    }
    expect(res).to.be.undefined
  }).timeout(timeout)

  it('should not insert new user - duplicate email', async () => {
    const user2 = randUser()
    user.email = userNew.email
    let res
    try {
      res = await UserController.createNewUser(user2)
    } catch(e) { 
      console.log(e)
    }
    expect(res).to.be.undefined
  }).timeout(timeout)

  it('should get user from the database: no data', async () => {
    const res = await UserController.getUserByUsername(userNew.getUsername())
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
  }).timeout(timeout)

  it('should get user from the database: with data', async () => {
    await UserController.createNewUser(userExisting)
    const res = await UserController.getUserByUsername(userExisting.getUsername())
    expect(res).to.not.be.undefined
    expect(res).to.haveOwnProperty('id')
    expect(res).to.haveOwnProperty('uid')
    expect(res).to.haveOwnProperty('password')
    expect(res.bookmarks).not.empty
    expect(res.likes).not.empty
  }).timeout(timeout)

  it('should not get the user from the database and return undefined', async () => {
    const user = randUser()
    const res = await UserController.getUserByUsername(user.getUsername())
    expect(res).to.be.undefined
  }).timeout(timeout)
})
