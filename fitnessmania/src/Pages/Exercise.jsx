import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar1 from '../Navbar/Navbar1'
import { Input,Text } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const Exercise = () => {

  return (
    <div >
        <Navbar1/>
        <Box padding="10px"  bg="blue.100"  marginTop="-20px">
        <Box bg="blue.100" w="80%" display="flex" margin="auto" justifyContent="space-evenly">
        <NavLink>Exercise Diary</NavLink>
        <NavLink>DataBase</NavLink>
        <NavLink>My Excercise</NavLink>
        <NavLink>Settings</NavLink>
        
            </Box>
            </Box>
            <Box margin="auto" w="50%" marginTop="30px">
                <img src="https://tpc.googlesyndication.com/simgad/4841471653946608601" alt="" />
            </Box>
            <Box w="80%"   margin="auto" marginTop="20px">
                <Box display="flex" justifyContent="center">
              <Box fontSize="20px" color="green"> Your Excercise diary for:- </Box>
            <Box border="1px solid" backgroundColor="blue"  color="white"><Input w="400px"
 placeholder="Select Date and Time"
 color="white"
 size="md"
 type="datetime-local"
/></Box>
                </Box>
                 
            </Box>
<div style={{ display:"flex", justifyContent:"space-evenly", marginTop:"10px"  }}>
    <div style={{fontSize:"30px" }}>CardioVescular</div>
    <div style={{display:"flex"}}>
        
    <div style={{backgroundColor:"blue" ,marginRight:"2px",padding:"5px 30px 20px 30px" ,color:"white"}}>minutes</div>
    <div style={{backgroundColor:"blue" ,color:"white",padding:"5px 30px 20px 30px"}}>Calories Burned</div>
    </div>
</div>

<Box bg="rgb(20,234,234)"  w="80%" margin="auto" >
<Box>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Daily Total</Th>
        <Th>Goal</Th>
        <Th isNumeric>Results</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>2</Td>
        <Td>30 </Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>30</Td>
        <Td>20 </Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>11</Td>
        <Td>42 </Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th> 31</Th>
        <Th>22</Th>
        <Th isNumeric>45</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
</Box>

<Box>
    Todays Exercise Note:
    <Input width="50%" margin="auto" border="2px solid red" height="200px">
    </Input>
</Box> 

    </div>
  )
}

export default Exercise