import { useContext } from "react";
import "./ClientTable.css";
import { ClientContext } from "../../context/ClientContext";
import FastestWay from "../FastestWay/FastestWay";

const ClientTable = () => {
  const { clients } = useContext(ClientContext);

  return (
    <section className="client-section">
      {clients.length <= 0 ? (
        <div className="noClients">
          <h1>Ainda não foi cadastrado nenhum cliente.</h1>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Coordenadas X</th>
              <th>Coordenadas Y</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.telephone}</td>
                <td>{client.coordx}</td>
                <td>{client.coordy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <FastestWay />
    </section>
  );
};

export default ClientTable;
