import { expect } from 'chai'
import 'mocha'
import Tag from '../../src/models/Tag'

describe('tag model test', () => {
  it('should create a tag', () => {
    const tag = new Tag('hey')

    expect(tag).to.haveOwnProperty('tagId')
    expect(tag.getName()).equal('hey')
  })
})
