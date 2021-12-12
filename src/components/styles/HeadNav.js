import styled from "styled-components";

export const HeaderContainer = styled.section`
  position:fixed;
  width:100%;  
  color:#000;
  display:flex;
  align-items:center;
  background-color:#fff;
  margin-bottom:1em;
  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;
  padding:0.5em 1em;
  z-index:999;
  @media (min-width:1000px){
     width:99%;
  }
`;
export const Bar = styled.span`
   color:#fff;
   width:20%;
   display:none;
   justify-content:flex-start;
   padding-left:0.5em;
   cursor:pointer;
   color:#000;
   font-size:2.4em;
     @media (max-width:999px){
       display:flex;
     }
`;
export const LogoWrapper = styled.div`
  background-color:#fff;
  display:flex;
  justify-content:center;
`;
export const Logo = styled.img`
  width:20em;
`;
export const WrapperEnd = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
     @media (max-width:999px){
        width:80%;
     }

`;
export const Profile = styled.div`
   display:flex;
   align-items:center;
   padding:5px;
   margin-right:1em;
      cursor:pointer;
  background-color:transparent;
   text-transform:capitalize;
     img{
    width:33px;
    height:33px;
    border-radius:100%;
  }
  p{
    display:flex;
    align-items:center;
    margin-left:10px;
    span{
      color:#888;
    }
  }
`;
export const Notification = styled.p`
  background-color:transparent;
  position: relative;
      margin-right:1em;
      display:flex;
      align-items:center;
      cursor:pointer;
      span{
        position: absolute;
        top: -5px;
        right: -10px;
        padding:1px 7px;
        text-align:center;
        border-radius: 100%;
        background: #f00;
        color: white;
      }
      ion-icon{
              font-size:25px;
              margin-right:8px;
      }
`;
export const SearchContainer = styled.div`
   margin-left:5em;
   margin-right:1em;

   form{
 display:inline-flex;
   align-items:center;
   width:24em;
   input{
     width:100%;
     border-radius:8px;
     border:1px solid #f1f1f1;
     font-size:1.2em;
     padding:5px;
     border-right:0;
     border-top-right-radius:0;
     border-bottom-right-radius:0;

   }
   button{
     background-color:transparent;
     border:1px solid #f1f1f1;
     font-size:20px;
     padding:0.24em;
   }
   }
  
`;