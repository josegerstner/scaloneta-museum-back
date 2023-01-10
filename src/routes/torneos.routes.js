import { Router } from 'express'
import { getPartidosXTorneo, getTorneo, getTorneos } from '../controllers/torneos.controller.js'

const router = Router()

// APP ROUTES
router.get('/torneos', getTorneos)
router.get('/torneos/:id', getTorneo)
router.get('/torneos/:id/partidos', getPartidosXTorneo)

export default router