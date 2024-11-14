import { pool } from "../database/conexion.js";

export const getPosgrados = async (req, res) => {
    const [rows] = await pool.query('SELECT * from posgrados')
    res.json(rows)
}

export const createPosgrado = async (req, res) => {
    const {nombre, universidad, fechaInicio, fechaFin, estado} = req.body
    const [rows] = await pool.query('INSERT INTO posgrados(nombre, universidad, fechaInicio, fechaFin, estado) VALUES (?, ?, ?, ?, ?)', [nombre, universidad, fechaInicio, fechaFin, estado])
    res.send({ rows })
}

export const updatePosgrado = (req, res) => res.send('editando posgrado')