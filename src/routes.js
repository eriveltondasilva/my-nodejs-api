import bookRoute from './routes/book.route.js'

export default function routes(app) {
  app.use('api/v1/book', bookRoute)
}
