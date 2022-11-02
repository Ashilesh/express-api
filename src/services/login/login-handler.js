import { validationResult } from 'express-validator'
import { ErrorResponse } from '../../model/error-response.js'
import { statusCode } from '../../constants/status-code.js'

export function postLogin(req, res) {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const errorResponse = new ErrorResponse(errors.array({ onlyFirstError: true }))
        res.status(statusCode.BAD_REQUEST).send(errorResponse)
        return
    }

    console.log(req.body)
    res.send("hello from service")
}