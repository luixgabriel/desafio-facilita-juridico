import { useContext, useState } from "react";
import ClientTable from "../ClientsTable/ClientsTable";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./ContainerTable.css";
import { ClientContext } from "../../context/ClientContext";

const ContainerTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    orderClientsByEmail,
    setClients,
    clients,
    orderClientsByName,
    orderClientsByTelephone,
  } = useContext(ClientContext);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value;
    if (sortBy === "email") {
      const orderClients = orderClientsByEmail(clients);
      setClients(orderClients); // Chame a função para ordenar por email aqui
    }
    if (sortBy === "name") {
      const orderClients = orderClientsByName(clients);
      setClients(orderClients); // Chame a função para ordenar por email aqui
    }
    if (sortBy === "telephone") {
      const orderClients = orderClientsByTelephone(clients);
      setClients(orderClients); // Chame a função para ordenar por email aqui
    }
  };

  return (
    <section className="main-section">
      <div className="filterFields">
        <div className="createButton">
          <button onClick={handleOpenModal}>Cadastrar novo cliente</button>
        </div>
        <div className="selectFields">
          <label htmlFor="sortBy">Ordenar empresas por:</label>
          <select id="sortBy" onChange={handleSortByChange}>
            <option value="">Selecione</option>
            <option value="name">Nome</option>
            <option value="email">Email</option>
            <option value="telephone">Telefone</option>
          </select>
        </div>
      </div>
      <ClientTable />
      <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ContainerTable;
