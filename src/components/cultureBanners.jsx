import React from "react";
import yellowBg from "../assets/yellowBg.svg";
import bbmp from "../assets/culture/BBMP.png";
import goNative from "../assets/culture/goNative.png";
import cultureLogo from "../assets/culture/cultureLogo.png";
import karnatakaGovt from "../assets/culture/karnatakaGovt.png";
import karnatakaTourism from "../assets/culture/karnatakaTourism.png";
import { Box, Stack, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import theme from "../theme";
const images = [
  { src: goNative, alt: "Go Native" },
  { src: karnatakaGovt, alt: "Karnataka Government" },
  { src: bbmp, alt: "BBMP" },
  { src: karnatakaTourism, alt: "Karnataka Tourism" },
  { src: cultureLogo, alt: "Culture Logo" },
];
const CultureBanners = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
      sx={{
        background: `url(${yellowBg}) no-repeat center center fixed`,
        backgroundSize: "cover",
        width: "100%",
      }}
      height={{ xs: "115px", sm: "140px", md: "210px" }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          width: "100%",
        }}
      >
        {!isSmallScreen ? (
          <Box sx={{ width: "100%", height: "60px", alignItems: "center" }}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              dynamicHeight={false}
              showArrows={true}
              showIndicators={false}
              emulateTouch={true}
              swipeable={true}
              centerMode={true}
              centerSlidePercentage={25}
              autoPlay={true}
              interval={1500}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px",
              }}
            >
              {images.map((image, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    // margin: '5px',
                    width: "60%",
                    height: "100%",
                    // border:'1px solid white',
                    minHeight: "40px",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      height: "auto",
                      // maxHeight: '60%'
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        ) : (
          <Stack
            spacing={"5.75rem"}
            alignItems={"center"}
            direction="row"
            margin="auto"
            justifyContent={"center"}
            heigth={"300px"}
            width={{ sm: "80%", md: "70%" }}
          >
            {images.map((image, index) => (
              <Box key={index} alignItems={"center"} width="100%">
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "80%",
                    height: "100%",
                    // maxWidth: '100%',
                    // maxHeight: '100%'
                  }}
                />
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};
export default CultureBanners;
