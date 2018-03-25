import passport from 'passport'
import db from './db'
import User from './models/User'
import UserController from './controllers/UserController'

const auth = () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.getId())
  })

  passport.deserializeUser(async (id: any, done) => {
    UserController.getUserById(id.id)
      .then(user => done(null, user))
      .catch(err => done(err, undefined))
  })
}

export default auth
