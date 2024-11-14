import { pool } from '../database/conexion.js';

export const getCarreras = async (req, res) => {
    const [rows] = await pool.query('SELECT * from carreras')
    res.json(rows)
}

export const createCarrera = async (req, res) => {
    const {nombre, universidad, fechaInicio, fechaFin, estado} = req.body
    const [rows] = await pool.query('INSERT INTO carreras(nombre, universidad, fechaInicio, fechaFin, estado) VALUES (?, ?, ?, ?, ?)', [nombre, universidad, fechaInicio, fechaFin, estado])
    res.send({ rows })
} 

export const updateCarrera = (req, res) => res.send('editando carrera')