import express from 'express'
import session from 'express-session'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import mountRoutes from './routes'
import User from './models/User'
import UserController from './controllers/UserController'
import { Strategy as LocalStrategy } from 'passport-local'
import { compareSync } from 'bcrypt'

const app = express()
const SESSION_SECRET = 'l\xe9d5\xa4{\x95\xf7\xe1A\xbf\x1bl\xcb\xc8nR\x07:\x08\xd8GO0'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user: any, done) => {
  done(null, user.uid)
})

passport.deserializeUser(async (id: any, done) => {
  UserController.getUserById(id.id)
    .then(user => done(null, user))
    .catch(err => done(err, undefined))
})

passport.use(new LocalStrategy({}, (username, password, done) => {
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

// Serve static files if running in prod mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'))
}

mountRoutes(app)

export default app
