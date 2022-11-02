import { Router } from "express";
import { postLogin } from "../services/login/login-handler.js"
import { validatePostLogin } from "../services/login/login-validate.js"

export const loginRouter = Router()

loginRouter.post('/', validatePostLogin(), postLogin)

