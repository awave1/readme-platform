const User = require('../models/User')
const passport = require('passport')
const db = require('../db')
const { hashSync } = require('bcrypt')

/**
 * UserController contains methods that make calls to database
 *
 * methods are static because we don't need actual instance of UserController
 */
class UserController {
  static async createNewUser(user) {
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

  static async getUserByUsername(username) {
    let user
    try {
      const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username])
      user = rows[0]
    } catch (e) {
      user = undefined
    }

    return user
  }

  static async getUserById(id) {
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

module.exports = UserController
