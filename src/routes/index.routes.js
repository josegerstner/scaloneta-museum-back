import { Router } from 'express'
import { getInfo, ping } from '../controllers/index.controller.js'

const router = Router()

// MESSAGE ROUTES
router.get('/ping', ping)
router.get('/api/', getInfo)
router.get('/', getInfo)

export default router