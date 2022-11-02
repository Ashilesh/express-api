import { Router } from "express";
import { ErrorResponse } from "../model/response/error-response.js";

export const invalidRouter = Router()

invalidRouter.use((req, res) => {
    const msg = new ErrorResponse(["Invalid route"])
    res.status(404).send(msg)
})

