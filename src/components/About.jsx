import React from "react";
import Motif from "../assets/Motif.svg";
import flowerSmall from "../assets/flowerSmall.webp";
import flower from "../assets/flower.webp";
import support1 from "../assets/support1.svg";
import { Typography, Stack, Box } from "@mui/material";
const About = () => {
  return (
    <Box paddingTop={{ xs: "20px", sm: "60px" }}>
      <Box
        position="relative"
        width={{ xs: "98%" }}
        height="189px"
        marginTop="200px"
        margin="auto"
      >
        {/* <Box
          sx={{
            position: "absolute",
            height: { xs: "92px", sm: "192px", md: "192px" },
            // overflow: "hidden",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid red",
            background: {
              xs: `url(${Motif}), white 0px -0.793px / 100% 252.517% no-repeat`,
              sm: `url(${flower}), white 0px -1.629px / 100% 252.517% no-repeat`,
              md: `url(${flower}), white 0px -1.629px / 100% 252.517% no-repeat`,
            },
            mixBlendMode: "color-burn",
          }}
          width={{ xs: "210px", sm: "431px", md: "431px" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              borderRadius: "5px",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              color="#231656"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              fontSize={{ xs: "1rem", sm: "2.0625rem" }}
            >
              About Us
            </Typography>
          </Box>
        </Box> */}

        <Box
          sx={{
            position: "absolute",
            height: { xs: "92px", sm: "192px", md: "192px" },
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: {
              xs: `url(${flowerSmall}),0px -0.793px / 100% 252.517% no-repeat`,
              sm: `url(${flower}), 0px -1.629px / 100% 252.517% no-repeat`,
              md: `url(${flower}),  0px -1.629px / 100% 252.517% no-repeat`,
            },
            width: { xs: "210px", sm: "431px", md: "431px" },
          }}
        ></Box>

        {/* <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#231656",
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: { xs: "1rem", sm: "2.0625rem" },
          }}
          variant="h4"
          lineHeight="normal"
        >
          About us
        </Typography> */}
        <Box
          sx={{
            position: "absolute",
            top: "180px",
            width: "100%",
            marginTop: "20px", // Adjust as needed
          }}
        >
          <Stack
            direction={{xs:'column',sm:'row'}}
            gap={{ xs: "0px", sm: "20px" }}
            width={{sm:'100%'}}
            alignItems="center"
            justifyContent="center"
            margin="auto"
            position="absolute"
            bottom={{ xs: "20px", sm: 0 }}
            transform="translate(-50%,-50%)"
          >
            <Box display='flex' justifyContent={"center"}>
              <img src={support1} alt="" />
            </Box>
            <Typography
              variant="h3"
              color="#231656"
              textAlign="center"
              fontFamily="Satoshi"
              fontStyle="normal"
              fontWeight="900"
              lineHeight="normal"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "3.125rem" }}
              paddingX={{xs:'30px'}}
            >
              About Unboxing BLR Habba 2023
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Stack
        spacing={{xs:6,sm:3}}
        width={{ xs: "90%", sm: "80%", md: "70%" }}
        margin="auto"
        alignItems="center"
        margintop="220px"
        paddingTop={{ xs: "30px", sm: "50px" }}
        marginBottom={{ xs: "60px", sm: "60px" }}
      >
        <Typography
          style={{
            color: "#231656",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "153.023%",
          }}
          fontSize={{ xs: "0.875rem", sm: "1.25rem" }}
        >
          Unboxing BLR Habba (Festival) is a celebration of the city’s rich and
          vibrant cultural heritage and dynamism. From art to literature, dance
          to design, food to films, music to theatre, handicrafts to walking
          tours – the city festival brings everyone together and channels its
          creative energies with the vision to make Bengaluru come alive in its
          public and community spaces.
        </Typography>
        <Stack width="100%" margin="auto" alignItems="center" margintop="220px">
          <Typography
            style={{
              color: "#231656",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: "153.023%",
            }}
            fontSize={{ xs: "0.875rem", sm: "1.25rem" }}
          >
            The Unboxing BLR Habba is your gateway to celebrating Namma
            Bengaluru.
          </Typography>
          <Typography
            style={{
              color: "#7D0732",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "153.023%",
              textAlign: "center",
            }}
            fontSize={{ xs: "0.875rem", sm: "1.25rem" }}
          >
            Be there. Celebrate Bengaluru’s Best.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
