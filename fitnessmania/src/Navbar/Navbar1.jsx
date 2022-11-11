import React from "react";
import { Box } from "@chakra-ui/react";
import { Stack, Image, HStack, VStack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
const Navbar1 = () => {
  return (
    <Box padding="20px">
      
    <Box w="80%" margin="auto" >
      <HStack spacing="32%" >
        <Box style={{fontWeight:"bolder" ,color:"blue" ,fontSize:"25px"}}>myfitnesspal</Box>

        <Box>
          <Box display="flex" gap="2">
            <Box>
              Hi,Sachin_Pandey | <EmailIcon />
            </Box>
            <Box w="20px" bg="red" color="white">
              1
            </Box>
            <Box>
              <Image
                w="30px"
                src="https://cdn.dribbble.com/users/206362/screenshots/14453538/media/cfe80febeed64218b34e18f518ca9ae9.jpg?compress=1&resize=400x300&vertical=top"
                alt="here is the things"
              ></Image>
            </Box>
            <Box w="20px" bg="grey" color="white">
              0
            </Box>
            <Box>Help</Box> <Box>Settings</Box> <Box>Logout </Box>  <Box>Follow us</Box>
            <Box>
              <Image w="20px" marginTop="2px" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="here is something"></Image>
            </Box>
            <Box>
              <Image w="20px" marginTop="2px" src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png" alt="here is something"></Image>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
{/* second navbar is going to start from here  */}
<Box bg="blue" color="white" display='flex' justifyContent="space-evenly" fontSize="20px" 
fontWeight="bold" padding="10px"
 >
<NavLink to='/myhome'> MyHome</NavLink>
<NavLink to='food'>Food</NavLink>
<NavLink to ='/exercise'>Exercise</NavLink>
<NavLink to='reports'>Reports</NavLink>
<NavLink to='/apps'>Apps</NavLink>
<NavLink to='community'>Community</NavLink>
<NavLink to='premium'>Premium</NavLink>

</Box>




    </Box>
      );
};

export default Navbar1;
