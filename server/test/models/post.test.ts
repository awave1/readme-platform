import chai from 'chai'
import 'mocha'
import User from '../../src/models/User'
import Post from '../../src/models/Post'
import Tag from '../../src/models/Tag'
import Model from '../../src/models/Model';

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
  })

  it('should add tags to a post', () => {
    const post = new Post(user.getId())
    const tag = new Tag("tag name")
    post.setTitle('Test Title')
    post.setContent('Test Content #hello')

    chai.expect(post).to.have.property("postId")
    post.addTag(tag)

    chai.expect(post.getTags()).not.empty
    chai.expect(post.getTags()[0].tagId).not.empty

    console.log(post.getValues())
  })

})
