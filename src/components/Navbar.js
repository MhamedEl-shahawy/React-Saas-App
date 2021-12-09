import {Routes, Route,NavLink } from 'react-router-dom';
import {useState,useEffect} from "react";
import {Head,Nav,Logo,LogoWrapper,Lists,List,Footer} from "./styles/Nav";
const Navbar = ({navToggle}) =>{
  const [clicked,setClicked] = useState(1)
  return (
   <>
     <Head navToggle={navToggle}>
        <Nav>
         <LogoWrapper> 
         <Logo>beatz</Logo>
         </LogoWrapper>
         <Lists clicked={clicked}>
           <List onClick={()=> setClicked(1)}>
             <NavLink to="/" activeClassName="selected">
              <ion-icon name="home-outline"></ion-icon>
               <span>home</span>
               </NavLink>
           </List>
              <List onClick={()=> setClicked(2)}>
           <NavLink to="/company" activeClassName="selected">
              <ion-icon name="business-outline"></ion-icon>
               <span>company</span>
                </NavLink>
           </List>
             <List onClick={()=> setClicked(3)}>
           <NavLink to="/payment" activeClassName="selected">

              <ion-icon name="calculator-outline"></ion-icon>
               <span>payment</span>
                </NavLink>

           </List>
            <List onClick={()=> setClicked(4)}>
            <NavLink to="/invoice" activeClassName="selected">
             <ion-icon name="file-tray-outline"></ion-icon>
               <span>Invoice</span>
            </NavLink>
           </List>
              <List onClick={()=> setClicked(5)}>
             <NavLink to="/analysis" activeClassName="selected">
              <ion-icon name="bar-chart-outline"></ion-icon>
               <span>analysis</span>
              </NavLink>   
             </List>
               <List onClick={()=> setClicked(6)}>
            <NavLink to="/notification" activeClassName="selected">
             <ion-icon name="notifications-outline"></ion-icon>
               <span>notification</span>
              </NavLink>   
           </List>
         </Lists>
        </Nav>
        <Footer>
          <h5>Copyright &copy; 2022,<br/>Play Music Limited.</h5> 
        </Footer>
     </Head>
   </>
 
  	)
};
export default Navbar;