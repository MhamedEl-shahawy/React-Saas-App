import styled from "styled-components";

export const GridLay = styled.section`
 position:relative;
  width:100%;
  height:100%;
  display:grid;
  padding-top:2em;
  padding-bottom:2em;
  grid-template-columns:repeat(1,1fr 5fr); 
     @media (max-width:999px) {
    display:block;

  }
`;