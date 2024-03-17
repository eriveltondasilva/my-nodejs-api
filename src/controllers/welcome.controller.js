function getWelcome(_, res) {
  res.send({
    message: 'Hello World!',
    getAllBooks: 'http://localhost:3000/api/v1/book',
    getBookById: 'http://localhost:3000/api/v1/book/1',
  })
}

export default { getWelcome }
