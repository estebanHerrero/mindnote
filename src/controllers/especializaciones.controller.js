import {pool} from '../db.js';

export const getEspecializaciones = async (req, res) => {
    const [rows] = await pool.query('SELECT * from especializaciones')
    res.json(rows)
}

export const createEspecializacion = async (req, res) => {
    const {nombre, universidad, fechaInicio, fechaFin, estado} = req.body
    const [rows] = await pool.query('INSERT INTO especializaciones(nombre, universidad, fechaInicio, fechaFin, estado) VALUES (?, ?, ?, ?, ?)', [nombre, universidad, fechaInicio, fechaFin, estado])
    res.send({ rows })
} 

export const updateEspecializacion = (req, res) => res.send('editando especializacion')