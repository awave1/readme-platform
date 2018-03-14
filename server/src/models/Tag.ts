import uuid from 'uuid/v1'

class Tag {
  private name: string
  readonly tagId: string

  constructor(name: string) {
    this.name = name
    this.tagId = uuid()
  }
}

export default Tag
