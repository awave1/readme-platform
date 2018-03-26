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
        username: 'username2',
        password: 'verysecretpassword',
      })
      .expect(200)
      .end((err, res) => {
        console.log(res.body)
      })
  })
})
