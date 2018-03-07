import express from 'express'
import logger from 'morgan'

import * as apiVersionController from './controllers/ApiVersionController'
import { getApiVersion } from './controllers/ApiVersionController';

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(logger('dev'))
app.use('/', apiVersionController.getApiVersion)

export default app
