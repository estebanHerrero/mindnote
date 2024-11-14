import { pool } from './conexion.js';


export default class Usuarios {

    buscar = async (correoElectronico, contrasena) => {
        const sql = `SELECT u.idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario
            FROM usuarios AS u
            WHERE u.correoElectronico = ?
                AND u.contrasena = SHA2(?, 256);`

        const [result] = await db.query(sql, [correoElectronico, contrasena]);
        return result[0]; 
    }

    buscarPorId = async (idUsuario) => {
        const sql = `SELECT u.idUsuario, CONCAT(u.nombre, ' ', u.apellido) as usuario
            FROM usuarios AS u
            WHERE u.idUsuario = ?;`
        const [result] = await conexion.query(sql, [idUsuario]);
        return result[0];
    }
}