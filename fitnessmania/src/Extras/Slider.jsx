import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
const links=[1,2,3,4,5,6,7,8,9]
const Slider = () => {
const Navigate=useNavigate()
const [rend,setrend ] =useState(true)
    const [count,setcount] =useState(0)


    const handleClick=()=>{
        clearInterval(id)

        setrend(false)
        Navigate("/popup")
    
    }
    let id= setInterval(()=>{
    
        rend && setcount((prev)=>{
         if(prev===links.length-1){
             return
         }
         return prev+1
     })
     },2000)
    

console.log(count)
  return (
    
    <div>
        <div>
            <img src={links[count]} alt="here is the thing" />
            {
                rend &&<Button bg="red" onClick={handleClick}>click here</Button>
            }
        </div>
    </div>
  )
}

export default Slider