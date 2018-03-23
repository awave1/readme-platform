import uuid from 'uuid/v1'
import bcrypt from 'bcrypt'
import Post from './Post'
import Model from './Model'

class User extends Model {
  private firstName: string
  private lastName: string
  private username: string
  private email: string
  private userId: string
  private password: string;

  constructor (first: string, last: string, username: string, useremail: string, password: string) {
    super()
    this.firstName = first
    this.lastName = last
    this.username = username
    this.email = useremail
    this.userId = uuid()
    this.password = this.hashPassword(password)
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  public getEmail(): string {
    return this.email
  }

  public setEmail(newEmail: string) {
    this.email = newEmail
  }

  public getPassword(): string {
    return this.password
  }

  private hashPassword(password: string): string {
    const saltRounds = 10
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
  }
}

export default User
