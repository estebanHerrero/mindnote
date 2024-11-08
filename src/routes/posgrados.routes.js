import { Router} from "express";
import {getPosgrados, createPosgrado, updatePosgrado} from '../controllers/posgrados.controller.js';

const router = Router();

router.get('/posgrados', getPosgrados)
router.post('/posgrador', createPosgrado)
router.put('/posgrados', updatePosgrado)

export default router;