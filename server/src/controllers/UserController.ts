import User from '../models/User'
import db from '../db'

/**
 * UserController contains methods that make calls to database
 * 
 * methods are static because we don't need actual instance of UserController
 * 
 * p.s. this is not js style at all
 */

class UserController {
  static async createNewUser(user: User) {
    const query = `
      INSERT INTO users(
        uid, first, last, username, 
        email, password, bookmarks, likes,
        comments, date_created) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;
    `
    const result = await db.query(query, user.getValues())
    return result.rows[0]
  }

  static async signIn() {

  }

}

export default UserController
