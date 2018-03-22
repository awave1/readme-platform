import uuid from 'uuid/v1'
import Post from './Post'

class User {
  readonly firstName: string
  readonly lastName: string
  readonly username: string
  private _email: string
  readonly userId: string
  private posts: Array<Post>

  constructor (first: string, last: string, username: string, email: string) {
    this.firstName = first
    this.lastName = last
    this.username = username
    this._email = email
    this.userId = uuid()
    this.posts = new Array()
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

  public addNewPost(post: Post) {
    this.posts.push(post)
  }

  public getPosts(): Array<Post> {
    return this.posts
  }
}

export default User
