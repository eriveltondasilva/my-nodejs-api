import express from 'express'

import middleware from './middleware.js'
import routes from './routes.js'
import server from './server.js'

// instance express
const app = express()

middleware(app)

routes(app)

server(app)
