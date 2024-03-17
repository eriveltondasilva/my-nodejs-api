import bookRoute from './routes/book.route.js'
import welcomeRoute from './routes/welcome.route.js'

export default function routes(app) {
  app.use('/', welcomeRoute)
  app.use('/api/books', bookRoute)
}
