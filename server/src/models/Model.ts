abstract class Model {
  public getValues(): Array<any> {
    const values = new Array<any>()
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

  public abstract getId(): string

  private getIds(prop: Array<any>): Array<string> {
    return prop.map(e => e.getId())
  }
}

export default Model
