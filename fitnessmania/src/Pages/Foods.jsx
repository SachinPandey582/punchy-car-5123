
import axios from "axios"
import {Box, InputGroup} from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { useEffect } from "react"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Switch ,FormControl,FormLabel} from '@chakra-ui/react'
import { useContext } from "react"
import { AdminContext } from "../Contexts/AdminContext/AdminContext"
import { status } from "../Contexts/AdminContext/action"
import { useNavigate, useSearchParams } from "react-router-dom"





const Foods = () => {
  const [skel,setskel]=useState(true)
  const [page,setpage] =useState(1)
  const [data,setdata]=useState([])
    const Navigate=useNavigate()
const fetchData=(page)=>{
  setskel(true)

  const getProData=(page)=>{
    return axios.get(`https://api.github.com/search/users?q=sam+language:assembly&sort=stars&order=desc&page=${page}&per_page=10`,{
      params:{
        _page:1,
        _limit:2
      }
    })
  }



  getProData(page).then((res)=>setdata(res.data.items))
setskel(false)
}
useEffect(()=>{
fetchData(page)
},[page])
console.log(data)
const [value,setvalue] =useState(false)
// console.log(value)





const value1 =useContext(AdminContext)
console.log(value1,"this is the value1")



const handleswitch=()=>{
  console.log(value,"this isbefore")
  setvalue(!value)
  console.log(value,"this si aftrer")
  value1.dispatch(status(!value))
}

const handleRemoveuser=()=>{
if(value1.state.AuthStatus){
  alert("Welcome admin")
}else{
  alert("You are un Authorised" )
}
}
const handleUserDetails=(el)=>{
  if(value1.state.AuthStatus){

    alert("welcome Admin ")
    Navigate(`/users/${el}`)
  }else{
    alert("You are un Authorised  ")
  }
}
if(skel){
     return <h1>.....Loading</h1>
}

  return (
    <div>
      <Box border="1px solid" >
      <FormControl  display='flex' alignItems='center' fontSize="50px"  >
  <FormLabel htmlFor='email-alerts' mb='0' fontSize="50px"  margin="auto">
switch to admin
  </FormLabel>
  <Switch fontSize="50px" size="lg" id='isChecked' onChange={handleswitch} marginRight="330px" />
</FormControl>

      </Box>
   <Box  m="auto" textAlign="center" display="grid" gridTemplateColumns="repeat(4,1fr)" mt={30} border="2px solid">
    
       {
        data.map((el)=>(
<div key={el.id} style={{alignItems:"center"}}>
<Box w="200px" margin="auto" >
<img  src={el.avatar_url} alt="Kuch to hain"/> 

</Box>
<Box border="2px solid" padding="5px" fontSize="25px" >
{el.login}   streak-{Math.floor(Math.random()*100)} Days
  
  </Box><Button onClick={()=>handleUserDetails(el.id)}>UserDetails</Button>
<Button onClick={handleRemoveuser}>Remove user</Button>
</div>
        ))
      }
    
    </Box>   
   

<Button  disabled={page<2} bg="red" fontWeight="bold" color="white" onClick={()=>setpage(page-1)}>Prev</Button>
<Button>{page}</Button>
<Button disabled={page>10} bg="red" fontWeight="bold" color="white" onClick={()=>setpage(page+1)}>Next</Button>
    </div>
  )
}

export default Foods
