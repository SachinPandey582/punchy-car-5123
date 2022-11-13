import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
let links = [
  "https://assets.gqindia.com/photos/62a056817191a461d63f1cfc/master/pass/Ranveer%20Singh.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh2zrIuhwyJ2-hpaPul5w-SbZbELqfY26ZQ&usqp=CAU",
  "https://apollo-singapore.akamaized.net/v1/files/ex95dgrdwwgq-IN/image;s=272x0",
  "https://apollo-singapore.akamaized.net/v1/files/f22q9r98u7ks-IN/image;s=272x0",
  "https://media.gettyimages.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=gi&k=20&c=-udh0-LUuB1Mr1rF7D4nbuaUOJ_x6JvZCYoLdfOJF3w=",
  "https://thumbs.dreamstime.com/b/gym-24699087.jpg",
  "https://image.shutterstock.com/image-photo/within-gym-modern-fitness-equipment-260nw-1471750145.jpg",
];

const CardSlider = () => {
  let [count1, setcount1] = useState(0);
  console.log(count1);
  return (
    <div>
      <Box
        margin="auto"
     
        display="flex"
        width="80%"
        alignnitem="center"
      >
        <Box>
          <img
            style={{ width: "400px", height:"300px", marginLeft: "80%" }}
            src={links[count1 + 1]}
            alt="good"
          />
          <Box bg="red">
            
            
            </Box>
        </Box>
      </Box>
     <Box width="75%"  margin="auto" display="flex" marginTop="-200px"justifyContent="space-between">

     <Button
        bg="red"
        color="white"
        disabled={count1 < 1}
        onClick={() => setcount1(count1 - 1)}
      >
        Prev
      </Button>
      <Button
        bg="red"
        color="white"
        disabled={count1 > links.length - 3}
        onClick={() => setcount1(count1 + 1)}
      >
        Next
      </Button>
     </Box>
    </div>
  );
};

export default CardSlider;
