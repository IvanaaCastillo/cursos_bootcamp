import { Router } from 'express'
import { 
    createUser, 
    deleteUserById, 
    updateUserById,
    findUserById,
    findAll
} from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';



const router = Router();

router.post('/user', authMiddleware, createUser);
router.get('/user/:id', authMiddleware, findUserById);
router.get('/user', authMiddleware, findAll);
router.put('/user/:id', authMiddleware, updateUserById);
router.delete('/user/:id', authMiddleware, deleteUserById);


export default router