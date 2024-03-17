import model from '../models/book.model.js'

function verifyId(_req, _res, next, id) {
  if (isNaN(id)) {
    throw new Error(`Invalid id: ${id}`)
  }

  next()
}

async function getAllBooks(_req, res) {
  const books = await model.getAllBooks()

  res.send(books)
}

async function getBookById(req, res) {
  const { id } = req.params

  const book = await model.getBookById(id)

  if (!book) {
    throw new Error(`Book not found: id - ${id}`)
  }

  res.send(book)
}

async function createBook(_req, res) {
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

export default {
  verifyId,
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
