import styled from "styled-components";

export const HomeContainer = styled.section`
   width:100%;
   height:100%;
   padding:1em 4em;
`;

export const TitleWrapper = styled.div`
 width:100%;
 display:flex;
 justify-content:space-between;
 color:#888;
`;
export const Title = styled.h3`
   color:#000;
   text-transform:capitalize;
`;
export const Wrapper = styled.div`
 width:100%;
 margin-top:2em;
 table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top:2em;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
ion-icon{
   font-size:1.4em;
}
td ion-icon:nth-child(2){
   color:#f00;
}
`
export const LandPage = styled.img`
   width:100%;
   border-radius:5px;
`;
export const Card = styled.div`
   margin-top:2em;
   h4{
   	 padding:5px 0;
   	    text-transform:capitalize;
   }
   p{
   	color:#888;
   }

`;
export const TotalRecieved = styled.div`
   width:100%;
   display:grid;
   grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
   margin-top:1em;
   justify-content:center;
   gap:1em;
   
`;
export const TotalCard = styled.div` 
  display:flex;
  justify-content:space-between;
  background-color:#fff;
  border-radius:4px;
  padding:1em;
  box-shadow:3px 3px 15px -6px #000000;
  h4{
        margin-bottom:15px;
   text-transform:capitalize;
   color:#888;
  }
  div{
   margin-right:1em;
  }
 
`;
export const Pending = styled.h5`
   color:#00f;
   span{
      height: 10px;
  width: 10px;
  background-color: #00f;
  border-radius: 50%;
  display: inline-block;
   }
`;
export const Draft = styled.h5`
  color:orange;
  span{
 height: 10px;
  width: 10px;
  background-color: orange;
  border-radius: 50%;
  display: inline-block; 
  }
`;
export const Num = styled.p`
  font-size:1.6em;
  span{
    color:#888;
  }
`;
export const ProductsViews = styled.div`
  display:flex;
  justify-content:space-between;
  box-shadow:3px 3px 15px -6px #000000;
  background-color:#fff;
  border-radius:4px;
  padding:1em;
  h4{
     color:#999;
     margin-bottom:15px;
       text-transform:capitalize;
  }
`; 
export const WrapperIcon = styled.div`
display:flex;
 margin-left:25px;
  ion-icon{
    color:#2D60FF;
    background-color:rgb(231, 237, 255);
    border-radius:50%;
    padding:15px;
    font-size:3.2em;
  }
`;
export const WrapperIconMessage = styled.div`
  display:flex;
 margin-left:25px;
  ion-icon{
    color:#28DBCC;
    background-color:rgb(220, 250, 248);
    border-radius:50%;
    padding:15px;
    font-size:3.2em;
  }
`;