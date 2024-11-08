import {Router} from 'express';
import {getCarreras, createCarrera, updateCarrera} from '../controllers/carreras.controller.js'

const router = Router()

router.get('/carreras', getCarreras)
router.post('/carreras', createCarrera)
router.put('/carreras', (req, res) => res.send('editando carreras'))

export default router;