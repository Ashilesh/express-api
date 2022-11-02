import { Router } from 'express'
import { loginRouter } from './login-route.js'

export const router = Router()

router.use('/login', loginRouter)




