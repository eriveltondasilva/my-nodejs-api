import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.send('Book route')
})

export default router
