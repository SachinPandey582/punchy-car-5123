
import axios from "axios"
import {Box} from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { useEffect } from "react"
import { Switch ,FormControl,FormLabel} from '@chakra-ui/react'
import { useContext } from "react"
import { AdminContext } from "../Contexts/AdminContext/AdminContext"
import { status } from "../Contexts/AdminContext/action"
import { useNavigate, useSearchParams } from "react-router-dom"
const getProData=(page)=>{
  return axios.get(`https://api.github.com/search/users?q=sam+language:assembly&sort=stars&order=desc&page=${page}&per_page=10`,{
    params:{
      _page:1,
      _limit:2
    }
  })
}




const Foods = () => {
  const [page,setpage] =useState(1)
  const [data,setdata]=useState([])
  const [searchParams,setSearchParams] =useSearchParams()
  const Navigate=useNavigate()
const fetchData=(page)=>{
  getProData(page).then((res)=>setdata(res.data.items))

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
  alert("true")
}else{
  alert("You are un Authorised for this process study study do be the ias vias why wasting time be ")
}
}
const handleUserDetails=(el)=>{
  if(value1.state.AuthStatus){

    alert("true")
    Navigate(`/users/${el}`)
  }else{
    alert("You are un Authorised for this process study study do be the ias vias why wasting time be ")
  }
}

  return (
    <div>
      <Box fontSize="30px">
      <FormControl  display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0'>
switch to admin
  </FormLabel>
  <Switch  id='isChecked' onChange={handleswitch} />
</FormControl>

      </Box>
      
      {
        data.map((el)=>(
<div key={el.id} style={{alignItems:"center"}}>
<Box w="200px" marginLeft="45%">
<img src={el.avatar_url} alt="Kuch to hain"/> 

</Box>
<Box border="2px solid" padding="5px" fontSize="25px" >
{el.login}   streak-{Math.floor(Math.random()*100)} Days
  
  </Box><Button onClick={()=>handleUserDetails(el.id)}>UserDetails</Button>
<Button onClick={handleRemoveuser}>Remove user</Button>
</div>
        ))
      }

<Button  disabled={page<2} bg="red" fontWeight="bold" color="white" onClick={()=>setpage(page-1)}>Prev</Button>
<Button>{page}</Button>
<Button disabled={page>10} bg="red" fontWeight="bold" color="white" onClick={()=>setpage(page+1)}>Next</Button>
    </div>
  )
}

export default Foods
