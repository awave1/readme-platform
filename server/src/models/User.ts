import uuid from 'uuid/v1'
import bcrypt from 'bcrypt'
import Post from './Post'
import Model from './Model'

class User extends Model {

  private userId: string
  private firstName: string
  private lastName: string
  private username: string
  private email: string
  private password: string;
  private bookmarks: Array<any>
  private likes: Array<any>
  private comments: Array<any>
  private dateCreated: string

  constructor (first: string, last: string, username: string, useremail: string, password: string, dateCreated: string) {
    super()
    this.userId = uuid()
    this.firstName = first
    this.lastName = last
    this.username = username
    this.email = useremail
    this.password = this.hashPassword(password)
    this.bookmarks = new Array<Post>()
    this.likes = new Array<Post>()
    this.comments = new Array<any>()
    this.dateCreated = dateCreated
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  public getUsername(): string {
    return this.username
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

  public getDateCreated(): string {
    return this.dateCreated
  }

  public getId(): string {
    return this.userId
  }

  private hashPassword(password: string): string {
    const saltRounds = 10
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
  }
}

export default User
