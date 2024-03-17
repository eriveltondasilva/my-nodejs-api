function getWelcome(_, res) {
  res.send({
    message: 'Hello World!',
    title: 'API DOCUMENTATION',
    get_all_books: ['http://localhost:3000/api/books', 'GET'],
    get_book_by_id: ['http://localhost:3000/api/books/1', 'GET'],
    create_book: ['http://localhost:3000/api/books', 'POST'],
    update_book: ['http://localhost:3000/api/books/1', 'PUT'],
    delete_book: ['http://localhost:3000/api/books/1', 'DELETE'],
  })
}

export default { getWelcome }
