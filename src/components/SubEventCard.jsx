/* eslint-disable react/prop-types */
import React from "react";
import SubEventSingleCard from "./SubEventSingleCard";
import { Box, Grid } from "@mui/material";
import img from "../assets/subEventCardImage.svg";
const SubEventCard = ({ data = [] }) => {
  return (
    <Box
      width={{ xs: "100%", sm: "90%", md: "70%" }}
      margin="auto"
      paddingBottom={"100px"}
      display={"grid"}
      gridTemplateColumns={{ xs: "repeat(1,1fr)", sm: "repeat(2,1fr)" }}
    >
      {data?.map((el) => (
        el.thumbnail && (
          <Box key={el.name} padding={{ xs: "10px", sm: "35px" }}>
            <SubEventSingleCard {...el} />
          </Box>
        )
      ))}


    </Box>
  );
};

export default SubEventCard;
