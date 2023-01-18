import React, { useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function Update() {
  const [formData, setFormData] = useState({
    document: "",
    name: "",
    email: "",
    apartmentBlock: "",
    phone: "",
    register: "resident"
  });
  const [document, setDocument] = useState('');

  const handleSubmit = async () => {
    try {
      await api.put(`/cadastro/${formData.document}`, formData);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      if (error.response.status === 409) {
        alert("Erro ao atualizar usuário.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDocumentChange = (event) => {
    setDocument(event.target.value);
  }

  const fetchDataByDocument = async () => {
    const response = await api.get(`/cadastro/${document}`);
    setFormData(response.data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="document"
          placeholder="Documento"
          value={document}
          onChange={handleDocumentChange}
        />
        <button type='button' onClick={fetchDataByDocument}>Buscar</button>
        <br /><br />
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apartmentBlock"
          placeholder="Bloco/Apartamento"
          value={formData.apartmentBlock}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Telefone de Contato"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="register">Tipo de cadastro: </label>
        <select name="register" value={formData.register} onChange={handleChange}>
          <option value="resident">Morador</option>
          <option value="employee">Funcionário</option>
          <option value="guest">Convidado</option>
        </select>
        <button type='submit' onChange={handleSubmit}>Atualizar</button>
      </form>
    </Container>
  );
}