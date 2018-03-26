import User from '../models/User'
import db from '../db'
import passport from 'passport'
import { hashSync } from 'bcrypt'

/**
 * UserController contains methods that make calls to database
 *
 * methods are static because we don't need actual instance of UserController
 *
 * p.s. this is not js style at all
 */

class UserController {
  public static async createNewUser(user: User) {
    let result
    try {
      const query = `
        INSERT INTO users(
          uid, first, last, username,
          email, password, bookmarks, likes,
          comments, date_created, verified)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;
      `
      const { rows } = await db.query(query, user.getValues())
      result = rows[0]
    } catch (e) {
      result = undefined
    }

    return result
  }

  public static async getUserByUsername(username: string) {
    let user
    try {
      const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username])
      user = rows[0]
    } catch (e) {
      user = undefined
    }

    return user
  }

  public static async getUserById(id: string) {
    let user
    try {
      const { rows } = await db.query('SELECT * FROM users WHERE uid = $1', [id])
      user = rows[0]
    } catch (e) {
      user = undefined
    }

    return user
  }
}

export default UserController
