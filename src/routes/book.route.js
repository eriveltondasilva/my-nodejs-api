import { Router } from 'express'
import controller from '../controllers/book.controller.js'

const router = Router()

router.get('/', controller.getAllBooks)
router.get('/:id', controller.getBookById)
router.post('/', controller.createBook)
router.put('/:id', controller.updateBook)
router.delete('/:id', controller.deleteBook)

export default router
