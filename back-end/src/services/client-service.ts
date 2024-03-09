import pool from "../config/connection";
import { Client } from "../entities/Client";

export class ClientSerice {
    async createClient(client: Client){
      const clientPG = await pool.connect();
      try {
          const query = `
              INSERT INTO clients (name, email, telephone, coordX, coordY)
              VALUES ($1, $2, $3, $4, $5)
              RETURNING *
          `;
          const values = [client.name, client.email, client.telephone, client.coordx, client.coordy];
          const result = await clientPG.query(query, values);
          return result.rows[0];
      } finally {
          clientPG.release();
      }
    }

    async getClients(){
        try {
            const client = await pool.connect();
            const query = 'SELECT * FROM clients';
            const result = await client.query(query);
            client.release();

           return result.rows
          } catch (error) {
            console.error('Erro ao buscar clientes:', error);
          }
    }

    async getClientById(id: string){
        try {
            const client = await pool.connect();
            const query = `SELECT * FROM clients WHERE id = ${id}`;
            const result = await client.query(query);
            client.release();
            return result.rows[0]

          } catch (error) {
            console.error('Erro ao buscar clientes:', error);
          }
    }
}