const {
  expect,
  request,
  app,
  User,
  db,
  UserController,
  faker,
  server
} = require('../common')

describe('/api/users', () => {
  let userData

  beforeEach(() => {
    const name = faker.name.findName().split(' ')
    userData = {
      first: name[0],
      last: name[1],
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: 'verysecret',
    }
  })

  it('should successfully send POST request: 200', (done) => {
    request(app)
      .post('/api/users/create')
      .send(userData)
      .expect(200)
      .end(done)
  })

  it('should send invalid POST request: 422 - empty email', (done) => {
    const name = faker.name.findName().split(' ')
    const userData = {
      first: name[0],
      last: name[1],
      username: faker.internet.userName(),
      email: '',
      password: 'verysecret',
    }

    request(app)
      .post('/api/users/create')
      .send(userData)
      .expect(422)
      .end(done)
  })

  it('should send invalid POST request: 422 - empty password', (done) => {
    const name = faker.name.findName().split(' ')
    const userData = {
      first: name[0],
      last: name[1],
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: '',
    }

    request(app)
      .post('/api/users/create')
      .send(userData)
      .expect(422)
      .end(done)
  })

  it('should GET the user by username: 200', (done) => {
    request(app)
      .get('/api/users/awave')
      .expect(200)
      .end(done)
  })

  it('should GET the user by username: 422 - user doesn\'t exist', (done) => {
    request(app)
      .get('/api/users/wave')
      .expect(422)
      .end((err, res) => {
        console.log(res.body)
        done()
      })
  })
})
