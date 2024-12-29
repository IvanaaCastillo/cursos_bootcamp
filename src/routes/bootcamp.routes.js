import { Router } from 'express'
import { 
    createBootcamp, 
    deleteBootcampById, 
    updateBootcamp 
} from '../controllers/bootcamp.controller.js';


const router = Router();

router.post('/bootcamp', createBootcamp)
router.put('/bootcamp/:id', updateBootcamp)
router.delete('/bootcamp/:id', deleteBootcampById)



export default router 