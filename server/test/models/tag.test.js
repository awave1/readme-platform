const {
  expect,
  Tag,
  Post,
  randUser
} = require('../common')

describe('tag model test', () => {
  it('should create a tag', () => {
    const tag = new Tag('hey')

    expect(tag).to.haveOwnProperty('tagId')
    expect(tag.getName()).equal('hey')
  })

  it('should add post to a tag', () => {
    const tag = new Tag('hey')
    const user = randUser()
    const post = new Post(user)

    tag
  })
})
