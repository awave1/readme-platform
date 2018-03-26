const {
  expect,
  bcrypt,
  Post,
  Tag,
  User,
  Comment,
  randUser
} = require('../common')

describe('post model test', () => {
  let user

  before(() => {
    user = randUser()
  })

  it('should create an empty post', () => {
    const post = new Post(user)
    post.setTitle('Test Title')
    post.setContent('Test Content #hello')

    expect(post).to.have.property("postId")
    expect(post).to.have.property("dateCreated")
  })

  it('should add tags to a post', () => {
    const post = new Post(user)
    const tag = new Tag("tag name")
    post.setTitle('Test Title')
    post.setContent('Test Content #hello')

    expect(post).to.have.property("postId")
    post.addTag(tag)

    expect(post.getTags()).not.empty
    expect(post.getTags()[0].getId()).not.empty
  })

  it('should add comments to a post', () => {
    const post = new Post(user)
    const comment = new Comment(user, post)
    post.addComment(comment)
    expect(post.getComments()).not.empty
    expect(post.getComments()[0]).deep.equal(comment)
  })
})
