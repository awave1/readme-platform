const users = require('./user.route')
const posts = require('./post.route')
const auth = require('./auth.route')

const routes = (app) => {
  app.use('/api/auth', auth)
  app.use('/api/users', users)
  app.use('/api/posts', posts)
}

module.exports = routes
