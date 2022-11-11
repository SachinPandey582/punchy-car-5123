import { Box ,Center,Grid,GridItem} from "@chakra-ui/react";
import React from "react";
import { Navigate, NavLink,Link, useNavigate, resolvePath } from "react-router-dom";
import HStyle from "../Pages/Home.module.css";
import Navbar from "../Navbar/Navbar"

const Home = () => {

const Navigate=useNavigate()
const handleclick=()=>{
 Navigate("/popup")
}

  return (
    <div>

<Navbar/>
    <div className={HStyle.Container}>
      <div>
        <div className={HStyle.Heading}>
          Good health start with what you eat.
        </div>
        <div className={HStyle.heading1}>
          Want to eat more mindfully? Track meals, learn about your habits, and
          reach your goals with MyFitnessPal.
        </div>
        <div>
          <button onClick={handleclick} className={HStyle.btn1}>START FOR FREE</button>
        </div>
      </div>

      <div>
        <img
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
          alt="thanks"
        />
      </div>
      
    </div>
{/* first part is complete here */}
<div>
       <div  className={HStyle.Container}>
       <div>
        <img style={{width:"80%"}}
          src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
          alt="thanks"
        />
        </div>
        <div style={{width:'60%'}}>
        <div className={HStyle.Heading}>
          Log from over 40millions food.
        </div>
        <div className={HStyle.heading1}>
        See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.
        </div>
        </div>
      </div>
       </div>

       {/* second finish */}
       <div className={HStyle.box}>
<div className={HStyle.Heading}>The tools for your goals</div>
<div className={HStyle.heading2}>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there</div>
       </div>
      
<div>

       <Box  w="80%" margin='auto' border="2px solid">
<Grid gridTemplateColumns="repeat(3,1fr)" gap={2} border="5px solid green">



<GridItem border="2px solid red" >
    <Box border="2px solid red"  >
        <img style={{margin:"auto"}} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="first" />
    </Box>
    <Box fontWeight="bold" fontSize="23px">
        Learn Track Improve
    </Box>
    <Box w="90%">
    Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.
    </Box>
</GridItem>



<GridItem>
    <Box >
        <img style={{margin:"auto"}} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="first" />
    </Box>
    <Box fontWeight="bold" fontSize="23px">
        Learn Track Improve
    </Box>
    <Box w="90%">
    Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.
    </Box>
</GridItem>


<GridItem margin="auto">
    <Box >
        <img style={{margin:"auto"}} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="first" />
    </Box>
    <Box fontWeight="bold" fontSize="23px">
        Learn Track Improve
    </Box>
    <Box w="90%">
    Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.
    </Box>
</GridItem>



</Grid>
</Box>

</div>

       {/*here this finishes  */}
       <div>
       <div className={HStyle.box}>
<div className={HStyle.Heading}>Victory Stories</div>
<div className={HStyle.heading2}>Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.</div>
       </div>
       </div>


 </div>

  );
};

export default Home;
