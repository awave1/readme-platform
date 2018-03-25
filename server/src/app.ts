import express from 'express'
import session from 'express-session'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import mountRoutes from './routes'
import * as passportConfig from './auth'

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

app.set('port', process.env.PORT || 3001)
app.use(logger('dev'))

// Serve static files if running in prod mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'))
}

mountRoutes(app)

export default app
