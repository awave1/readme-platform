import users from './user.route'
import auth from './auth.route'
import { Application } from 'express'
import * as passportConfig from '../auth'

const routes = (app: Application) => {
  app.use('/api/auth', auth)
  app.use('/api/users', users)
}

export default routes
