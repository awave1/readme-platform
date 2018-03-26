const { expect } = require('chai')
const bcrypt = require('bcrypt')
const Post = require('../../models/Post')
const Tag = require('../../models/Tag')
const User = require('../../models/User')
const Comment = require('../../models/Comment')
require('mocha')

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())

    expect(user).to.have.property("userId")
    expect(bcrypt.compareSync("verysecretpassword", user.getPassword())).true
  })
})
