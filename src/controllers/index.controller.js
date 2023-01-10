import { pool } from '../db.js'

export const ping = async (req, res)=> {
    const [result] = await pool.query('SELECT "pong" as result') // con el [result] estoy obteniendo sólo result de toda la respuesta, sino me trae un montón de info que no necesito
    res.json(result[0])
}

export const getInfo = async (req, res) => {
    res.status(200).json({
        message: 'Esta aplicación está construida con NodeJS. Visite: https://github.com/josegerstner/portafolio-restapi'
    })
}