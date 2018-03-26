const users = require('./user.route')
const auth = require('./auth.route')

const routes = (app) => {
  app.use('/api/auth', auth)
  app.use('/api/users', users)
}

module.exports = routes
