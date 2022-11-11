import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {Button} from "@chakra-ui/react"
let links=["https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg","https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg","https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png","https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg","https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg","https://i.insider.com/5e820b04671de06758588fb8?width=700","https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg","https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg","https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png","https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg","https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg","https://i.insider.com/5e820b04671de06758588fb8?width=700"]
const CardSlider = () => {
    let [count1,setcount1]=useState(0)
    console.log(count1)
   return (
    <div>
        <Box  border="2px solid" height="400px" display="flex">
        <Box>
            <img style={{width:"400px", height:"400px"}} src={links[count1+1]} alt="good" />
        </Box>
        <Box>
            <img style={{width:"400px", height:"400px"}} src={links[count1+2]} alt="good" />
        </Box><Box>
            <img style={{width:"400px", height:"400px"}} src={links[count1+3]} alt="good" />
        </Box><Box>
            <img style={{width:"400px", height:"400px"}} src={links[count1+4]} alt="good" />
        </Box>
        </Box>
        <Button bg="red" color="white" disabled={count1<1} onClick={()=>setcount1(count1-1)}>Prev</Button>
        <Button bg="red" color="white" disabled={count1>links.length-7} onClick={()=>setcount1(count1+1)}>Next</Button>
    </div>
  )
}

export default CardSlider