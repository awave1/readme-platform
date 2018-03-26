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

  getId() {
    throw new Error('implement method getId()')
  }

  getIds(prop) {
    return prop.map(e => e.getId())
  }
}

module.exports = Model
