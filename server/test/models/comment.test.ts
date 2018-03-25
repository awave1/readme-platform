// tslint:disable

import { expect } from 'chai'
import 'mocha'
import Comment from '../../src/models/Comment'
import User from '../../src/models/User'
import Post from '../../src/models/Post'

describe('comment model test', () => {

  let user: User
  let post: Post

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
