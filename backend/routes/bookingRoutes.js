import express from 'express';
import { createBooking, getUserBookings, getAllBookings } from '../controllers/bookingController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authMiddleware, getUserBookings);
router.get('/all', authMiddleware, getAllBookings);
router.post('/', authMiddleware, createBooking);

export default router;
