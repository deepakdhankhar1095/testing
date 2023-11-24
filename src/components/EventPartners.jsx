import React from 'react'
import star from "../assets/eventPartner/star.svg"
import image58 from "../assets/eventPartner/image58.webp";
import image56 from "../assets/eventPartner/image56.webp";
import image59 from "../assets/eventPartner/image59.webp";
import image60 from "../assets/eventPartner/image60.webp";
import image61 from "../assets/eventPartner/image61.webp";
import image62 from "../assets/eventPartner/image62.webp";
import image65 from "../assets/eventPartner/image65.webp";
import image66 from "../assets/eventPartner/image66.webp";
import image67 from "../assets/eventPartner/image67.webp";
import image73 from "../assets/eventPartner/image73.webp";
import INTACH2 from "../assets/eventPartner/INTACH2.webp";
import Kempegowda_International_Airport_Bengaluru_Logo from "../assets/eventPartner/Kempegowda_International_Airport_Bengaluru_Logo.webp";
import Maskgroup from "../assets/eventPartner/Maskgroup.webp";
import ParExcellenceLogo_V21 from "../assets/eventPartner/ParExcellenceLogo_V21.webp";
import whitelogo1 from "../assets/eventPartner/whitelogo1.webp";
import YoursTrulyLogogreen from "../assets/eventPartner/YoursTrulyLogogreen.webp";

import { Box, Typography, Stack, useMediaQuery } from "@mui/material"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import theme from '../theme';
const images = [
    { src: image56, alt: "Bangalore International Center" },
    { src: image58, alt: "Bangalore Creative Center" },
    { src: image59, alt: "Forum" },
    { src: image60, alt: "Gully Tours" },
    { src: image61, alt: "home" },
    { src: image62, alt: "iiwc" },
    { src: image65, alt: "home" },
    { src: YoursTrulyLogogreen, alt: "iiwc" },
    { src: image66, alt: "iiwc" },
    { src: image73, alt: "iiwc" },
   
    { src: image67, alt: "home" },
    { src: INTACH2, alt: "iiwc" },
    { src: Kempegowda_International_Airport_Bengaluru_Logo, alt: "home" },
    { src: Maskgroup, alt: "iiwc" },
    { src: ParExcellenceLogo_V21, alt: "home" },
    // { src: whitelogo1, alt: "home" },
];

const EventPartners = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box height={{ xs: '185px', sm: "340px" }} display={"flex"} flexDirection={"column"} alignItems={"center"} paddingY={{ xs: '30px', sm: '100px' }} gap={{ xs: '30px', sm: '50px' }}>
            <Stack display={"flex"} direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={{ xs: 0.38, sm: 1.25 }}>
                {/* <img src={star} alt="" style={{
                    width: { xs: '1.4375rem', sm: '2.8125rem' },
                    height: { xs: '1.4375rem', sm: '2.8125rem' }
                }} /> */}
                <Typography
                    variant="h6"
                    sx={{
                        color: '#231656',
                        textAlign: 'center',
                        fontFamily: 'Satoshi',
                        fontStyle: 'normal',
                        fontSize: { xs: '1.5rem', sm: '3.125rem' },
                        fontWeight: 900,
                        lineHeight: 'normal',
                    }}

                >
                    Event Partners
                </Typography>
            </Stack>
            <Box width="90%">
                {/* {!isSmallScreen ? ( */}
                <Box sx={{ width: "100%", height: "100px", alignItems: "center" }}>
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
                        centerSlidePercentage={isSmallScreen ? 20 : 40}
                        autoPlay={true}
                        interval={1500}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0px",
                            width: "100%"
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
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: "auto",
                                        height: isSmallScreen ? "80px" : "50px",
                                        maxWidth: "100%", // Add this property to maintain aspect ratio
                                        maxHeight: "100%", // Add this property to maintain aspect ratio
                                    }}
                                />

                            </Box>
                        ))}
                    </Carousel>

                </Box>

            </Box>
        </Box>

    )
}

export default EventPartners