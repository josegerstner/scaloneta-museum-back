import { Router } from 'express'
import { getGoles, getPartido, getPartidos, getPenales } from '../controllers/partidos.controller.js'

const router = Router()
const API = '/api'

// APP ROUTES
router.get('/partidos', getPartidos)
router.get('/partidos/:id', getPartido)
router.get('/partidos/:id/goles', getGoles)
router.get('/partidos/:id/penales', getPenales)

export default router