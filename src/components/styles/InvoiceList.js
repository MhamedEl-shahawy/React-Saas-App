import styled from "styled-components";

export const ListConatiner = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  margin-top:2em;
  justify-content:space-between;
`;
export const Lists = styled.ul`
   display:flex;
   align-items:center;
   ${
  ({clicked}) => clicked ?
 `& li:nth-child(${clicked}){
     a{
      color:#EB5757;
      border-bottom:2px solid #EB5757;
      padding-bottom:5px;
     }
    
  }`:""

  }

`;

export const List = styled.li`
  margin-right:1em;
  a{
  	 color:#000;
  }
`;
export const Btn = styled.button`
  border:none;
  background-color:#EB5757;
  color:#fff;
  padding:7px 13px;
  cursor:pointer;
  &:hover{
  	background-color:transparent;
  	border:1px solid #EB5757;
  	color:#EB5757;
  }

`;
export const AddInvoiceWrapper = styled.div`
   position:relative;
   width:100%;
   display:${({showStatus})=> showStatus ? "block":"none"};
   transition:all 0s ease-in-out;

`;
export const AddInvoice = styled.div`
  position:fixed;
  display:flex;
  align-items:center;
  width:100%;
  height:100vh;
  justify-content:center;
  background-color:rgba(0,0,0,0.7);
  top:0:
  left:0;
  padding:2em;
  overflow:hidden;
   transition:all 0s ease-in-out;
  

`; 
export const Form = styled.form`
   width:40%;
   background-color:#fff;
   padding:2em;
   margin:auto;
   transition:all 0s ease-in-out;

`;
export const Input = styled.input`
   transition:all 0s ease-in-out;

  display:block;
  margin-bottom:1em;

  padding:10px 2px;
  &:not(&[type="radio"]){
  	  width:100%;
  }
  &:invalid {
  border: 1px solid #EB5757;
   }
  &:valid {
  border:1px solid #5DC287;
  }
  &[type="radio"]{
  	 display:inline-block;
  	 margin-right:1em;
  	 background-color:#f00;
  	 margin-left:0.5em;
  }

`;
export const BtnFormAdd = styled.button`
   margin-right:1em;
   border:1px solid #5DC287;
   color:#fff;
   background-color:#5DC287;
   padding:5px 10px;
   cursor:pointer;
   transition:all 0s ease-in-out;

`;
export const BtnFormCancle = styled.button`
   border:1px solid #EB5757;
   color:#fff;
   background-color:#EB5757;
   padding:5px 10px;
   cursor:pointer;
   transition:all 0s ease-in-out;

`;