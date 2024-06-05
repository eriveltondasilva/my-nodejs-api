import model from '../models/book.model.js'
import ApiError from '../app/api.error.js'

async function getAllBooks(_req, res) {
  const books = await model.getAllBooks()

  res.status(200).send(books)
}

async function getBookById(req, res) {
  const { id } = req.params

  const book = await model.getBookById(id)

  if (!book) {
    throw new ApiError(404, 'Book not found')
  }

  res.status(200).send(book)
}

async function createBook(req, res) {
  const data = req.body

  const bookCreated = await model.createBook(data)

  res.status(201).send(bookCreated)
}

async function updateBook(req, res) {
  const { id } = req.params
  const data = req.body

  const book = await model.updateBook(id, data)

  res.status(200).send(book)
}

async function deleteBook(req, res) {
  const { id } = req.params

  await model.deleteBook(id)

  res.status(200).send('Delete book ' + id)
}

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
