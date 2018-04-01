const {
  expect,
  request,
  app,
  User,
  db,
  UserController
} = require('../common')

const authApp = request.agent(app)

// todo: make a valid user and login with it
describe('/api/auth', () => {

  it('should login', (done) => {
    authApp
      .post('/api/auth/login')
      .send({
        username: 'awave',
        password: 'password',
      })
      .expect(200)
      .end((err, res) => {
        done()
      })
  })

  it('should login and get loggedin user', (done) => {
    authApp
      .get('/api/auth/loggedIn')
      .expect(200)
      .end((err, res) => {
        console.log(res.body)
        done()
      })
  })

  it('should not login: invalid pass', (done) => {
    authApp
      .post('/api/auth/login')
      .send({
        username: 'awave',
        password: 'somepass',
      })
      .expect(400)
      .end((err, res) => {
        console.log(res.body)
        done()
      })
  })

  it('should not login: invalid login', (done) => {
    authApp
      .post('/api/auth/login')
      .send({
        username: 'wave',
        password: 'relaz!99',
      })
      .expect(400)
      .end((err, res) => {
        console.log(res.body)
        done()
      })
  })
})
