import { Client } from "../entities/Client";
import { ClientSerice } from "../services/client-service";

class ClientController {
    constructor(private clientService: ClientSerice) {}
  
    async createClient(data: Client) {
      try {
        const client = await this.clientService.createClient(data)
        return {
          statusCode: 201,
          data: client
        }
      } catch (error) {
        return {
          statusCode: 500,
          data: 'Erro ao criar cliente.'
        }
      }
  
    }

    async getClients(){
      try {
        const clients = await this.clientService.getClients()
        return {
          statusCode: 200,
          data: clients
        }
      } catch (error) {
        console.log(error)
        return {
          statusCode: 500,
          data: 'Erro ao buscar clientes.'
        }
      }
    }

    async getClientById(id: string){
      try {
        const client = await this.clientService.getClientById(id)
        return {
          statusCode: 200,
          data: client
        }
      } catch (error) {
        return {
          statusCode: 500,
          data: 'Erro ao buscar cliente.'
        }
      }
    }
  }
  
  export { ClientController };