import styled from "styled-components";

export const HeaderContainer = styled.section`
  width:100%;
  color:#000;
  display:flex;
  align-items:center;
  padding-top:1em;
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
  background-color:#fff;
   text-transform:capitalize;
   border:1px solid #e9e0e0;
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
     border:1px solid #e9e0e0;
  background-color:#fff;

      margin-right:1em;
      display:flex;
      align-items:center;
      font-size:30px;
      padding:5px;
      cursor:pointer;
`;