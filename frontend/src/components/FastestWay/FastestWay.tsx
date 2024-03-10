import { useContext, useState } from "react";
import FastestModal from "../FastestModal/FastestModal";
import "./FastestWay.css";
import { ClientContext } from "../../context/ClientContext";
const FastestWay = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { fastestWay, findFastestWay } = useContext(ClientContext);

  const handleOpenModal = () => {
    findFastestWay();
    setIsModalOpen(true);
  };

  return (
    <div className="fastest-section">
      <button className="findButton" onClick={handleOpenModal}>
        Encontrar o caminho mais rápido
      </button>
      <FastestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        clients={fastestWay}
      />
    </div>
  );
};

export default FastestWay;
