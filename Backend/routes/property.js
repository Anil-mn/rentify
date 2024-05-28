import express from 'express';
import { createProperty, getProperty, updateProperty, deleteProperty, getAllProperties } from '../controllers/propertyController.js';

const router = express.Router();


router.post('/properties', createProperty);
router.get('/properties', getAllProperties);

router.get('/properties/:id', getProperty);

router.put('/properties/:id', updateProperty);

router.delete('/properties/:id', deleteProperty);

export default router;