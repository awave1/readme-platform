import Post from '../models/Post'
import User from '../models/User'
import Tag from '../models/Tag'
import db from '../db'

class PostController {
  public static async createNewPost(post: Post) {
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

  public static async addTagToPost(tag: Tag, post: Post) {
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

  public static async getAllPosts() {
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

  public static async getPostsForUser(user: User) {
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

export default PostController
