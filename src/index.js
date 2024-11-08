import express from 'express';
import {pool} from './db.js';
import cursosRoutes from './routes/cursos.routes.js';
import carrerasRouter from './routes/carreras.routes.js';
import posgradosRouter from './routes/posgrados.routes.js';
import especializacionesRouter from './routes/especializaciones.routes.js';

const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}); 

app.use(express.json())

app.use('/api',cursosRoutes)
app.use('/api',carrerasRouter)
app.use('/api', posgradosRouter)
app.use('/api', especializacionesRouter)

app.listen(3000);
console.log('Server running on port 3000')