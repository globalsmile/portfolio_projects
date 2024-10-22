import { Router } from 'express';
const router = Router();
import { checkin, checkout } from '../controllers/attendanceController';

router.post('/checkin', checkin);
router.post('/checkout', checkout);

export default router;