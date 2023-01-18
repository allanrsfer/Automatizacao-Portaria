import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Index() {
  return (
    <Container>
      <h1>Menu Principal</h1>
      <Link id='link' to="/cadastro">Cadastrar usuário</Link>
      <Link id='link' to="/atualizar">Atualizar usuário</Link>
      <Link id='link' to="/mostrar">Ver informações do usuário</Link>
      <Link id='link' to="/deletar">Excluir usuário</Link>
    </Container>
  );
}