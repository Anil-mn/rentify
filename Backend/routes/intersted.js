import express from 'express';
import { createInterested, getInterested, updateInterested, deleteInterested } from '../controllers/interstedController.js';

const router = express.Router();

router.post('/interesteds', createInterested);
router.get('/interesteds/:id', getInterested);
router.put('/interesteds/:id', updateInterested);
router.delete('/interesteds/:id', deleteInterested);

export default router;