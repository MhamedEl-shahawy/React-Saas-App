import {createContext,useContext} from "react";
import {invoicesData} from "./invoicesData";
import { useLocalStore } from 'mobx-react'

const InvoicesData = createContext();

const InvoicesDataProvider = ({children})=>{
    const invoicesDataWrapper = useLocalStore(invoicesData);
	return (

       <InvoicesData.Provider value={invoicesDataWrapper}>
          {children}
       </InvoicesData.Provider>
		)
}
export const useInvoicesStore = () => useContext(InvoicesData)

export default InvoicesDataProvider;