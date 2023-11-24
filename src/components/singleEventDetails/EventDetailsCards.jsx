/* eslint-disable react/prop-types */
import React from "react";
import SingleEventDetailsCard from "./SingleEventDetailsCard";
import { Box, Typography } from "@mui/material";
const EventDetailsCards = ({ data = [] }) => {
  return (
    <Box
      width={{ xs: "100%", sm: "90%", md: "80%",lg:'80%',}}
      margin="auto"
      marginTop={"40px"}
      paddingBottom={"100px"}
      display={"grid"}
      gridTemplateColumns={{  xxs:"repeat(1,1fr)", xs: "repeat(1,1fr)", sm: "repeat(1,1fr)",md:"repeat(2,1fr)" }}
    >
      {data?.map((el) => (
     
          <Box key={el.id} padding={'10px'}>
            <SingleEventDetailsCard {...el} />
          </Box>
        
      ))}
    </Box>
  );
};

export default EventDetailsCards;
