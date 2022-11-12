import { Box, Input,Button,CircularProgress } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext'
import NavbarL from '../Navbar/NavbarL'
import LCss from "../Pages/Login.module.css"
import axios from "axios"
import {error,status,loading,token} from "../Contexts/action"
const data ={
  email:"",
  password:""
}
//this is the data which i will get while i go for the data check 

const Login = () => {
const {state,dispatch} =useContext(LoginContext)
const [text,setText] =useState(data)
const Navigate=useNavigate() 


const handleChange =(e)=>{
const {name,value} =e.target;
setText({...text,[name]:value})

}
const {email,password} =text

const handleSubmit=()=>{
  dispatch(loading(true))
  axios.post(`https://reqres.in/api/login`,text).then((res)=>{
    dispatch(status(true))
    dispatch(loading(false))
    dispatch(error(false))
    dispatch(token(res.data.token))
   Navigate("/  ")
  }
  ,(err)=>{
    dispatch(loading(false))
    dispatch(error(true))
  })
  
  if(state.AuthStatus){
    return <Navigate to="/form"/>
  }
  if(state.error){
    alert("something is off plz check the credential")
  }


}
  return (
    <div>
      <NavbarL/> 
<div  className={LCss.Container}>
<Box   margin='auto'  padding="10px" >
<Box fontSize="30px" fontWeight="bold">
Member Login

  </Box>        <br />
        <br />
      <Input w="100%" name="email" onChange={handleChange} value={email} placeholder='Email Address'></Input>
      <br />
      <br />
      <Input w="100%" name='password' onChange={handleChange} value={password} type="password" placeholder='Password'></Input>
      <br />
      <br />
      forget Password ?
      <br />
      <br />
      <Button onClick={handleSubmit} bg="blue" color="white" w="100%">{(state.loading  ? <CircularProgress bg="blue" isIndeterminate color='black' /> : "LogIn")}</Button>
      <br />
      or
      <br />
      <Button w="100%"  bg="blue" color="white">Continue with Facebook</Button>
      </Box>

</div>

      
      
      </div>
  )
}

export default Login