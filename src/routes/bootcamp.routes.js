import { Router } from 'express'
import { 
    createBootcamp, 
    deleteBootcampById, 
    updateBootcamp,
    addUser,
    findAll,
    findById
} from '../controllers/bootcamp.controller.js';


const router = Router();

router.post('/bootcamp', createBootcamp);
router.post('/bootcamp/:bootcampId', addUser);
router.get('/bootcamp', findAll);
router.get('/bootcamp/:id', findById);
router.put('/bootcamp/:id', updateBootcamp);
router.delete('/bootcamp/:id', deleteBootcampById);



export default router 