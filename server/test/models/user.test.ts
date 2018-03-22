import chai from 'chai'
import 'mocha'
import User from '../../src/models/User'
import Post from '../../src/models/Post'

describe('user model test', () => {
  it('should create a user object with valid fields', () => {
    const user = new User("first", "last", "username", "email@email.com")

    chai.expect(user).to.have.property("userId")
    chai.expect(user).to.have.property("fullName")
    chai.expect(user).to.have.property("fullName").equal("first last")
  })

  it('should add a new post to user', () => {
    const user = new User("first", "last", "username", "email@email.com")
    const post = new Post()
    user.addNewPost(post)
    
    chai.expect(user.getPosts()).not.empty
  })

})
