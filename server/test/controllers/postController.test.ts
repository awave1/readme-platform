// tslint:disable

import { expect } from 'chai'
import 'mocha'
import bcrypt from 'bcrypt'
import Post from '../../src/models/Post'
import User from '../../src/models/User'
import PostController from '../../src/controllers/PostController';
import db from '../../src/db'
import Tag from '../../src/models/Tag';

describe('postController test', () => {

  let user: User
  let post: Post
  const timeout = 1000000

  before(async () => {
    user = new User("first", "last", "username", "email@email.com", "verysecretpassword", new Date().toJSON())
    post = new Post(user)
    post.setContent('my content')
    post.setTitle('my title')
  })

  afterEach(async () => {
    await db.query('DELETE FROM users WHERE uid = $1', [user.getId()])
    await db.query('DELETE FROM posts WHERE post_id = $1', [post.getId()])
  })

  it('should insert new post in database', async () => {
    const res = await PostController.createNewPost(post)
    expect(res).not.be.undefined
  }).timeout(timeout)

  it('shoud get all posts from database: success', async () => {
    await PostController.createNewPost(post)
    const res = await PostController.getAllPosts()
    expect(res).not.empty
  }).timeout(timeout)

  it('shoud get all posts from database: no posts', async () => {
    const res = await PostController.getAllPosts()
    expect(res).to.be.empty
  }).timeout(timeout)

  it('shoud get all posts for user: success', async () => {
    await PostController.createNewPost(post)
    const res = await PostController.getPostsForUser(user)
    expect(res).not.empty
  }).timeout(timeout)

  it('shoud get all posts for user: no posts', async () => {
    const user2 = new User("first", "last", "username2", "email2@email.com", "verysecretpassword", new Date().toJSON())
    const res = await PostController.getPostsForUser(user2)
    expect(res).empty
  }).timeout(timeout)

  it('should add tag to existing post', async () => {
    const tag = new Tag('yooo')
    const res = await PostController.addTagToPost(tag, post)
  })
})
