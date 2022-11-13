import { createContext, useReducer } from "react";
import reducer1 from "./reducer1";

export const AdminContext =createContext()



function AdminContextProvider({children}){
    const initialState1={
        loading1:false,
        error1:false,
        authStatus1:false,
       
    }
    const [state,dispatch] =useReducer(reducer1,initialState1)
    return <AdminContext.Provider value={{state,dispatch}}>{children}</AdminContext.Provider>
}
export default AdminContextProvider