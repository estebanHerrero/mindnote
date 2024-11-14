import express from 'express';
import { pool } from './database/conexion.js';
import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport'; 
import usuariosRoutes from './routes/usuarios.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import carrerasRoutes from './routes/carreras.routes.js';
import posgradosRoutes from './routes/posgrados.routes.js';
import especializacionesRoutes from './routes/especializaciones.routes.js';
import { estrategia, validacion } from './config/passport.js';
import { router as authRoutes } from './routes/auth.routes.js';



const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}); 

app.use(express.json())

passport.use(estrategia);
passport.use(validacion);
app.use(passport.initialize());

app.use('/api/auth', authRoutes)
app.use('/api', usuariosRoutes)
app.use('/api', cursosRoutes)
app.use('/api', carrerasRoutes)
app.use('/api', posgradosRoutes)
app.use('/api', especializacionesRoutes)

app.listen(3000);
