import {Router} from 'express';
import {getEspecializaciones, createEspecializacion, updateEspecializacion} from '../controllers/especializaciones.controller.js'

const router = Router()

router.get('/especializaciones', getEspecializaciones)
router.post('/especializaciones', createEspecializacion)
router.put('/especializaciones', (req, res) => res.send('editando especializaciones'))

export default router;