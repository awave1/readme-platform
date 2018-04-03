const uuid = require('uuid')
const Model = require('./Model')
const User = require('./User')
const Post = require('./Post')

/**
 * Comment model. Contains fields used by comments
 */
class Comment extends Model {

  constructor(author, post) {
    super()
    this.commentId = uuid()
    this.content = ''
    this.author = author
    this.post = post
    this.dateCreated = new Date().toJSON()
  }

  getId() {
    return this.commentId
  }

  getAuthor() {
    return this.author
  }

  getPost() {
    return this.post
  }
}

module.exports = Comment
