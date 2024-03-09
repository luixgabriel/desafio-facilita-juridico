import { Request, Response, Router } from "express";
import pool from "../config/connection";
import { ClientController } from "../controllers/client-controller";
import { ClientSerice } from "../services/client-service";
import { calcRoute } from "../utils/findFatestWay";
import { Client } from "../entities/Client";

const clientRoutes = Router();

clientRoutes.post("/clients", async(request: Request, response: Response) => {
    console.log(request.body)
    const clientService = new ClientSerice()
    const clientController = new ClientController(clientService)
    const { data, statusCode } = await clientController.createClient(request.body)
    response.status(statusCode as number).json(data)
});

clientRoutes.get("/clients", async(request: Request, response: Response) =>{
    const clientService = new ClientSerice()
    const clientController = new ClientController(clientService)
    const { data, statusCode } = await clientController.getClients()
    console.log(data)
    response.status(statusCode as number).json(data)
})

clientRoutes.get("/clients/:id", async(request: Request, response: Response) =>{
    const clientService = new ClientSerice()
    const clientController = new ClientController(clientService)
    const { data, statusCode } = await clientController.getClientById(request.params.id)
    response.status(statusCode as number).json(data)
})

clientRoutes.get("/clients/find/fastest-way", async(request: Request, response: Response)=>{
    const clientService = new ClientSerice()
    const clientController = new ClientController(clientService)
    const { data } = await clientController.getClients()
    const fatestRoute = calcRoute(data as Client[])
    response.status(200).json(fatestRoute)
})

export { clientRoutes };
