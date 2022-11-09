import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box bg='white' w='100%' p={4} color='black' border="1px solid" display="flex" justifyContent="space-evenly">
        <NavLink style={{fontWeight:"bolder"}} to="/">Fitness Mania</NavLink>
        <NavLink style={{fontWeight:"bolder"}} to="/login">Login</NavLink>
</Box>
    </div>
  )
}

export default Navbar