import { expect } from 'chai'
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

})
