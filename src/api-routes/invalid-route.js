import { Router } from "express";
import { ErrorResponse } from "../model/response/error-response.js";

export const invalidRouter = Router()

invalidRouter.use((req, res) => {
    const msg = new ErrorResponse([{
        "msg": "Invalid URL",
        "param": req.url,
        "location": "URL",
    }])
    res.status(404).send(msg)
})

