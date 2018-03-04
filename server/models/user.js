const uuidv1 = require('uuid/v1')

class User {
  constructor(first, last, username, email) {
    this.firstName = first
    this.lastName = last
    this.fullName = `${first} ${last}`
    this.username = username
    this.email = email
    this.uuid = uuidv1()
  }

  getFirstName() {
    return this.firstName
  }

  getLastName() {
    return this.lastName
  }

  getFullName() {
    return this.fullName
  }

  getUsername() {
    return this.username
  }

  getEmail() {
    return this.email
  }

  getId() {
    return this.uuid
  }
}

module.exports = User
