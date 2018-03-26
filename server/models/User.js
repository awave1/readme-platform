const uuid = require('uuid')
const bcrypt = require('bcrypt')
const Model = require('./Model')
const Post = require('./Post')

class User extends Model {

  constructor(first, last, username,
              useremail, password, dateCreated) {
    super()
    this.userId = uuid()
    this.firstName = first
    this.lastName = last
    this.username = username
    this.email = useremail
    this.password = this.hashPassword(password)
    this.bookmarks = new Array()
    this.likes = new Array()
    this.comments = new Array()
    this.dateCreated = dateCreated
    this.verified = false
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  getUsername() {
    return this.username
  }

  getEmail() {
    return this.email
  }

  setEmail(newEmail) {
    this.email = newEmail
  }

  getPassword() {
    return this.password
  }

  getDateCreated() {
    return this.dateCreated
  }

  getId() {
    return this.userId
  }

  hashPassword(password) {
    const saltRounds = 10
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
  }
}

module.exports = User
