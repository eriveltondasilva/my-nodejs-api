export function server(app) {
  return app.listen(3000, () => {
    console.log('Server is running on port 3000🚀')
  })
}
