import { Router } from 'express'
import { 
    createBootcamp, 
    deleteBootcampById, 
    updateBootcamp,
    addUser,
    findAll,
    findById
} from '../controllers/bootcamp.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { updateUser } from '../controllers/user.controller.js';


const router = Router();

router.post('/bootcamp', authMiddleware, createBootcamp);
router.post('/bootcamp/:bootcampId', authMiddleware, addUser);
router.get('/bootcamp', findAll);
router.get('/bootcamp/:id', authMiddleware, findById);
router.put('/bootcamp/:id', authMiddleware, updateBootcamp);
router.delete('/bootcamp/:id', authMiddleware, deleteBootcampById);



export default router 