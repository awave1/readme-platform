const Post = require('../models/Post')
const User = require('../models/User')
const Tag = require('../models/Tag')
const db = require('../db')

class PostController {
  static async createNewPost(post) {
    let result
    try {
      const query = `
        INSERT INTO posts(
          post_id, title, content, author,
          likes, tags, comments, date_created
        ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
      `
      const { rows } = await db.query(query, post.getValues())
      result = rows[0]
    } catch (e) {
      result = undefined
    }

    return result
  }

  static async addTagToPost(tag, post) {
    let result
    try {
      const query = `
        UPDATE posts SET tags = tags || {$1} RETURNING *;
      `
      const { rows } = await db.query(query, [tag.getId()])
      post.addTag(tag)
      result = rows[0]
    } catch (e) {
      result = undefined
      post.removeTag(tag)
    }
    return result
  }

  static async getAllPosts() {
    let result
    try {
      const query = `
        SELECT * FROM posts;
      `
      const { rows } = await db.query(query, [])
      result = rows
    } catch (e) {
      result = undefined
    }
    return result
  }

  static async getPostsForUser(user) {
    let result
    try {
      const query = `
        SELECT * FROM posts WHERE author = $1;
      `
      const { rows } = await db.query(query, [user.getId()])
      result = rows
    } catch (e) {
      result = undefined
    }
    return result
  }

}

module.exports = PostController
