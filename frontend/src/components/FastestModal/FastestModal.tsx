import { Client } from "../../types/Client";
import "./FastestModal.css";

interface FastestModalProps {
  isOpen: boolean;
  onClose: () => void;
  clients: Client[];
}

const FastestModal = ({ isOpen, onClose, clients }: FastestModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalFastest" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Clientes mais próximos</h2>
        <ul className="client-list">
          {clients.map((client, index) => (
            <li key={index} className="client-list-item">
              <span>{`${index + 1}º`}</span>
              {client.name}
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default FastestModal;
