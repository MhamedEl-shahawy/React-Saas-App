import {useState} from "react";
import {useObserver} from "mobx-react";
import {Link} from "react-router-dom";
import {HomeContainer,Title,TitleWrapper,TotalRecieved,LandPage,Wrapper,WrapperIconMessage,Card,TotalCard,Num,Pending,Draft,ProductsViews,WrapperIcon} from "./styles/HomeContent";
import {useClientStore} from "../state/ClientDataContext";
const HomeContent = ({hideNav})=>{
 const clientDataWrapper = useClientStore();
 document.title = "xFatora | Dashboard";
  return useObserver( ()=>(
  	<>
     <HomeContainer onClick={()=> hideNav(true)}>
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
 {clientDataWrapper.data.map((clientInfo)=>(
  <tr>
    <td>{clientInfo.id}</td>
    <td>{clientInfo.name}</td>
    <td>{clientInfo.email}</td>
    <td>{clientInfo.phone}</td>
    <td><Link to="/editClint/88897"><ion-icon name="pencil-outline"></ion-icon></Link> <ion-icon name="trash-outline" onClick={()=>   clientDataWrapper.removeData(clientInfo.id)}></ion-icon></td>
  </tr>
  ))}
</table>

      
       </Wrapper>
     </HomeContainer>
     </>
  	))
};

export default HomeContent;