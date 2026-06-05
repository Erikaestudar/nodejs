import { Router } from "express"
import { myMiddleware } from "../middlewares/myMiddleware"

const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
    //const { id, user } = request.params

    const { page, limit } = request.query

     response.send(`Página ${ page } de ${ limit }`)
})

productsRoutes.post("/", myMiddleware, (request, response) => {
    const { name, price } = request.body

    response.status(201).json({ name, price, user_id: request.user_id})
})

export { productsRoutes }