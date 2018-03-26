const {
  expect,
  Tag
} = require('../common')

describe('tag model test', () => {
  it('should create a tag', () => {
    const tag = new Tag('hey')

    expect(tag).to.haveOwnProperty('tagId')
    expect(tag.getName()).equal('hey')
  })
})
