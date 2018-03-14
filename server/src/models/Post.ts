import uuid from 'uuid/v1'
import Tag from './Tag';

class Post {
  readonly postId: string
  readonly title: string
  private content: string // note: temporary, will need to figure out how to store md
  readonly datePublished: Date
  private tags: Array<Tag>

  constructor() {
    this.postId = uuid()
    this.datePublished = new Date()
  }

  public addTag(tag: Tag) {
    this.tags.push(tag)
  }

}

export default Post
