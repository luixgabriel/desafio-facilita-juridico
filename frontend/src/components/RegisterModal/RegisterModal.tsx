import { useForm } from 'react-hook-form';
import './RegisterModal.css';
import { Client } from '../../types/Client';
import { useContext } from 'react';
import { ClientContext } from '../../context/ClientContext';

interface RegisterModalProps {
    isOpen: boolean
    onClose: ()=> void
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Client>();
  const {handleRegisterClient} = useContext(ClientContext)
  const onSubmit = async(data: Client) => {
    handleRegisterClient(data)
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Cadastro de Nova Empresa</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span className="error">Campo obrigatório</span>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <span className="error">Campo obrigatório</span>}
          </div>
          <div className="input-group">
            <label htmlFor="telephone">Telefone:</label>
            <input type="text" id="telephone" {...register('telephone', { required: true })} />
            {errors.telephone && <span className="error">Campo obrigatório</span>}
          </div>
          <div className="input-group">
            <label htmlFor="coordx">Coordenada X:</label>
            <input type="number" id="coordx" {...register('coordx', { required: true })} />
            {errors.coordx && <span className="error">Campo obrigatório</span>}
          </div>
          <div className="input-group">
            <label htmlFor="coordy">Coordenada Y:</label>
            <input type="number" id="coordy" {...register('coordy', { required: true })} />
            {errors.coordy && <span className="error">Campo obrigatório</span>}
          </div>
          <button className="save-button" type="submit">Salvar</button>
          <button className="close-button" onClick={onClose}>Fechar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
