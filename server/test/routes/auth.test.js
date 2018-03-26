const {
  expect,
  request,
  app,
  User,
  db,
  UserController
} = require('../common')

// todo: make a valid user and login with it
describe('/api/auth', () => {

  it('should login', () => {
    request(app)
      .post('/api/auth/login')
      .send({
        username: 'awave',
        password: 'relaz!99',
      })
      .expect(200)
      .end((err, res) => {
        console.log(res.body)
      })
  })

  it('should not login: invalid pass', () => {
    request(app)
      .post('/api/auth/login')
      .send({
        username: 'awave',
        password: 'somepass',
      })
      .expect(400)
      .end((err, res) => {
        console.log(res.body)
      })
  })

  it('should not login: invalid login', () => {
    request(app)
      .post('/api/auth/login')
      .send({
        username: 'wave',
        password: 'relaz!99',
      })
      .expect(400)
      .end((err, res) => {
        console.log(res.body)
      })
  })
})
