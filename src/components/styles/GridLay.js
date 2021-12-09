import styled from "styled-components";

export const GridLay = styled.section`
 position:relative;
  width:100%;
  height:100%;
  display:grid;
  grid-template-columns:repeat(1,1fr 4fr); 
     @media (max-width:999px) {
    display:block;

  }
`;