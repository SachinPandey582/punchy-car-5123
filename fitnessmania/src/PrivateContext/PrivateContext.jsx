import { useContext } from "react"
import { LoginContext } from "../Contexts/LoginContext"
import { Navigate } from "react-router-dom"
const PrivateContext =({children})=>{
const {state} =useContext(LoginContext)
if(!state.AuthStatus ){
    return <Navigate to="/login" />
} 
return children


}

export default PrivateContext