import { nanoid } from 'nanoid';

const invoices = [
{
  id:"1",
  name:"Mohamed ALi",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$68342",
  status:"paid"
},
{
  id:"2",
  name:"ahmed mahmoud",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$682142",
  status:"unpaid"
},
{
  id:"3",
  name:"emad mohamed",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$1342",
  status:"unpaid"
},
{
  id:"4",
  name:"amjad elmohamedy",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$242",
  status:"paid"
},
{
  id:"5",
  name:"tamer amr",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$3492",
  status:"paid"
},
{
  id:"6",
  name:"tawfeq akram",
  invoiceId:nanoid(),
  date: new Date().toLocaleString(),
  mount:"$2242",
  status:"unpaid"
},
];

export function invoicesData(){
const get_Local_invoices_Data =localStorage.getItem('invoices');
 return{
 data: JSON.parse(get_Local_invoices_Data),
 addNewData(name,date,mount,status){
   const newInvoice = {id:invoices.length+1,name,invoiceId:nanoid(),date,mount:`${"$"+mount}`,status};
   this.data.push(newInvoice);
   localStorage.setItem('invoices', JSON.stringify(this.data));
 },
 removeData(id){
 	this.data = this.data.filter((invoice) => invoice.id !== id);
  localStorage.setItem("invoices",JSON.stringify(this.data));
 },
 }

}