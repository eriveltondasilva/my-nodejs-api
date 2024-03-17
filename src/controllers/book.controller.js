import model from '../models/book.model.js'

async function getAllBooks(_, res) {
  const books = await model.getAllBooks()

  res.send(books)
}

async function getBookById(req, res) {
  const { id } = req.params

  const book = await model.getBookById(id)

  res.send(book)
}

async function createBook(_, res) {
  res.send('Create book')
}

async function updateBook(req, res) {
  const { id } = req.params

  res.send('Update book ' + id)
}

async function deleteBook(req, res) {
  const { id } = req.params

  res.send('Delete book ' + id)
}

export default { getAllBooks, getBookById, createBook, updateBook, deleteBook }
