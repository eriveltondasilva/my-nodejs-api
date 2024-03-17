function getAllBooks(_, res) {
  res.send('Get all books')
}

function getBookById(req, res) {
  const { id } = req.params

  res.send('Get book by id: ' + id)
}

function createBook(_, res) {
  res.send('Create book')
}

function updateBook(req, res) {
  const { id } = req.params

  res.send('Update book ' + id)
}

function deleteBook(req, res) {
  const { id } = req.params

  res.send('Delete book ' + id)
}

export default { getAllBooks, getBookById, createBook, updateBook, deleteBook }
