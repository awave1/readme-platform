const uuid = require('uuid')
const Model = require('./Model')

class Tag extends Model {

  constructor(name) {
    super()
    this.name = name
    this.tagId = uuid()
  }

  getId() {
    return this.tagId
  }

  getName() {
    return this.name
  }
}

module.exports = Tag
