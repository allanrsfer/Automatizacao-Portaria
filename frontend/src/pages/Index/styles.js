import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 20px; 

  h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  #link {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GREY};
    margin: 0 80px; 
  }
`