import { Router } from 'express'
import bookController from '../controllers/book.controller.js'

const router = Router()
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } =
  bookController

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router
