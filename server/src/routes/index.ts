import users from './user.route'
import { Application } from 'express'
import * as passportConfig from '../auth'

const routes = (app: Application) => {
  app.use('/api/users', passportConfig.isAuthenticated, users)
}

export default routes
