const { expect } = require('chai')
const Post = require('../../models/Post')
const Tag = require('../../models/Tag')
const User = require('../../models/User')
const Comment = require('../../models/Comment')
require('mocha')

describe('post model test', () => {
  let user

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
