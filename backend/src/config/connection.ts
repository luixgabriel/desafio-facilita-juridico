import { Pool } from 'pg'

const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'challenge',
    password: 'admin',
    port: 5432, // Porta padrão do PostgreSQL
  });

  export default pool