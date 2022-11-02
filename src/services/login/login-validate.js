import { body, validationResult } from 'express-validator'
import { statusCode } from '../../constants/status-code.js'

export function validatePostLogin() {

    return [
        body("username").exists().isLength({ min: 3, max: 128 }),
        body("password").exists().isLength({ min: 3, max: 128 })
    ]
}