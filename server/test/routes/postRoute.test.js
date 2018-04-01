const {
  expect,
  request,
  app,
  User,
  db,
  UserController,
  faker,
  server,
  login,
  randUser
} = require('../common')

const authUser = request.agent(app)

describe('/api/posts', () => {
  before((done) => {
    authUser
      .post('/api/auth/login')
      .send({
        username: 'awave',
        password: 'password'
      })
      .end((err, res) => {
        console.log(res.body)
        done()
      })
  })

  it.only('should successfully create a post: 200', (done) => {
    authUser
      .post('/api/posts/create')
      .send({
        title: faker.lorem.words(2),
        content: faker.lorem.paragraph(4)
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.post_id).not.empty
        expect(res.body.author.uid).eq(authUser.uid)
        done()
      })
  })

  it('should fail creating a post: 422 - no title', (done) => {
    authUser
      .post('/api/posts/create')
      .send({
        content: faker.lorem.paragraph(4)
      })
      .expect(422)
      .end((err, res) => {
        done()
      })
  })

  it('should fail creating a post: 422 - no content', (done) => {
    authUser
      .post('/api/posts/create')
      .send({
        title: faker.lorem.words(2),
      })
      .expect(422)
      .end((err, res) => {
        done()
      })
  })

  it('should fail creating a post: 422 - no data', (done) => {
    authUser
      .post('/api/posts/create')
      .expect(422)
      .end((err, res) => {
        done()
      })
  })
})
