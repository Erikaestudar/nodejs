import http from 'http'
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js"
import { routeHandler } from './middlewares/routeHandler.js'

const server = http.createServer(async (request, response) => {
    await jsonBodyHandler (request, response)
    routeHandler(request, response)
    //return response.end("Método " + req.method)
    //return response.writeHead(500).end("Método " + method)
    //return response.writeHead(200).end("URL " + url)
})

server.listen(3333)