import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarL = () => {
  return (
    <div>
        <Box  style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} bg='white' w='100%' p={4} color='black'  display="flex" justifyContent="space-evenly">
<Box>
<NavLink style={{fontWeight:"bolder"}} to="/">Fitness Mania</NavLink>

</Box>

       <Box>
       <NavLink style={{fontWeight:"bolder"}} to="/login">Login</NavLink>/ 

        <NavLink style={{fontWeight:"bolder"}} to="/signup">SignUp</NavLink>
       </Box>
        
</Box>
    </div>
  )
}

export default NavbarL