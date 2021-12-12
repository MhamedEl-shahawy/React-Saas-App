import {useState,useEffect} from "react";
import {HomeContainer,Title,TitleWrapper,Wrapper} from "./styles/HomeContent";
import {Container,Img,Info,RoutInfo,TableWrapper,Status,TitleContainer,BtnAdd,Entries,PagesWrapper} from "./styles/Customer";

import land from "./images/profile.jpeg";

import {Lists,List,ListConatiner,Btn,AddInvoice,AddInvoiceWrapper,Form,Input,BtnFormAdd,BtnFormCancle} from "./styles/InvoiceList";
import {NavLink,Link } from 'react-router-dom';

const Customer = ({hideNav})=>{
 const [statusType,setStatusType] = useState(true);
 const [st2,setSt2] = useState(false);

 document.title = "Beatz | Customer";
  return(
  	<>
     <HomeContainer onClick={()=> hideNav(true)}>
    
       
       <Wrapper>
       <TitleContainer>
       <div>
        <TitleWrapper>
         <Title>
           Customers
         </Title>      
       </TitleWrapper>
         <RoutInfo>
            <h3><Link to="/" style={{color:"#333333"}}>Dashboard</Link> / <span style={{color:"#6C757E"}}>Customers</span></h3>  
         </RoutInfo> 
          </div>
          <BtnAdd><Link to="/addNewcustomer">Add New</Link></BtnAdd>
    </TitleContainer>
     <TableWrapper>
      <Entries>
        <p>show</p>
        <select name="entries">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
        <p>entries</p>
      </Entries>
      <table>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Amount Due</th>
            <th>Registered On</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          
        <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/7045389a1ad301825d39498a83e5fa36.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">alex merio</Link></h5>
                   <span>34535621</span>  
                 </Info>
              </Container>  
            </td>
            <td>alex.me@yahoo.com</td>
            <td>$87978</td>
            <td>30 March 20</td>
          
             <td><Status status={st2}>Inactive</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
     <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/2da722e671accc5ddf48b2fc8e947a3e.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">Mohamed mahmoud</Link></h5>
                   <span>532421</span>  
                 </Info>
              </Container>  
            </td>
            <td>moh.mah@me.com</td>
            <td>$342432</td>
            <td>1 April 20</td>
          
            <td><Status status={st2}>Inactive</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
     <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/fc5318f2076b5a261b6314b038821329.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">emad ali</Link></h5>
                   <span>243234</span>  
                 </Info>
              </Container>  
            </td>
            <td>emad.ali@yahoo.com</td>
            <td>$878</td>
            <td>1 April 20</td>
          
            <td><Status status={statusType}>Active</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
     <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/8e0a86047078854a240d912704dbf1b2.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">mona essam</Link></h5>
                   <span>921736</span>  
                 </Info>
              </Container>  
            </td>
            <td>mon.essam@gmail.com</td>
            <td>$87978</td>
            <td>2 April 20</td>
          
            <td><Status status={statusType}>Active</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
           <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/32b8469a75322a6ba6b15343e65f1072.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">mahmoud akram</Link></h5>
                   <span>2312344</span>  
                 </Info>
              </Container>  
            </td>
            <td>mahmoud.me@yahoo.com</td>
            <td>$8728</td>
            <td>17 April 20</td>
          
            <td><Status status={st2}>inactive</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
           <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/43c206c69d3df004da45b46c80764a00.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">ala ahmed</Link></h5>
                   <span>34535621</span>  
                 </Info>
              </Container>  
            </td>
            <td>ala.ah@me.com</td>
            <td>$8778</td>
            <td>19 April 20</td>
          
            <td><Status status={statusType}>Active</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
           <tr>
            <td>
              <Container>
                <Img src={land}/>
                 <Info>
                   <h5><Link to="/profile/22222">alex merio</Link></h5>
                   <span>34535621</span>  
                 </Info>
              </Container>  
            </td>
            <td>alex.me@yahoo.com</td>
            <td>$87978</td>
            <td>24 April 20</td>
          
            <td><Status status={statusType}>Active</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
           <tr>
            <td>
              <Container>
                <Img src="https://kanakku-react.dreamguystech.com/template/707c420934093ca8d2cea31a37913fb7.jpg"/>
                 <Info>
                   <h5><Link to="/profile/22222">alex merio</Link></h5>
                   <span>34535621</span>  
                 </Info>
              </Container>  
            </td>
            <td>alex.me@yahoo.com</td>
            <td>$87978</td>
            <td>30 April 20</td>
          
            <td><Status status={st2}>inactive</Status></td>
            <td>
            <p><NavLink to="/profile/edit/2313" style={{color:"#26AF48"}}><ion-icon name="pencil-outline" style={{color:"#26AF48"}}></ion-icon> Edit</NavLink></p>
            <p><ion-icon name="trash-outline" style={{color:"#E63C3C"}}></ion-icon> Delete</p>
            </td>
          </tr>
    
     </table>
     <PagesWrapper>
         <p>Showing 1 to 12 of 12 entries</p>
         <div>
         <a>Previous</a>
         <BtnAdd>1</BtnAdd>
         <BtnAdd>2</BtnAdd>

         <a>Next</a>
         </div>
      </PagesWrapper>
    </TableWrapper>

      
       </Wrapper>
     </HomeContainer>
     </>
  	)
};

export default Customer;