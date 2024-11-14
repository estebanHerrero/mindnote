import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = await mysql.createPool({
    // Configuración de la DB
    host: process.env.SERV,
    user: process.env.USUARIO,
    database: process.env.DBNAME,
    password: process.env.PASS,
});

console.log('.oO( Conexión a la DB exitosa! )Oo.\n');
