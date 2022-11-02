import express from 'express'
import { router } from './api-routes/routes.js'
import { invalidRouter } from './api-routes/invalid-route.js'

const app = express()


app.use(express.json())

app.use('/api/v1', router)
// add new routes here

app.use(invalidRouter)

app.listen(8080, () => console.log("app started on 8080"))