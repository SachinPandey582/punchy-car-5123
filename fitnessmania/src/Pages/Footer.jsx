import React from "react";
import { Box } from "@chakra-ui/react";
const Footer = () => {
  return (
    <div>
<Box bg="rgb(246,246,248)" display="flex"  padding="60px"  >

      <Box bg="rgb(246,246,248)" justifyContent="space-evenly" marginRight="240px" marginLeft="90px" color="blue"  w="40%">
    Calorie Counter
    Blog
    Conditions
    Privacy
    Contact
    Api
    Career
    feedback
    Community
    Guideline
      </Box>
    <Box><select> Select
    <option>Select Your language</option>
    <option>hindi </option>
    <option> English</option>
    <option> Canada</option>
    <option> Japanese</option>
    <option> Bengali</option>
    <option>Marathi </option>
    <option> kumaoni</option>
    </select></Box>
</Box>
© 2022 MyFitnessPal, Inc.
    </div>
  );
};

export default Footer;
