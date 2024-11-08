import {Router} from 'express';
import {getCursos, createCurso, updateCurso} from '../controllers/cursos.controller.js';


const router = Router()

router.get('/cursos', getCursos)
router.post('/cursos', createCurso)
router.put('/cursos', updateCurso)

export default router;