import styled from "styled-components";

export const Head = styled.header`
   position:relative;
   width:100%;
   height:100vh;
   background-color:#005FFD;
     color:#64A4FE;
     @media (max-width:999px){
       position:absolute;
       top:0;
       left:${({navToggle})=> navToggle ? 0: "-100%"};
       width:50%;
       z-index:999;
       transition:all 0.5 ease-in-out;
     }

`;
export const Nav = styled.nav`
  width:100%;

`;
export const LogoWrapper = styled.div`
  background-color:#005FFD;
  width:100%;
  padding:0.5em;
  display:flex;
  justify-content:center;
`;
export const Logo = styled.h1`
  color:#fff;
  font-size:2rem;
  font-weight:800;
  font-family: 'Permanent Marker', cursive;
`;
export const Lists = styled.ul`

${
  ({clicked}) => clicked ?
 `& li:nth-child(${clicked}){
     background-color:rgba(11, 77, 207,0.7);
     border-top-left-radius:50px;
     border-bottom-left-radius:50px;
     color:#fff;
     a{
      color:#fff;
     }
    
  }`:""

  }
`;
export const List = styled.li`
  text-transform:uppercase;
  display:flex;
  align-items:center;
  a{
        display: flex;
    align-items: center;
  }
  ion-icon{
  	 font-size:2em;
  	 padding:0.5em;
     color:#fff;
  }
  span{
  	 padding-left:0.5em;

  }
`;
export const Footer = styled.div`
  position:absolute;
  width:100%;
  bottom:0;
  display:flex;
  justify-content:center;
  padding:0.6em;
`;