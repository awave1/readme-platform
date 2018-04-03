const uuid = require('uuid')
const Model = require('./Model')

/**
 * Tag model
 */
class Tag extends Model {

  constructor(name) {
    super()
    this.tagId = uuid()
    this.name = name
    this.posts = new Array()
  }

  getId() {
    return this.tagId
  }

  getName() {
    return this.name
  }

  addPost(post) {
    this.posts.push(post)
  }

  getPosts() {
    return this.posts
  }
}

module.exports = Tag
