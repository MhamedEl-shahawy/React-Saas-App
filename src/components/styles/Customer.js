import styled from "styled-components";

export const Info = styled.div`
    margin-left:8px;
    line-height:1;
 
`;
export const Container = styled.div`
   display:inline-flex;
   align-items:center;
`;
export const Img = styled.img`
  border-radius:100%;
  height:45px;
  width:45px;
`;

export const RoutInfo = styled.div`
 margin-top:1em;
 margin-bottom:2em;
`;
export const TableWrapper = styled.div`
  width:100%;
  background-color:#fff;
  border-radius:20px;
 overflow-x:scroll;
  padding-top:1em;
box-shadow: 3px 0px 21px -8px rgba(0,0,0,0.75);
   

  td{ 

  	p{
  		color:#26AF48;
  		border:1px solid #f1f1f1;
        font-size:14px;
        padding:0 0.5em;
        margin-left:4px;
        border-radius:5px;
        display:inline-flex;
        align-items:center;
  	}

  	 & p:nth-child(2){
       color:#E63C3C; 

  	}
  }
 table{
 	 & th:nth-child(6){
          padding-left:10px;
 	 }
 }
 a{
 	  display:inline-flex;
    align-items:center;
    color:#000;
 }
`;
export const Status = styled.span`
  color:${({status})=> status ? "#26AF48":"#E63C3C"};
  font-weight:800;
  background-color:${({status})=> status ? "#D9EEE6":"#F6DADF"};
  padding:5px 10px;
  text-transform:capitalize;
`;
export const TitleContainer = styled.div`
  width:100%;
  display:inline-flex;
  justify-content:space-between;
  align-items:center;
`;
export const BtnAdd = styled.button`
   background-color:#621AFF;
   border:none;
   padding:0.5em 1em;
   border-radius:5px;
   cursor:pointer;
   a{
   	 color:#fff;
   }
`;
export const Entries = styled.div`
   display:inline-flex;
   align-items:center;
   margin-left:1em;
   p{
   	 font-size:1.1em;
   	 margin-right:0.3em;
   	 margin-left:0.3em;
   }
   select{
   	 border:1px solid #f1f1f1;
   }
`;
export const PagesWrapper = styled.div`
 width:100%;
 display:inline-flex;
 align-items:center;
 justify-content:space-between;
 padding:1em;
 a{
  background-color: #fff;
  color: #888;
  display: inline-block;
  padding: 8px 16px;
 }
 & a:nth-child(1){
 	border-top-left-radius: 8px 8px;
 	border-bottom-left-radius: 8px 8px;
border:1px solid #f1f1f1;
border-right:none;

 }
  & a:nth-child(4){
 	border-top-right-radius: 8px 8px;
 	border-bottom-right-radius: 8px 8px;
  border:1px solid #f1f1f1;
border-left:none;
 }
 button{
 	 border-radius:0;
 	 color:#fff;
   border:1px solid #f1f1f1;
 }
 div{

 }
`;