import { json } from 'express'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes).
})

export default function middleware(app) {
  app.use(json())
  app.use(helmet())
  app.use(limiter)
}
