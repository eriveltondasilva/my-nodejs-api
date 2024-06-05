function errorMiddleware(error, _req, res, _next) {
  const { status, message } = error

  console.error(error)
  res.status(status).send({ message, status })
}

export default function handlerError(app) {
  app.use(errorMiddleware)
}
