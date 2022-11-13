import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext'

const Navbar = () => {
  const [login,setlogin] =useState(false)
// const {state,dispatch} =useContext(LoginContext)
const {state,dispatch} =useContext(LoginContext)
useEffect(()=>{
  if(state.AuthStatus){
    setlogin(!login)
    } 
},[])
  return (
    <div >
        <Box style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} bg='white' w='100%' p={4} color='black' border="1px solid" display="flex" justifyContent="space-evenly">
        <NavLink style={{fontWeight:"bolder" ,color:"blue" ,fontSize:"20px"}} to="/">Fitness Mania</NavLink>
       {login ? <NavLink style={{fontWeight:"bolder" ,fontSize:"20px"}} to="/login">Sachin_pandey</NavLink>
  : <NavLink style={{fontWeight:"bolder" ,fontSize:"25px"}} to="/login">Login</NavLink>
    }

        
</Box>
    </div>
  )
}

export default Navbar