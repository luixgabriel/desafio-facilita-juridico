import express, { Request, Response } from 'express'
import { resolve } from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import createTable from './config/tables'
import { clientRoutes } from './routes/client-routes'
import pool from './config/connection'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(clientRoutes);

createTable()

app.get('/', (req: Request, res: Response) => {
  res.send('API Running! :)')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
