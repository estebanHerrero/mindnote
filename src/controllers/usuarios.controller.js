import { pool } from '../database/conexion.js';

export const getUsuarios = async (req, res) => {
    const [rows] = await pool.query('SELECT * from usuarios')
    res.json(rows)
}

export const createUsuario = async (req, res) => {
    const {nombre, apellido, correoElectronico, contrasena} =req.body
    const [rows] = await pool.query('INSERT INTO usuarios(nombre, apellido, correoElectronico, contrasena) VALUES (?, ?, ?, ?)', [nombre, apellido, correoElectronico, contrasena])
    res.send({ rows })
}

export const updateUsuario = (req, res) => res.send('editando usuario')