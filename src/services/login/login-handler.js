import { validationResult } from 'express-validator'
import { ErrorResponse } from '../../model/response/error-response.js'
import { statusCode } from '../../constants/status-code.js'
import { DB } from '../../constants/user-db.js'
import { User } from '../../model/user.js'
import { LoginPostResponse } from '../../model/response/login-post-response.js'

export function postLogin(req, res) {

    const errors = validationResult(req)

    // check error in request body
    if (!errors.isEmpty()) {
        const errorResponse = new ErrorResponse(errors.array({ onlyFirstError: true }))
        res.status(statusCode.BAD_REQUEST).send(errorResponse)
        return
    }

    const user = new User(req.body.username, req.body.password)

    if (user.isAuthenticated(DB)) {
        const successResponse = new LoginPostResponse("Succefully signed In")
        res.status(statusCode.SUCCESS).send(successResponse)
        return
    }

    const errorResponse = new LoginPostResponse("No user found with this credentials")
    res.status(statusCode.NOT_FOUND).send(errorResponse)
}