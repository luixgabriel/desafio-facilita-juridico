import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { Client } from "../types/Client";
import axios from "../services/axios";

interface ClientContext {
  clients: Client[];
  setClients: Dispatch<SetStateAction<Client[]>>;
  handleRegisterClient: (data: Client) => void;
  orderClientsByEmail: (clients: Client[]) => Client[];
  orderClientsByName: (clients: Client[]) => Client[];
  orderClientsByTelephone: (clients: Client[]) => Client[];
  fastestWay: Client[];
  findFastestWay: () => void;
}

interface ClientContextProps {
  children: ReactNode;
}

export const ClientContext = createContext({} as ClientContext);

export function ClientProvider({ children }: ClientContextProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [fastestWay, setFastestWay] = useState<Client[]>([]);

  const getClients = async () => {
    const result = await axios.get("/clients");
    setClients(result.data);
  };

  useEffect(() => {
    getClients();
  }, []);

  const handleRegisterClient = async (newClient: Client) => {
    await axios.post("/clients", newClient);
    getClients(); // Atualiza a lista de clientes após o registro
  };

  const orderClientsByEmail = () => {
    return clients.slice().sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      if (a.email > b.email) {
        return 1;
      }
      return 0;
    });
  };

  const orderClientsByName = () => {
    return clients.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  const orderClientsByTelephone = () => {
    return clients.slice().sort((a, b) => {
      if (a.telephone < b.telephone) {
        return -1;
      }
      if (a.telephone > b.telephone) {
        return 1;
      }
      return 0;
    });
  };

  const findFastestWay = async () => {
    const result = await axios.get("/clients/find/fastest-way");
    setFastestWay(result.data);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        handleRegisterClient,
        orderClientsByEmail,
        setClients,
        orderClientsByName,
        orderClientsByTelephone,
        fastestWay,
        findFastestWay,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
