import { pool } from '../db.js'

export const getTorneos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_torneos')
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Torneos not found'
        })
    
        res.json(rows)
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getTorneo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_torneos WHERE id = ?', [req.params.id])
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Torneo not found'
        })
    
        res.json(rows[0])
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong: '+error
        })
    }
}

export const getPartidosXTorneo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_partidos WHERE torneo_id = ?', [req.params.id])
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Partidos not found'
        })
    
        res.json(rows)
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}