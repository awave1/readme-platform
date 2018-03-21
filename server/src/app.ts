import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import mountRoutes from './routes'
import * as apiVersionController from './controllers/ApiVersionController'
import { getApiVersion } from './controllers/ApiVersionController';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3001)
app.use(logger('dev'))

// Serve static files if running in prod mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'));
}

mountRoutes(app)

export default app
