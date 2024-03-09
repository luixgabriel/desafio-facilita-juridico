import { createContext, useState, ReactNode, useEffect } from 'react'
import { Client } from '../types/Client'
import axios from '../services/axios'

interface ClientContext {
  clients: Client[]
  handleRegisterClient: (data: Client) => void
}

interface ClientContextProps {
  children: ReactNode
}

export const ClientContext = createContext({} as ClientContext)

export function ClientProvider({ children }: ClientContextProps) {
  const [clients, setClients] = useState<Client[]>([])

  const getClients = async () => {
    const result = await axios.get('/clients');
    setClients(result.data);
  };

  useEffect(()=>{
    getClients()
  },[])

  const handleRegisterClient = async (newClient: Client) => {
    await axios.post('/clients', newClient);
    console.log('oi')
    getClients(); // Atualiza a lista de clientes após o registro
  };

  return (
    <ClientContext.Provider value={{ clients, handleRegisterClient }}>
      {children}
    </ClientContext.Provider>
  )
}