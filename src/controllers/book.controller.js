import model from '../models/book.model.js'

async function getAllBooks(_req, res) {
  const books = await model.getAllBooks()

  res.send(books)
}

async function getBookById(req, res) {
  const { id } = req.params

  const book = await model.getBookById(id)

  if (!book) {
    throw new Error('Book not found: %d', id)
  }

  res.send(book)
}

async function createBook(req, res) {
  const data = req.body

  const bookCreated = await model.createBook(data)

  if (!bookCreated) {
    throw new Error('Book not created: %o', data)
  }

  res.send('Create book')
}

async function updateBook(req, res) {
  const { id } = req.params
  const data = req.body

  const book = await model.updateBook(id, data)

  res.send('Update book ' + id)
}

async function deleteBook(req, res) {
  const { id } = req.params

  const book = await model.deleteBook(id)

  res.send('Delete book ' + id)
}

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
