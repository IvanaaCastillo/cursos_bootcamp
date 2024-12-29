import { Router } from 'express'
import { 
    createUser, 
    deleteUserById, 
    updateUserById
} from '../controllers/user.controller.js';



const router = Router();

router.post('/user', createUser);
router.put('/user/:id', updateUserById);
router.delete('/user/:id', deleteUserById);


export default router