import {useState,useEffect} from "react";
import {HeaderContainer,Bar,WrapperEnd,Profile,Notification} from "./styles/HeadPlayer";
import land from "./images/profile.jpeg";

const HeadPlayer = ({toggle}) =>{
const [toggleWrapper,setToggleWrapper] = useState(false);
useEffect(()=>{
    toggle(toggleWrapper);
},[toggleWrapper])
return (
  <>
   <HeaderContainer>
     <Bar onClick={()=> setToggleWrapper(!toggleWrapper)}>
     <ion-icon name="menu-outline"></ion-icon>
   </Bar>
   <WrapperEnd>
   <Notification>
     <ion-icon name="notifications-outline"></ion-icon>
   </Notification>
   <Profile> 
     <img src={land} />
   <p>mohamed elshahawy <span> <ion-icon name="chevron-down-outline"></ion-icon> </span></p>
   </Profile> 
  </WrapperEnd>
   </HeaderContainer>
  </>
);	
}

export default HeadPlayer;