const {
  expect,
  bcrypt,
  Post,
  Tag,
  Comment,
  randUser
} = require('../common')

describe('user model test', () => {
  let user

  before(() => user = randUser())

  it('should create a user object with valid fields', () => {
    expect(user).to.have.property("userId")
    expect(bcrypt.compareSync("verysecret", user.getPassword())).true
  })

  it('should create a user and add bookmarks', () => {
    const user2 = randUser()
    const post = new Post(user2)

    expect(user2).to.have.property("userId")
    expect(bcrypt.compareSync("verysecret", user2.getPassword())).true

    user.addBookmark(post)

    expect(user.getBookmarks()).not.empty
    expect(user.getBookmarks()[0]).deep.equal(post)
  })

  it('should create a user and add likes', () => {
    const user2 = randUser()
    const post = new Post(user2)

    expect(user2).to.have.property("userId")
    expect(bcrypt.compareSync("verysecret", user2.getPassword())).true

    user.addLike(post)
    
    expect(user.getLikes()).not.empty
    expect(user.getLikes()[0]).deep.equal(post)
  })

})
