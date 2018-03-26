const { expect } = require('chai')
const Tag = require('../../models/Tag')
require('mocha')

describe('tag model test', () => {
  it('should create a tag', () => {
    const tag = new Tag('hey')

    expect(tag).to.haveOwnProperty('tagId')
    expect(tag.getName()).equal('hey')
  })
})
