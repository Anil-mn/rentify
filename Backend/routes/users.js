import express from 'express'
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router()

// Route to create a new user
router.post('/users', createUser);

// Route to retrieve a user by ID
router.get('/users/:id', getUser);

// Route to update an existing user
router.put('/users/:id', updateUser);

// Route to delete a user
router.delete('/users/:id', deleteUser);

export default router;