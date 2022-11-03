import express from 'express'
import { router } from './api-routes/routes.js'
import { invalidRouter } from './api-routes/invalid-route.js'
import { PORT } from './constants/config.js'

export const app = express()

app.use(express.json())

app.use('/api/v1', router)
// add new routes here

app.use(invalidRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log("cannot start server")
    }
    else {
        console.log(`server started on ${PORT}`)
    }
})