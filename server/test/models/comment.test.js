const {
  expect,
  Post,
  User,
  Comment,
  randUser
} = require('../common')


describe('comment model test', () => {
  let user
  let post

  before(() => {
    user = randUser()
    post = new Post(user)
  })

  it('should create a comment', () => {
    const comment = new Comment(user, post)

    expect(comment).to.haveOwnProperty('commentId')
    expect(comment.getAuthor()).deep.equal(user)
    expect(comment.getPost()).deep.equal(post)
  })
})
