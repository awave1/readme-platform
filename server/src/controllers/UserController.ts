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
  static async createNewUser(body: any) {
    const user = new User(body.first, body.last, body.username, body.email, body.password)
    const query = 'INSERT INTO r_users(uid, first, last, username, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const result = await db.query(query, user.getValues().slice(0, user.getValues().length));
    return result.rows[0];
  }
}

export default UserController
