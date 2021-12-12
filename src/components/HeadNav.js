import {useState,useEffect} from "react";
import {HeaderContainer,Bar,WrapperEnd,Profile,Notification,LogoWrapper,Logo,SearchContainer} from "./styles/HeadNav";
import logo from "./images/logo.png";
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
       <LogoWrapper> 
         <Logo src={logo} />
        </LogoWrapper>
        <SearchContainer>
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><ion-icon name="search-outline"></ion-icon></button>
          </form>
        </SearchContainer>

   <WrapperEnd>
   <Notification>
     <ion-icon name="notifications-outline"></ion-icon>
     <span>3</span>
   </Notification>
   <Profile> 
     <img src="https://kanakku-react.dreamguystech.com/template/68e8789b17eee457553eb69cef58537b.jpg" />
   <p>mohamed elshahawy <span> <ion-icon name="chevron-down-outline"></ion-icon> </span></p>
   </Profile> 
  </WrapperEnd>
   </HeaderContainer>
  </>
);	
}

export default HeadPlayer;