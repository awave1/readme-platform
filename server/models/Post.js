const uuid = require('uuid')
const Model = require('./Model')
const User = require('./User')
const Comment = require('./Comment')
const Tag = require('./Tag')

/**
 * Post model
 */
class Post extends Model {
  constructor(author) {
    super()
    this.postId = uuid()
    this.title = ''
    this.content = ''
    this.author = author
    this.likes = 0
    this.tags = new Array()
    this.comments = new Array()
    this.dateCreated = new Date().toJSON()
  }

  getId() {
    return this.postId
  }

  setTitle(title) {
    this.title = title
  }

  setContent(content) {
    this.content = content
  }

  addTag(tag) {
    this.tags.push(tag)
  }

  removeTag(tag) {
    this.tags = this.tags.filter(e => e.getId() !== tag.getId())
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  getComments() {
    return this.comments
  }

  getTags() {
    return this.tags
  }
}

module.exports = Post
