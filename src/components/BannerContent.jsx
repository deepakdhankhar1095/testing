import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { useState,useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from "./Navbar";
import RegisterModal from "./registerForm";

import bangloreLogo from "../assets/bangloreLogo.webp";
import karnatakaGovLogo from "../assets/karnatakaGovLogo.webp";
import gnLogo from "../assets/gnLogo.webp";
import logo from "../assets/logo.webp";

import theme from "../theme";
import { useNavigate } from "react-router-dom";
const smallImages = [
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+11.png', alt: "Unbox" },
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+13.png', alt: "UnBox" },
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+14.png', alt: "UnBox" },
]
const largeImages = [
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+Sprint+9.png', alt: "Unbox" },
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+Sprint+8-min.png', alt: "UnBox" },
  { src: 'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+Sprint+7-min.png', alt: "UnBox" },
]
const BannerContent = () => {
  const navigate=useNavigate()

  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images,setImages]=useState([])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(()=>{
 if(isSmallScreen){
  setImages(largeImages)
 }
 else{
  setImages(smallImages)
 }
  },[isSmallScreen])

  // useEffect(() => {
  //   const preloadImages = () => {
  //     const imageArray = Array.from(new Set([...largeImages, ...smallImages]));
  //     imageArray.forEach((image) => {
  //       const img = new Image();
  //       img.src = `${image}?${new Date().getTime()}`;
  //     });
  //   };

  //   preloadImages();
  // }, [largeImages, smallImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % largeImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImage, largeImages]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200, // Adjust as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // Adjust as needed
    pauseOnHover: false, // Ensure that the carousel doesn't pause on hover
    centerMode: true,
    centerPadding: '0',
    width:'100%',
    // prevArrow:false,
    // nextArrow:false,
    arrows: false

  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "rgba(52, 52, 52, 0.45)",
      }}
    >
      <Box>
        <Navbar />
      </Box>

