import {createContext,useContext} from "react";
import {clientData} from "./clientsData";
import { useLocalStore } from 'mobx-react'

const ClientData = createContext();

const ClientDataProvider = ({children})=>{
    const clientDataWrapper = useLocalStore(clientData);
	return (

       <ClientData.Provider value={clientDataWrapper}>
          {children}
       </ClientData.Provider>
		)
}
export const useClientStore = () => useContext(ClientData)

export default ClientDataProvider;