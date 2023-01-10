import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import torneosRoutes from './routes/torneos.routes.js'
import partidosRoutes from './routes/partidos.routes.js'

const API = '/api'
const app = express()

app.use(express.json())
app.use(cors())

app.use(API,partidosRoutes)
app.use(API,torneosRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Esta ruta no contiene datos'
    })
})

export default app