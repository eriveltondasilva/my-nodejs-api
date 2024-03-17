function errorMiddleware(error, _req, res, _next) {
  const status = error.status || 500
  const message = error.message || 'Internal Server Error'

  console.error(error)
  res.status(status).send({ message, status })
}

export default function handlerError(app) {
  app.use(errorMiddleware)
}