<Slider {...settings}>
        {images.map(({ src }, index) => {
          return <Box
            key={index}
            
            sx={{
              backgroundColor: '#EFA301',
              overflow:'hidden',
              height: { xl: '776px', lg: '776px', md: '625px', xs: '672px' },
              background: {
                // sm: `url(${largeImages[currentImage]}?${new Date().getTime()}) #EFA301 50% / cover no-repeat`,
                xs:`url(${src}) #EFA301 50% / cover no-repeat`,
                sm: `url(${src}) #EFA301 50% / cover no-repeat`,
              },
              '&:hover':{
                cursor:'pointer'
              }
            
            }}
            onClick={()=>navigate('/searchEvent')}
          ></Box>

        })}
       
      </Slider>

      <Stack
        sx={{
          position: "absolute",
          top: {xs:"62px",sm:'92px'},
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: { xs: "469px", sm: "1120px" },
          width: "100%",
        }}
        justifyContent={{ xs: "space-around", lg: "space-between" }}
        direction="row"
        paddingTop={{ xs: "20px", sm: '0px' }}
        alignItems="flex-start"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Satoshi",
              fontSize: { xs: "12px", sm: "18px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "94%",
            }}
          >
            Supported By
          </Typography>

          <Stack direction="row" gap="16px">
            <img
              className="bannerSupportBybanner"
              style={{
                display: "block",
              }}
              src={karnatakaGovLogo}
              alt=""
            />

            <img
              className="bannerSupportBybanner"
              style={{
                display: "block",
              }}
              src={bangloreLogo}
              alt=""
            />
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Satoshi",
              fontSize: { xs: "12px", sm: "18px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "94%",
            }}
          >
            Catalyzed by
          </Typography>

          <Stack direction="row" gap="16px">
            <img
              className="bannerSupportGoNative"
              style={{
                display: "block",
              }}
              src={gnLogo}
              alt=""
            />
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Satoshi",
              fontSize: { xs: "12px", sm: "18px" },
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "94%",
            }}
          >
            Anchored By
          </Typography>

          <Stack direction="row" gap="16px">
            <svg
              className="bannerContentCofettiSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="25"
              viewBox="0 0 125 25"
              fill="none"
            >
              <g clipPath="url(#clip0_210_18054)">
                <path
                  d="M92.2295 4.31787H96.7613C99.7361 4.31787 101.633 6.23938 101.633 9.24843V10.4806C101.633 12.1145 101.038 13.6054 99.7075 14.293C101.266 14.9806 102.001 16.5583 102.001 18.3641V20.0558C102.001 23.0666 100.103 24.9864 97.1296 24.9864H92.2295V4.31787ZM96.7328 13.4352C98.5455 13.4352 99.5931 12.3171 99.5931 10.5113V9.19227C99.5931 7.3865 98.5455 6.26831 96.7328 6.26831H94.2692V13.4352H96.7328ZM97.101 23.0394C98.9138 23.0394 99.9614 21.9212 99.9614 20.1154V18.3386C99.9614 16.332 98.7153 15.3857 97.101 15.3857H94.2692V23.0411H97.101V23.0394Z"
                  fill="white"
                />
                <path
                  d="M104.551 4.31787H106.59V23.0394H113.19V24.9881H104.551V4.31787Z"
                  fill="white"
                />
                <path
                  d="M114.944 4.31787H119.816C122.819 4.31787 124.687 6.23938 124.687 9.24843V12.2013C124.687 14.2369 123.781 15.7856 122.251 16.5583L124.998 24.9864H122.901L120.352 17.0451C120.125 17.103 119.757 17.103 119.559 17.103H116.981V24.9864H114.941V4.31787H114.944ZM119.816 15.1831C121.6 15.1831 122.649 14.065 122.649 12.2303V9.19227C122.649 7.3865 121.602 6.26831 119.816 6.26831H116.984V15.1849H119.816V15.1831Z"
                  fill="white"
                />
                <path
                  d="M43.3713 20.6085C43.5529 20.4247 43.6437 20.183 43.6437 19.9414C43.6437 19.9141 43.6387 19.8852 43.6353 19.858C43.632 19.8256 43.632 19.7933 43.6269 19.761C43.6252 19.749 43.6202 19.7388 43.6168 19.7269C43.5781 19.5618 43.4991 19.4035 43.3713 19.2742L42.7121 18.607L35.9169 11.7294C35.8412 11.6528 35.7975 11.5473 35.7975 11.4384V6.62698C35.7975 6.40062 35.9791 6.21681 36.2027 6.21681H38.8596C38.9689 6.21681 39.0698 6.25936 39.1472 6.33595L42.0462 9.27011C41.6897 8.90079 41.6897 8.30851 42.053 7.94259L42.7121 7.27543L40.4655 5.00162C40.0367 4.56762 39.4667 4.32935 38.8596 4.32935H36.2027C34.95 4.32935 33.9326 5.36073 33.9326 6.62698V11.4384C33.9326 12.0528 34.168 12.6298 34.5968 13.0638L42.0513 20.6085C42.2329 20.7923 42.4717 20.8859 42.7104 20.8859C42.9492 20.8859 43.188 20.794 43.3696 20.6085H43.3713Z"
                  fill="white"
                />
                <path
                  d="M0 16.514V4.32971H2.03975V16.5702C2.03975 18.0321 2.88895 18.9206 4.30652 18.9206C5.72409 18.9206 6.57329 18.0321 6.57329 16.5702V4.32971H8.61305V16.514C8.61305 19.2082 6.91297 20.871 4.3082 20.871C1.70344 20.871 0 19.2082 0 16.514Z"
                  fill="white"
                />
                <path
                  d="M11.3859 8.48591C11.3859 5.79172 13.0574 4.12891 15.6908 4.12891C18.3241 4.12891 19.9956 5.79172 19.9956 8.48591V20.6702H17.9559V8.42804C17.9559 6.995 17.0781 6.10658 15.6891 6.10658C14.3001 6.10658 13.4223 6.995 13.4223 8.42804V20.6702H11.3826V8.48591H11.3859Z"
                  fill="white"
                />
                <path
                  d="M22.772 16.5141V0H24.8117V5.04629C25.4356 4.4438 26.342 4.12894 27.361 4.12894C29.769 4.12894 31.3833 5.61985 31.3833 8.48594V16.5141C31.3833 19.2082 29.6833 20.8711 27.0785 20.8711C24.4737 20.8711 22.7737 19.2082 22.7737 16.5141H22.772ZM29.3436 16.6009V8.42807C29.3436 6.99503 28.4658 6.10661 27.0768 6.10661C25.6878 6.10661 24.81 6.90993 24.81 8.37191V16.5992C24.81 18.0322 25.6592 18.9206 27.0768 18.9206C28.4944 18.9206 29.3436 18.0322 29.3436 16.5992V16.6009Z"
                  fill="white"
                />
                <path
                  d="M56.8474 12.1843L52.8822 4.32812H55.0918L57.8681 10.0909L60.6444 4.32812H62.854L58.8888 12.1843L62.9969 20.6703H60.7588L57.8698 14.3339L54.9809 20.6703H52.7427L56.8508 12.1843H56.8474Z"
                  fill="white"
                />
                <path
                  d="M66.7334 4.32971H64.6936V20.6719H66.7334V4.32971Z"
                  fill="white"
                />
                <path
                  d="M69.5097 8.48591C69.5097 5.79172 71.1812 4.12891 73.8146 4.12891C76.4479 4.12891 78.1194 5.79172 78.1194 8.48591V20.6702H76.0796V8.42804C76.0796 6.995 75.2019 6.10658 73.8129 6.10658C72.4239 6.10658 71.5461 6.995 71.5461 8.42804V20.6702H69.5063V8.48591H69.5097Z"
                  fill="white"
                />
                <path
                  d="M80.8958 23.1363H87.4102V19.8396C86.7864 20.4711 85.88 20.757 84.861 20.757C82.4529 20.757 80.8386 19.2661 80.8386 16.4V8.51484C80.8386 5.82064 82.5387 4.15784 85.1435 4.15784C87.7482 4.15784 89.4483 5.82064 89.4483 8.51484V25H80.8941V23.1363H80.8958ZM87.4102 16.514V8.42804C87.4102 6.99499 86.561 6.10657 85.1435 6.10657C83.7259 6.10657 82.8767 6.99499 82.8767 8.42804V16.4561C82.8767 17.8892 83.7276 18.8065 85.1435 18.8065C86.5593 18.8065 87.4102 17.976 87.4102 16.5123V16.514Z"
                  fill="white"
                />
                <path
                  d="M49.2215 4.32642H46.5646C45.9576 4.32642 45.3875 4.56639 44.9587 4.99869L42.053 7.93967C41.6881 8.30729 41.6881 8.90638 42.053 9.274C42.4162 9.64162 43.0081 9.64162 43.3713 9.274L46.2771 6.33302C46.3528 6.25643 46.4553 6.21388 46.5646 6.21388H49.2215C49.4452 6.21388 49.6268 6.39769 49.6268 6.62405V11.4355C49.6268 11.5427 49.5831 11.6499 49.5074 11.7265L42.7122 18.6041L43.3713 19.2713C43.7346 19.6389 43.7362 20.2363 43.3713 20.6056L50.8258 13.0608C51.2546 12.6268 51.49 12.0499 51.49 11.4355V6.62405C51.49 5.3578 50.471 4.32642 49.2199 4.32642H49.2215Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_210_18054">
                  <rect width="125" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Stack>
        </Box>
      </Stack>

      {/* <Box
        sx={{
          width: { xs: "204px", sm: "291px", md: '250px', lg: '320px', xl: '350px' },
          height: { xs: "204px", sm: "291px", md: '250px', lg: '320px', xl: '350px' },
          borderRadius: "50%",
          position: "absolute",
          top: { xs: "205px", sm: "160px", md: '175px', lg: '200px' },
          left: "50%",
          transform: "translateX(-50%)",
          display:'block',
          "&:hover":{
            cursor:"pointer"
          }
       
          // display: {
          //   xs: !isSmallScreen && currentImage == 1 ? 'none' : 'block',
          //   sm: 'block'
          // },
        }}
        onClick={()=>navigate("/searchEvent")}
      >
        <img
          style={{
            width: "100%",
            borderRadius: "50%",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.30)",
          }}

          src={logo}
        />
      </Box> */}

      {/* <Box
        sx={{
          width: { xs: "257px", sm: "418.66px" },
          height: { xs: "30px", sm: "57.585px" },
          borderRadius: "12px",
          background: "#FDD503",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "516px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#7D0732",
            textAlign: "center",
            fontFamily: "Satoshi",
            fontSize: { xs: "1.375rem", sm: "2.25rem" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          December 1 - 11, 2023
        </Typography>
      </Box> */}
      {/* <Button
        sx={{
          width: { xs: "245px", sm: "330px" },
          height: { xs: "40px", sm: "56px" },
          borderRadius: "12px",
          background: "#7D0732",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: { xs: "570px", sm: "600px" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          "&:hover": { // Override hover state
            background: "#7D0732", // Set the background color to be the same as the regular state
          }
        }}
        onClick={handleOpenModal}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1.5rem" },
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
         
        >
          REGISTER NOW
        </Typography>
      </Button> */}
      {/* <Box
        sx={{
          width: "100%",
          height: { xs: "195px", md: "288px" },
          position: "absolute",
          bottom: "0",
          background:
            "linear-gradient(180deg, rgba(254, 247, 236, 0.00) 0%, #FDF7EC 100%)",
        }}
      ></Box> */}

      <RegisterModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default BannerContent;
