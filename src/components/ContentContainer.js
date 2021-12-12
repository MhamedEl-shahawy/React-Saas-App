import {useState,useEffect} from "react";
import {Routes, Route } from 'react-router-dom';
import {Container} from "./styles/ContentContainer";
import HomeContent from "./HomeContent";
import InvoiceContent from "./InvoiceContent";
import Analysis from "./Analysis";
import Customers from "./Customers";

const ContentContainer = ({navToggle}) =>{
 const [toggleWrapper,setToggleWrapper] = useState(false);

  useEffect(()=>{
   navToggle(toggleWrapper);
  },[toggleWrapper])
return (
  <>
  <Container widthWrapper={toggleWrapper}>
   <Routes>
   <Route path="/" exact element={<HomeContent  hideNav={(type)=> setToggleWrapper(type)} />} />
   <Route path="/invoice"  element={<InvoiceContent  hideNav={(type)=> setToggleWrapper(type)} />} />
   <Route path="/analysis"  element={<Analysis  hideNav={(type)=> setToggleWrapper(type)} />} />
   <Route path="/customer"  element={<Customers  hideNav={(type)=> setToggleWrapper(type)} />} />


   </Routes>
   </Container>
  </>
);	
}

export default ContentContainer;