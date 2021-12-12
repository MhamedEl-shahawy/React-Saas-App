import {useState,useEffect} from "react";
import {HomeContainer,Title,TitleWrapper,Wrapper,P} from "./styles/HomeContent";
import {Lists,List,ListConatiner,Btn,AddInvoice,AddInvoiceWrapper,Form,Input,BtnFormAdd,BtnFormCancle} from "./styles/InvoiceList";
import {Link} from 'react-router-dom';
import {useInvoicesStore} from "../state/InvoicesDataContext";

const InvoiceContent = ({hideNav})=>{
  const invoicesDataWrapper = useInvoicesStore();
  const [date,setDate] = useState(()=> new Date().toLocaleString());
  const [dataInvoices,setDataInvoices] = useState(invoicesDataWrapper["data"]);
  const [clicked,setClicked] = useState(1)
  const [paid, setPaid] = useState(true);
  const [name, setName] = useState('');
  const [mount, setMount] = useState('');
  const [status, setStatus] = useState('');
  const [addNew,setAddNew] = useState(false);


  const handleSubmit = (e)=>{
     e.preventDefault();
     invoicesDataWrapper.addNewData(name,date,mount,status)
     setName("");
     setMount("");
     setStatus("");

  }

 document.title = "Beatz | Invoice";
  return(
  	<>
    <AddInvoiceWrapper showStatus={addNew}>
     <AddInvoice>
       <Form onSubmit={handleSubmit}>
      
          <label for="name">Customer Name</label> 
          <Input type="text" id="name"     value={name} onChange={(e)=> setName(e.target.value)} required/>
          <label for="amount">Amount</label>
          <Input type="number" id="amount" value={mount} onChange={(e)=> setMount(e.target.value)} required/> 
          <label for="paid">Paid</label>
          <Input type="radio" name="radio-choice" id="paid" value="paid" onChange={(e)=> setStatus(e.target.value)} required />
          <label for="unpaid">Unpaid</label>
          <Input type="radio" name="radio-choice" id="unpaid" value="unpaid" onChange={(e)=> setStatus(e.target.value)} required />
          <div>
          <BtnFormAdd>Add New</BtnFormAdd>
          <BtnFormCancle onClick={()=>setAddNew(false)}>Cancle</BtnFormCancle>
          </div>
       </Form>
     </AddInvoice>
     </AddInvoiceWrapper>
     <HomeContainer onClick={()=> hideNav(true)}>
    
       
       <Wrapper>
        <TitleWrapper>
         <Title>
           List Of Invoices 
         </Title>        
       </TitleWrapper>
       <ListConatiner>
          <Lists clicked={clicked}>
            <List onClick={()=> setClicked(1)}>
             <a href="" onClick={(e)=> e.preventDefault()}> All invoice </a>
            </List>
            <List onClick={()=> setClicked(2)}>
              <a href="" onClick={(e)=> e.preventDefault()}>Paid</a>   
            </List>
            <List onClick={()=> setClicked(3)}>
              <a href="" onClick={(e)=> e.preventDefault()}>UnPaid</a>
            </List>
            <List onClick={()=> setClicked(4)}>
             <a href="" onClick={(e)=> e.preventDefault()}>Archived</a>
            </List>
          </Lists> 
          <Btn onClick={()=>setAddNew(true)}>Add new invoice</Btn> 
       </ListConatiner>
 
      <table>
          <tr>
            <th>S No</th>
            <th>Customer Name</th>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {dataInvoices.map((invoice,i)=> (
          <tr>
            <td>{1+i}</td>
            <td>{invoice.name}</td>
            <td>{invoice.invoiceId}</td>
            <td>{invoice.date}</td>
            <td>{invoice.mount}</td>
           <td><P paid={invoice.status}>{invoice.status}</P></td>
            <td><Link to="/invoice/23423" style={{color:"#EC6161"}}>View</Link></td>
          </tr>
         ))}
    
     </table>

      
       </Wrapper>
     </HomeContainer>
     </>
  	)
};

export default InvoiceContent;