import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 20px; 

  div {
    display: flex;
    flex-direction: column; 
    margin-top: 30px; 

    p {
      margin: 10px 0 10px 0;
    }
  }

  input {
    height: 30px;
    text-indent: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GREY};
    margin: 0; 
    border-radius: 5px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  select {
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    background-color: transparent !important;
    border: none;
  }

  select[readonly] {
    background: #eee; /*Simular campo inativo - Sugestão @GabrielRodrigues*/
    pointer-events: none;
    touch-action: none;
  }

  button {
    margin-top: 10px;
    weight: 20px;
    padding: 5px;
    border-radius: 5px;
  }

  #link {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin: 0 80px; 
  }
`