import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justifyContent: center;
  margin: 20px 0 0 20px; 

  input {
    height: 30px;
    text-indent: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GREY};
    margin: 0 20px; 
    border-radius: 5px;
  }
  
  input::placeholder {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  select {
    height: 30px;
    border-radius: 5px;
    margin-right: 15px;
  }

  button {
    height: 30px;
    padding: 5px;
    border-radius: 5px;
  }
`