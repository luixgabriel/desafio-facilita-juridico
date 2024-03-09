import pool from "./connection";

async function createTable() {
    const client = await pool.connect();
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS clients (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          telephone VARCHAR(20) NOT NULL,
          coordX INTEGER NOT NULL,
          coordY INTEGER NOT NULL
        )
      `;
      await client.query(query);
      console.log('Tabela criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela:', error);
    } finally {
      client.release();
    }
  }
  
  export default createTable