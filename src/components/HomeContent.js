import {useEffect,useState} from "react";
import {HomeContainer,Title,TitleWrapper,TotalRecieved,LandPage,Wrapper,WrapperIconMessage,Card,TotalCard,Num,Pending,Draft,ProductsViews,WrapperIcon} from "./styles/HomeContent";
import land from "./images/landpage.jpg";
const MusicsContent = ()=>{

  return(
  	<>
     <HomeContainer>
       <TitleWrapper>
         <Title>
           Payments 
         </Title>        
       </TitleWrapper>
       <TotalRecieved>
         <TotalCard>
         <div>
           <h4>Total Price</h4>
           <Num><span>$ </span>75,798</Num>
         </div>
         <div>
         <div>
          <Pending> <span> </span> Pending</Pending>
          <p>$1253.00</p>
         </div>
         <div>
         <Draft><span> </span> In drafts</Draft>
         <p>$00.00</p>
         </div>
         </div> 
         </TotalCard>
           <ProductsViews>
            <div>
              <h4>Products Views</h4>
              <Num>810</Num>
           </div>  
           <WrapperIcon>
             <ion-icon name="megaphone-outline"></ion-icon>
           </WrapperIcon>
         </ProductsViews>
           <ProductsViews>
            <div>
              <h4>New Messages</h4>
              <Num>44</Num>
           </div>  
           <WrapperIconMessage>
             <ion-icon name="chatbubbles-outline"></ion-icon>
           </WrapperIconMessage>
         </ProductsViews>
       </TotalRecieved>
       <Wrapper>
        <TitleWrapper>
         <Title>
           List Of Clients 
         </Title>        
       </TitleWrapper>
      <table>
  <tr>
    <th>S No</th>
    <th>Client Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Ahmed Karam</td>
    <td>ahmed.Mendel2@yahoo.com</td>
    <td>+20103756483</td>
    <td><ion-icon name="pencil-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Mohamed Ali</td>
    <td>mohamed@n.com</td>
    <td>+20118363944</td>
    <td><ion-icon name="pencil-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Yoshi Tannamuri</td>
    <td>yoshi@gmail.com</td>
    <td>+20123345239</td>
    <td><ion-icon name="pencil-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon></td>
  </tr>
</table>

      
       </Wrapper>
     </HomeContainer>
     </>
  	)
};

export default MusicsContent;