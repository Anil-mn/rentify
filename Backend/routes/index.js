import express from 'express'
import userRouter from './users.js'
import authRouter from './auth.js'
import propetyRouter from './property.js'
import interstedRouter from './intersted.js'

const router = express.Router()

router.use('/users', userRouter);

router.use('/auth',authRouter)

router.use('/property',propetyRouter)

router.use('/',interstedRouter)

export default router;