import { Router } from 'express';
const router = Router();
import { register } from '../controllers/userController';

router.post('/register', register);

export default router;