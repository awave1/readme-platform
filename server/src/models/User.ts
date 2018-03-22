import uuid from 'uuid/v1'
import Post from './Post'

class User {
  readonly firstName: string
  readonly lastName: string
  readonly username: string
  private email: string
  readonly userId: string
  private posts: Array<Post>

  constructor (first: string, last: string, username: string, useremail: string) {
    this.firstName = first
    this.lastName = last
    this.username = username
    this.email = useremail
    this.userId = uuid()
    this.posts = new Array()
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

  public getPosts(): Array<Post> {
    return this.posts
  }
}

export default User
