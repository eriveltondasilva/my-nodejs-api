import { Router } from 'express'
import controller from '../controllers/book.controller.js'
import verifyId from '../middleware/verifyId.js'

const router = Router()

router.param('id', verifyId)
router.get('/', controller.getAllBooks)
router.get('/:id', controller.getBookById)
router.post('/', controller.createBook)
router.put('/:id', controller.updateBook)
router.delete('/:id', controller.deleteBook)

export default router
