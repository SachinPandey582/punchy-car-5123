import { Input, Box, Image ,Button} from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar1 from '../Navbar/Navbar1'
import Footer from './Footer'

const MyHome = () => {
  const Navigate=useNavigate()
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

<Box> <Button onClick={()=>Navigate("/users")}>Check all the users</Button></Box>

<Box margin="auto" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} p="30px" w="80%">
    <Box mb={30}>
    <Image w="100%" src='https://tpc.googlesyndication.com/simgad/7070382364268688307' alt='here is something' ></Image>
    </Box>
    <Box display="flex" >
    <Box w="70%" bg="red" mr={20}>
        <Box display="flex" gap={5} justifyContent="space-between" bg="blue" w="100%"  color="white" padding="5px">
<div style={{backgroundColor:"blue",marginLeft:"20px"}}>
Your Daily Summary
</div>
<div style={{backgroundColor:"blue",marginRight:"20px"}}>
4 Daily streaks

</div>

        </Box>
        <Box  display="flex" >
        <Box bg="grey"   w="30%">
  <Box  margin="10px" padding=" 40px 20px" bg="grey" >
    No Photo
    <br />
    provided

    <br />
    <Box  color="blue" > upload Photo</Box>
  </Box>
  </Box>
  <Box border="1px solid" w="70%">
  Calories remaining Change
  <Box display="flex" justifyContent="space-evenly">
  <Box fontSize="40px" color="green">
2160
  </Box>
  <Box marginTop="10px"><Button>Add Exercise</Button></Box>
  <Box  marginTop="10px"><Button>Add Food </Button></Box>

  </Box>
  <Box fontSize="30px" display="flex" justifyContent="space-evenly">
  <Box>2160</Box>
  <Box>0</Box>
  <Box>-</Box>
  <Box>0</Box>
  <Box>=</Box>
  <Box>0</Box>
  </Box>

  <Box fontSize="30px" display="flex" justifyContent="space-evenly">
  <Box>Goal</Box>
  <Box>food</Box>
  <Box>-</Box>
  <Box>Exercise</Box>
  <Box>=</Box>
  <Box>net</Box>
  </Box>

  </Box>
  
  </Box>
  <Box >
<Image src='https://thumbs.dreamstime.com/b/muscular-athletic-bodybuilder-fitness-model-posing-exercis-weights-exercises-gym-64856941.jpg'alt='there si the thing'></Image>
</Box>
    </Box>
    <Box w="30%">
        <Image src='https://tpc.googlesyndication.com/simgad/8423553984953850222' alt='here is the things'></Image>
    </Box>

    </Box>

</Box>

    </div>
  )
}

export default MyHome