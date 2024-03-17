import { Router } from 'express'
import welcomeController from '../controllers/welcome.controller.js'

const router = Router()
const { getWelcome } = welcomeController

router.get('/', getWelcome)

export default router
