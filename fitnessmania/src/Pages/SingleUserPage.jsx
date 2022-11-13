import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Box,Button} from "@chakra-ui/react"
import { useState } from 'react'
const SingleUserPage = () => {
  const navigate=useNavigate()
  let [auth,setauth]=useState(false)
    let params=useParams()
    console.log(params)
    const handleDelete=()=>{
      setauth(!auth)
navigate("/users")
    }
if(auth){
  alert("the user has been deleted for good")
  return 
}
  return (
    <div style={{width:"50%",padding:"50px" ,margin:"auto",marginTop:"60px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Box>
      <img style={{margin:"auto"}} src="https://avatars.githubusercontent.com/u/62508848?v=4" alt="change" />
      </Box>
      <Box fontSize="30px">SamuelFormigheri</Box>
      <Box>date of joining:-20 aug 2021</Box>
      <Box>fee submit till oct 2021</Box>
      <Box>Calories burnt till now :12342 </Box>
      <Box>weight gain :30kg</Box>
      <Box>Maritial Status:unmarried</Box>
      <Box>Age:25</Box>
      <Button onClick={handleDelete} bg="red" color="white">Delete user</Button>
     

    </div>
  )
}

export default SingleUserPage