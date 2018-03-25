abstract class Model {
  public getValues(): Array<any> {
    let values = new Array<any>()
    for (let prop of Object.values(this)) {
      if (Array.isArray(prop) && prop[0] instanceof Model)
        values.push(this.getIds(prop))
      else
        values.push(prop)
    }

    return values
  }

  abstract getId(): string

  private getIds(prop: Array<any>): Array<string> {
    return prop.map(e => e.getId())
  }
}

export default Model
