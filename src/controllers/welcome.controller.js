function getWelcome(_, res) {
  res.send({
    message: 'Hello World!',
    get_all_books: 'http://localhost:3000/api/v1/book',
    get_book_by_id: 'http://localhost:3000/api/v1/book/1',
  })
}

export default { getWelcome }
