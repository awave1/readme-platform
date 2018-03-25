import chai from 'chai'
import 'mocha'
import User from '../../src/models/User'
import Post from '../../src/models/Post'
import Tag from '../../src/models/Tag'

describe('post model test', () => {

  let user: User

  before(() => {
    user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())
  })

  it('should create an empty post', () => {
    const post = new Post(user.getId())
    post.setTitle('Test Title')
    post.setContent('Test Content #hello')

    chai.expect(post).to.have.property("postId")
    chai.expect(post).to.have.property("dateCreated")

    console.log(post.getValues())
  })

  it('should add tags to a post', () => {
    const post = new Post(user.getId())
    post.setTitle('Test Title')
    post.setContent('Test Content #hello')

    chai.expect(post).to.have.property("postId")
    post.addTag(new Tag("tag name"))

    chai.expect(post.getTags()).not.empty
    chai.expect(post.getTags()[0].name).equal("tag name")
    chai.expect(post.getTags()[0].tagId).not.empty

    console.log(post.getValues())
  })

})
