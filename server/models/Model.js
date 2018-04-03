/**
 * parent class for all of the models. 
 * 
 * pure JavaScript doesn't support abstract classes, but we can still simulate them
 * by throwing error if a methiod is not implemented
 */
class Model {
  getValues() {
    const values = new Array()
    for (const prop of Object.values(this)) {
      if (Array.isArray(prop) && prop[0] instanceof Model)
        values.push(this.getIds(prop))
      else if (prop instanceof Model)
        values.push(prop.getId())
      else
        values.push(prop)
    }

    return values
  }

  /**
   * Abstract method, must be implemented by all children
   */
  getId() {
    throw new Error('implement method getId()')
  }

  getIds(prop) {
    return prop.map(e => e.getId())
  }
}

module.exports = Model
