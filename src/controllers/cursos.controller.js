import {pool} from '../db.js';

export const getCursos = async (req, res) => {
    const [rows] = await pool.query('SELECT * from cursos')
    res.json(rows)
}

export const createCurso = async (req, res) => {
    const {nombre, empresa, fechaInicio, fechaFin, estado} = req.body
    const [rows] = await pool.query('INSERT INTO cursos(nombre, empresa, fechaInicio, fechaFin, estado) VALUES (?, ?, ?, ?, ?)', [nombre, empresa, fechaInicio, fechaFin, estado])
    res.send({ rows })
}

export const updateCurso = (req, res) => res.send('editando cursos')