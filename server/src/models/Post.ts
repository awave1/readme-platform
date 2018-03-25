import uuid from 'uuid/v1'
import Tag from './Tag'
import Model from './Model'

class Post extends Model {
  private postId: string
  private title: string
  private content: string // note: temporary, will need to figure out how to store md
  private author: string
  private likes: number
  private tags: Array<Tag>
  private comments: Array<any>
  private dateCreated: string

  constructor(authorId: string) {
    super()
    this.postId = uuid()
    this.title = ''
    this.content = ''
    this.author = authorId
    this.likes = 0
    this.tags = new Array<Tag>()
    this.comments = new Array<any>()
    this.dateCreated = new Date().toJSON()
  }

  public getId(): string {
    return this.postId
  }

  public setTitle(title: string) {
    this.title = title
  }

  public setContent(content: string) {
    this.content = content
  }

  public addTag(tag: Tag) {
    this.tags.push(tag)
  }

  public getTags(): Array<Tag> {
    return this.tags
  }

}

export default Post
