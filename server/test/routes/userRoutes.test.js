const {
  expect,
  request,
  app,
  User,
  db,
  UserController
} = require('../common')

describe('/api/users', () => {
  let userData

  beforeEach(() => {
    userData = {
      first: 'first',
      last: 'last',
      username: 'username',
      email: 'email@email.com',
      password: 'verysecret',
    }
  })

  it('should successfully send POST request: 200', (done) => {
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end((err, res) => {
        expect(res.status).equal(200)
        expect(res.body).not.undefined
        expect(res.body).not.empty
        expect(res.body.pasword).not.equal(userData.password)
        expect(res.body.email).equal(userData.email)

      })
    done()
  }).timeout(10000)

  it('should send invalid POST request: 422 - empty email', () => {
    userData.email = ''
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end((err, res) => {
        expect(res.status).equal(422)
        expect(res.body).not.undefined
        expect(res.body).not.empty
      })
  })

  it('should send invalid POST request: 422 - empty password', () => {
    userData.password = ''
    request(app)
      .post('/api/users/create')
      .send(userData)
      .end((err, res) => {
        expect(res.status).equal(422)
        expect(res.body).not.undefined
        expect(res.body).not.empty
      })
  })
})
