import users from './user.route'
import { Application } from 'express';

const routes = (app: Application) => {
  app.use('/api/users', users)
}

export default routes
