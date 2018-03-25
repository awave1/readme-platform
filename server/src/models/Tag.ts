import uuid from 'uuid/v1'
import Model from './Model'

class Tag extends Model {
  private name: string
  private tagId: string

  constructor(name: string) {
    super()
    this.name = name
    this.tagId = uuid()
  }

  public getId(): string {
    return this.tagId
  }

  public getName(): string {
    return this.name
  }
}

export default Tag
