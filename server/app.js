const express = require('express')
const session = require('express-session')
const logger = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const mountRoutes = require('./routes')
const User = require('./models/User')
const UserController = require('./controllers/UserController')
const LocalStrategy = require('passport-local')
const { compareSync } = require('bcrypt')

const app = express()
const SESSION_SECRET = 'l\xe9d5\xa4{\x95\xf7\xe1A\xbf\x1bl\xcb\xc8nR\x07:\x08\xd8GO0'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: SESSION_SECRET,
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  console.log('serialize')
  console.log(user)
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log('deserialize')
  UserController.getUserById(user.uid)
    .then(user => { 
      console.log('success')
      console.log(user)
      done(null, user)
    })
    .catch(err => {
      console.log(err)
      done(err, undefined)
    })
})

passport.use(new LocalStrategy({}, (username, password, done) => {
  console.log('local strat')
  console.log(username)
  console.log(password)
  UserController.getUserByUsername(username)
    .then(user => {
      if (compareSync(password, user.password))
        done(null, user)
      else
        done(null, false)
    })
    .catch(err => {
      done(err)
    })
}))

app.set('port', process.env.PORT || 3001)
app.use(logger('dev'))
// app.use((req, res, next) => {req.user = req.session.user; next()})

// Serve static files if running in prod mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'))
}

mountRoutes(app)

module.exports = app
