import { Router } from 'express'

const router = Router()

router.get('/', (_, res) => {
  res.send({ message: 'Hello World!' })
})

export default router
