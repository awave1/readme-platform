const { expect } = require('chai')
const Post = require('../../models/Post')
const User = require('../../models/User')
const Comment = require('../../models/Comment')
require('mocha')


describe('comment model test', () => {
  let user
  let post

  before(() => {
    user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())
    post = new Post(user)
  })

  it('should create a comment', () => {
    const comment = new Comment(user, post)

    expect(comment).to.haveOwnProperty('commentId')
    expect(comment.getAuthor()).deep.equal(user)
    expect(comment.getPost()).deep.equal(post)
  })
})
