import express from 'express';
import { getAllEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', getAllEvents);
router.post('/', authMiddleware, createEvent);
router.put('/:id', authMiddleware, updateEvent);
router.delete('/:id', authMiddleware, deleteEvent);

export default router;