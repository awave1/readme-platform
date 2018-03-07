import uuid from 'uuid/v1'

class User {
  readonly firstName: string
  readonly lastName: string
  readonly username: string
  private _email: string
  readonly userId: string

  constructor (first: string, last: string, username: string, email: string) {
    this.firstName = first
    this.lastName = last
    this.username = username
    this._email = email
    this.userId = uuid()
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  get email(): string {
    return this._email
  }

  set email(newEmail: string) {
    this.email = newEmail
  }

}

export default User
