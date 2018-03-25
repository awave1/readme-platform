import uuid from 'uuid/v1'
import Model from './Model'

class Tag extends Model {
  readonly name: string
  readonly tagId: string

  constructor(name: string) {
    super()
    this.name = name
    this.tagId = uuid()
  }

  public getId(): string {
    return this.tagId
  }
}

export default Tag
