import { useState } from "react";
import ClientTable from "../ClientsTable/ClientsTable";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./ContainerTable.css";

const ContainerTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="main-section">
      <div className="filterFields">
        <div className="createButton">
            <button onClick={handleOpenModal}>Cadastrar nova empresa</button>
        </div>
        <div className="selectFields">
          <label htmlFor="sortBy">Ordenar empresas por:</label>
          <select id="sortBy">
            <option value="">Selecione</option>
            <option value="nome">Nome</option>
            <option value="email">Email</option>
            <option value="telefone">Telefone</option>
          </select>
        </div>
      </div>
      <ClientTable />
      <RegisterModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ContainerTable;
