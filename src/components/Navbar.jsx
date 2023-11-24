import { Box, Button, Stack, Typography } from "@mui/material";
import LogoUpdate from "./svgcomponents/LogoUpdate";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg";
import whatsapp from "../assets/footer/whatsapp.svg";
import linkedIn from '../assets/footer/linkedin.svg';

import Redfacebook from "../assets/Navbar/facebook.svg";
import Redinstagram from "../assets/Navbar/instagram.svg";
import Redtwitter from "../assets/Navbar/twitter.svg";
import Redwhatsapp from "../assets/Navbar/whatsapp.svg";
import RedlinkedIn from '../assets/Navbar/linkedin.svg';


import UBL from "../assets/footer/unBox.svg"
import { useEffect, useState } from "react";
import RegisterModal from "./registerForm";
import { Link, useNavigate } from "react-router-dom";
import whiteSearchIcon from "../assets/searchEvent/whiteSearchIcon.svg"
const socialMediaPlatforms = [
  {
    name: "Instagram",
    image: instagram,
    destination:
      "https://www.instagram.com/unboxingblrhabba/",
  },
  {
    name: "Twitter",
    image: twitter,
    destination: "https://twitter.com/UnboxingBlr",
  },
  {
    name: "Facebook",
    image: facebook,
    destination:
      "https://m.facebook.com/profile.php/?id=100083511306462&name=xhp_nt__fb__action__open_user",
  },
  {
    name: "LinkedIn",
    image: linkedIn,
    destination:
      "https://www.linkedin.com/company/unboxingblr/"
  },
  {
    name: "Whatsapp",
    image: whatsapp,
    destination: 'http://wa.me/918217560854'
  },

];
const socialMediaPlatforms1 = [
  {
    name: "Instagram",
    image: Redinstagram,
    destination:
      "https://www.instagram.com/unboxingblrhabba/",
  },
  {
    name: "Twitter",
    image: Redtwitter,
    destination: "https://twitter.com/UnboxingBlr",
  },
  {
    name: "Facebook",
    image: Redfacebook,
    destination:
      "https://m.facebook.com/profile.php/?id=100083511306462&name=xhp_nt__fb__action__open_user",
  },
  {
    name: "LinkedIn",
    image: RedlinkedIn,
    destination:
      "https://www.linkedin.com/company/unboxingblr/"
  },
  {
    name: "Whatsapp",
    image: Redwhatsapp,
    destination: 'http://wa.me/918217560854'
  },

];

const Navbar = ({pathName}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageData, setImageData] = useState(socialMediaPlatforms);
  const navigate = useNavigate();

  useEffect(()=>{
    if(pathName==="SearchEvent"){
      setImageData(socialMediaPlatforms1)
    }
  },[])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSearchEvents = () => {
    navigate(`/searchEvent`)
  };

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setIsAtTop(atTop);
    };
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        background: isAtTop ?  'transparent' : pathName === 'SearchEvent'?'#fdf7ec':"#EFA301",
        // backgroundColor:,
         boxShadow: 'none' ,
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: '90%', sm: "75%", md: '75%', lg: '1120px' },
          justifyContent: 'space-between',
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "47px", sm: '47px', md: '220px' },
            height: "47px",
          }}
        >
          <Link to="/">
            <img
              style={{
                width: "47px",
              }}
              src={UBL}
              alt=""
            />
          </Link>
        </Box>
        {/* <Stack direction='row' width={{md:'65%',lg:'62%'}} justifyContent={"space-between"}> */}
        <Stack
          direction="row"
          gap="22.71px"
          alignItems="center"
          display={{ xs: 'none', sm: 'none', md: 'inline-flex' }}
        >
          {imageData.map((platform, index) =>
            platform.destination ? (
              <a
                href={platform.destination}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  style={{
                    display: "flex",
                    width: "28.6px",
                    height: "28.6px",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                />
              </a>
            ) : (
              <img
                key={index}
                src={platform.image}
                alt={platform.name}
                style={{
                  display: "flex",
                  width: "28.6px",
                  height: "28.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              />
            )
          )}
        </Stack>
        
        <Box sx={{display:"flex",flexDirection:"row",gap:'10px'}}>
        {/* for now */}
        <Box
          sx={{
            width: "50px",
            height: "36px",
            borderRadius: "8px",
            display: pathName === 'SearchEvent'?'none':"flex",
            justifyContent:'center',
            alignItems:'center',
            "&:hover": {
              cursor: 'pointer',
            },
           
          }}
          onClick={()=>handleSearchEvents()}
        >
          <img src={whiteSearchIcon} alt="" />
          </Box>
          <Button
          sx={{
            width:{xs:'115px',sm:'168px'},
            height:{xs:'33px',sm:'36px'},
            borderRadius: "8px",
            background: pathName === 'SearchEvent'?'#7d0732':"#fff",
            "&:hover": {
              background: pathName === 'SearchEvent'?'#7d0732':"#fff",
            },
          }}
          onClick={handleOpenModal}
        >
          <Typography
            sx={{
              color:pathName === 'SearchEvent'?'white':"#7d0732",
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: {xs:'0.75rem',sm:'1rem'},
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}

          >
          Subscribe Now
          </Typography>

        </Button>
        </Box>

      
        {/* </Stack> */}
      </Box>
      <RegisterModal open={isModalOpen} onClose={() => handleCloseModal()} />
    </Box>

  );
};

export default Navbar;
