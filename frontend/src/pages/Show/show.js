import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './styles';

export function Show() {
  const [formData, setFormData] = useState({});

  const fetchDataByDocument = async (document) => {
    const response = await api.get(`/cadastro/${document}`);
    setFormData(response.data);
  }

  return (
    <Container>
      <form>
        <input
          type="text"
          name="document"
          placeholder="Digite o documento do usuário"
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

        </div>
      )}
    </Container>
  );
}