import styled from "styled-components";
export const Head = styled.header`
   position:fixed;
   width:18%;
   height:100vh;
   background-color:#fff;
   border-top-right-radius:25px;
   padding-top:15px;
     color:#000;
     z-index:9999;
      top:15%;
     @media (max-width:999px){
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
export const NavTitle = styled.h4`
  color:#9E9E9E;
  padding-left:15px;
  font-weight:400;
  padding-bottom:15px;
`;
export const Lists = styled.ul`

${
  ({clicked}) => clicked ?
 `& li:nth-child(${clicked}){
     background-color:rgba(118, 56, 255, 0.05);
     border-left:4px solid #621AFF;
     color:#621AFF;
     a{
      color:#621AFF;
     }
     ion-icon{
       color:#621AFF;
     }
    
  }`:""

  }
`;
export const List = styled.li`
  text-transform:uppercase;
  display:flex;
  align-items:center;
  margin-bottom:5px;
  a{
        display: flex;
    align-items: center;
  }
  ion-icon{
  	 font-size:1.2em;
  	 padding:0.5em;
     color:#9E9EA8;
  }
  span{
  	 padding-left:0.5em;

  }
  &:hover{
      background-color:rgba(118, 56, 255, 0.05);
     border-left:3px solid #621AFF;
     color:#621AFF;
     a{
      color:#621AFF;
     }
     ion-icon{
       color:#621AFF;
     }
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