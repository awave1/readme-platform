import uuid from 'uuid'
import Model from './Model'
import User from './User'
import Post from './Post'
import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';

class Comment extends Model {

  private commentId: string
  private content: string
  private author: User
  private post: Post
  private dateCreated: string

  constructor(author: User, post: Post) {
    super()
    this.commentId = uuid()
    this.content = ''
    this.author = author
    this.post = post
    this.dateCreated = new Date().toJSON()
  }

  public getId(): string {
    return this.commentId
  }

  public getAuthor(): User {
    return this.author
  }

public getPost(): Post {
    return this.post
  }
}

export default Comment
