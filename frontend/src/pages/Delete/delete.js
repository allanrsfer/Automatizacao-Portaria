import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Delete() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const fetchDataByDocument = async (document) => {
    const response = await api.get(`/cadastro/${document}`);
    setFormData(response.data);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const confirm = window.confirm("Tem certeza que deseja excluir esse usuário?");
    if (confirm) {
      await api.delete(`/cadastro/${formData.document}`);
      alert("Usuário excluído com sucesso!");
      navigate.push('/');
    }
  };

  return (
    <Container>
      <form>
        <input
          type="text"
          name="document"
          placeholder="Insira o documento do usuário"
          onChange={(event) => {
            const { value } = event.target;
            fetchDataByDocument(value);
          }}
        />
        <Link id='link' to="/">Voltar ao menu principal</Link >
      </form>
      {formData.name && (
        <div>
          <h3>Informações do usuário</h3>
          <p>Nome: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Documento: {formData.document}</p>
          <p>Bloco/Apartamento: {formData.apartmentBlock}</p>
          <p>Telefone de contato: {formData.phone}</p>
          <select readonly="readonly" name="register">
            <option value="resident">Morador</option>
            <option value="employee">Funcionário</option>
            <option value="guest">Convidado</option>
          </select>
          <button type='button' onClick={handleDelete}>Excluir</button>
        </div>
      )}
    </Container>
  );
}