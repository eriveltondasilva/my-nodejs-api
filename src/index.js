import express from 'express'

import 'express-async-errors'

import handlerError from './handlerError.js'
import middleware from './middleware.js'
import routes from './routes.js'
import server from './server.js'

// instance express
const app = express()

middleware(app)

routes(app)

handlerError(app)

server(app)
