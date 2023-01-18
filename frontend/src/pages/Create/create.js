import React, { useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function Create() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post("/cadastro", formData);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (error.response.status === 409) {
        alert("Já existe um usuário cadastrado com esse documento.");
      } else {
        alert("Erro ao cadastrar usuário.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          className='title'
          type="text"
          name="document"
          placeholder="Documento"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="apartmentBlock"
          placeholder="Bloco/Apartamento"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Telefone de Contato"
          onChange={handleChange}
        />
        <label htmlFor="register">Tipo de cadastro: </label>
        <select name="register" onChange={handleChange}>
          <option value="resident">Morador</option>
          <option value="employee">Funcionário</option>
          <option value="guest">Convidado</option>
        </select>
        <button className='btn' type='submit' onChange={handleSubmit}>Cadastrar</button>
      </form>
    </Container>
  );
}