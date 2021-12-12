import {Routes, Route,NavLink } from 'react-router-dom';
import {useState,useEffect} from "react";
import {Head,Nav,Lists,List,NavTitle} from "./styles/Nav";
const Navbar = ({navToggle}) =>{
  const [clicked,setClicked] = useState(1)
  return (
   <>
     <Head navToggle={navToggle}>
       <NavTitle>
          Main
       </NavTitle>
        <Nav>
         <Lists clicked={clicked}>
           <List onClick={()=> setClicked(1)}>
             <NavLink to="/" activeClassName="selected">
              <ion-icon name="home-outline"></ion-icon>
               <span>dashboard</span>
               </NavLink>
           </List>
              <List onClick={()=> setClicked(2)}>
           <NavLink to="/customer" activeClassName="selected">
             <ion-icon name="people-outline"></ion-icon>
               <span>customer</span>
                </NavLink>
           </List>
             <List onClick={()=> setClicked(3)}>
           <NavLink to="/estimate" activeClassName="selected">

              <ion-icon name="albums-outline"></ion-icon>
               <span>estimates</span>
                </NavLink>

           </List>
            <List onClick={()=> setClicked(4)}>
            <NavLink to="/invoice" activeClassName="selected">
             <ion-icon name="file-tray-outline"></ion-icon>
               <span>Invoice</span>
            </NavLink>
           </List>
              <List onClick={()=> setClicked(5)}>
             <NavLink to="/payment" activeClassName="selected">
              <ion-icon name="cash-outline"></ion-icon>
               <span>payments</span>
              </NavLink>   
             </List>
               <List onClick={()=> setClicked(6)}>
            <NavLink to="/expenses" activeClassName="selected">
            <ion-icon name="dice-outline"></ion-icon>
               <span>expenses</span>
              </NavLink>   
           </List>
             <List onClick={()=> setClicked(7)}>
            <NavLink to="/reports" activeClassName="selected">
             <ion-icon name="bar-chart-outline"></ion-icon>
               <span>reports</span>
              </NavLink>   
           </List>
               <List onClick={()=> setClicked(8)}>
            <NavLink to="/setting" activeClassName="selected">
             <ion-icon name="settings-outline"></ion-icon>
               <span>setting</span>
              </NavLink>   
           </List>
           
         </Lists>
        </Nav>
   
     </Head>
   </>
 
  	)
};
export default Navbar;