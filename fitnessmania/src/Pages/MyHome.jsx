import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar1 from '../Navbar/Navbar1'

const MyHome = () => {
  return (
    <div>
<Navbar1/>
<Box  bg="blue.100" marginTop="-20px" fontSize="20px"  display="flex"  justifyContent="space-evenly"   padding="10px">
<Box bg="blue.200" width="150px" >
<NavLink>Home</NavLink>
</Box>
<NavLink>Goals</NavLink>
<NavLink>Check-In</NavLink>
<NavLink>Profile</NavLink>
<NavLink>My Blog</NavLink>
<NavLink>Friends</NavLink>
<NavLink>Settings</NavLink>
</Box>
<Box margin="auto" border="1px solid" w="80%">
    <Box>
    <Image w="100%" src='https://tpc.googlesyndication.com/simgad/7070382364268688307' alt='here is something' ></Image>
    </Box>
    <Box display="flex">
    <Box w="70%" bg="red">
        <Box display="flex" gap={5} justifyContent="space-between" bg="blue" w="100%"  color="white" padding="5px">
<div style={{backgroundColor:"blue",marginLeft:"20px"}}>
Your Daily Summary
</div>
<div style={{backgroundColor:"blue",marginRight:"20px"}}>
4 Daily streaks

</div>
        </Box>
    </Box>
    <Box w="30%" bg="yellow">
        <Image src='https://tpc.googlesyndication.com/simgad/8423553984953850222' alt='here is the things'></Image>
    </Box>
    </Box>

</Box>

    </div>
  )
}

export default MyHome