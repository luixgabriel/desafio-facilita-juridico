import { useContext } from 'react';
import './ClientTable.css';
import { ClientContext } from '../../context/ClientContext';

// const empresas = [
//   { nome: 'Empresa A', email: 'empresaA@example.com', telefone: '123456789', coordenadasX: 10, coordenadasY: 20 },
//   { nome: 'Empresa B', email: 'empresaB@example.com', telefone: '987654321', coordenadasX: 20, coordenadasY: 30 },
//   // Adicione mais empresas conforme necessário
// ];

const ClientTable = () => {
  const {clients} = useContext(ClientContext)
  
  return (
    <section className='client-section'>
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
    </section>
  );
};

export default ClientTable;
