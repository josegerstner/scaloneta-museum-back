import { pool } from '../db.js'

export const getPartidos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_partidos')
    
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

export const getPartido = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_partidos WHERE id = ?', [req.params.id])
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Partido not found'
        })
    
        res.json(rows[0])
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getGoles = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_goles WHERE partido_id = ?', [req.params.id])
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Goles not found'
        })
    
        res.json(rows)
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getPenales = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM scaloneta_penales WHERE partido_id = ?', [req.params.id])
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Penales not found'
        })
    
        res.json(rows)
    } catch(error) {
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}