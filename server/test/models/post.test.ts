import chai from 'chai'
import 'mocha'
import User from '../../src/models/User'
import Post from '../../src/models/Post'
import Tag from '../../src/models/Tag'

describe('post model test', () => {
  it('should create an empty post', () => {
    const post = new Post()
    chai.expect(post).to.have.property("postId")
    chai.expect(post).to.have.property("datePublished")
  })

  it('should add tags to a post', () => {
    const post = new Post()
    post.addTag(new Tag("tag name"))

    chai.expect(post.getTags()).not.empty
    chai.expect(post.getTags()[0].name).equal("tag name")
    chai.expect(post.getTags()[0].tagId).not.empty
  })

})
