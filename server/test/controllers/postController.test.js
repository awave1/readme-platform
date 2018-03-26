const {
  expect,
  bcrypt,
  Post,
  User,
  Tag,
  PostController,
  db,
  faker,
  randUser
} = require('../common')

describe('postController test', () => {
  let user
  let post
  const timeout = 1000000

  before(async () => {
    user = randUser()
    post = new Post(user)
    post.setContent(faker.lorem.paragraph(4))
    post.setTitle(faker.lorem.words(2))
  })

  afterEach(async () => {
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
    const user2 = randUser()
    const res = await PostController.getPostsForUser(user2)
    expect(res).empty
  }).timeout(timeout)

  it('should add tag to existing post', async () => {
    const tag = new Tag('yooo')
    const res = await PostController.addTagToPost(tag, post)
  })
})
