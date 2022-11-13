import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
const links=["https://apollo-singapore.akamaized.net/v1/files/ex95dgrdwwgq-IN/image;s=272x0","https://apollo-singapore.akamaized.net/v1/files/f22q9r98u7ks-IN/image;s=272x0","https://media.gettyimages.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=gi&k=20&c=-udh0-LUuB1Mr1rF7D4nbuaUOJ_x6JvZCYoLdfOJF3w=","https://thumbs.dreamstime.com/b/gym-24699087.jpg","https://image.shutterstock.com/image-photo/within-gym-modern-fitness-equipment-260nw-1471750145.jpg"]
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
             prev=0
         }
         return prev+1
     })
     },5000)
    

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