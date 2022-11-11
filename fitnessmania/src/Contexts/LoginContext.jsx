import { useReducer } from "react"
import { createContext } from "react"
import reducer from "./reducer"

export  const  LoginContext =createContext()



const LoginContextProvider=({children})=>{
    const initialState={
        loading:false,
        error:false,
        AuthStatus:false,
        token:null
    }

    const [state,dispatch] =useReducer(reducer,initialState)
    return <LoginContext.Provider value={{state,dispatch}}>{children}</LoginContext.Provider>
}
export default LoginContextProvider;