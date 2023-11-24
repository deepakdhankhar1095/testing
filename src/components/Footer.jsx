import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import unBox from "../assets/footer/unBox.svg";
import facebook from "../assets/footer/facebook.svg";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg";
import whatsapp from "../assets/footer/whatsapp.svg";
// import youtube from "../assets/footer/youtube.svg";
import { useNavigate } from "react-router-dom";
import linkedIn from '../assets/footer/linkedin.svg';

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
  { name: "LinkedIn",
    image: linkedIn,
    destination: 
      "https://www.linkedin.com/company/unboxingblr/" 
  },
  { name: "Whatsapp",
    image: whatsapp,
    destination: 'http://wa.me/918217560854' },

];

function Footer() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleImageClick = (destination) => {
    navigate(destination);
  };

  return (
//     <Box
//       sx={{
//         backgroundColor: "#7D0732",
//         display: "flex",
//         flexDirection: isSmallScreen ? "column" : "row",
//         paddingX: isSmallScreen ? "1rem" : "5rem",
//         height: isSmallScreen ? "306px" : "160px",
//         justifyContent: "space-between",
//         color: "white",
//         alignItems: "center",
//         padding:{xs:' 33px 61px 30px 60px'
//         },
//         gap:"65px"
//       }}
//     >
//        {/* <Box
//       sx={{
//         display: "flex",
//         flexDirection: isSmallScreen ? "column" : "column",
//         justifyContent: "space-between",
//         color: "white",
//         alignItems:"flex-start",
//         width:'80%',
//         border:'1px solid red'
//       }}> */}
//       <Stack
//         sx={{
//           backgroundColor: "#7D0732",
//           display: "flex",
//           flexDirection: isSmallScreen ? "column" : "column",
//           paddingX: isSmallScreen ? "0rem" : "5rem",
//           color: "white",
//         }}
//         spacing={{xs:3,sm:2}}
//       >
//          <Stack
//         direction="row"
//         spacing={{ xs: '0.56rem', sm: '1.20rem' }}
//         alignItems="center"
//         marginTop={isSmallScreen ? "33px" : "0px"}
//       >
//         <Box sx={{ width: { xs: "30px", sm: '52px' }, height: { xs: "30px", sm: '49px' } }}>
//           <img
//             src={unBox}
//             alt=""
//             style={{
//               width: '100%',
//               display: "block",
//             }}
//           />
//         </Box>
//           <Box>
//             <Typography
//               variant="h3"
//               sx={{
//                 color: "#FFF",
//                 fontFamily: "Inter",
//                 fontSize: isSmallScreen ? "1rem" : "1.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "normal",
//               }}
//             >
//               UNBOXING BLR HABBA
//             </Typography>
//           </Box>
//         </Stack>

//         <Stack spacing={{ xs: 1.7, sm: 4.88 }} display='flex' direction={{ xs: 'column', sm: 'row' }}>

//           <Typography variant="body1" component="div" sx={{
//             color: '#FFF',
//             textAlign: 'center',
//             fontFamily: 'Inter',
//             fontSize: { xs: '1rem', sm: '1.25rem' },
//             fontStyle: 'normal',
//             fontWeight: 500,
//             lineHeight: 'normal',
//           }}>
//             Privacy & Policy
//           </Typography>

//           <Typography variant="body1" component="div" sx={{
//             color: '#FFF',
//             textAlign: 'center',
//             fontFamily: 'Inter',
//             fontSize: { xs: '1rem', sm: '1.25rem' },
//             fontStyle: 'normal',
//             fontWeight: 500,
//             lineHeight: 'normal',
//           }}>
//             Terms & Conditions
//           </Typography>
//         </Stack>
//       </Stack>

//       <Stack
//         direction={isSmallScreen ? "column" : "row"}
//         spacing={isSmallScreen ? "0.56rem" : "1.25rem"}
//         sx={{ display: "inline-flex", alignItems: "center" }}
//       >
//         <Box>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#FFF",
//               textAlign: "center",
//               fontFamily: "Inter",
//               fontSize:  { xs: '1rem', sm: '1.25rem' },
//               fontStyle: "normal",
//               fontWeight: 500,
//               lineHeight: "normal",
//             }}
//           >
//             Follow us on
//           </Typography>
//         </Box>
//         <Stack direction="row" spacing={isSmallScreen ? "1rem" : "1.42rem"}>
//           {socialMediaPlatforms.map((platform, index) =>
//               <a
//                 href={platform.destination}
//                 key={index}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={platform.image}
//                   alt={platform.name}
//                   style={{
//                     display: "flex",
//                     width: isSmallScreen ? "2rem" : "2.4375rem",
//                     height: "2.4375rem",
//                     padding: "0.325rem",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     cursor: "pointer",
//                   }}
//                 />
//               </a>
//             )}
//         </Stack>
//       </Stack>
// {/* </Box> */}
//     </Box>
<Box
sx={{
  backgroundColor: "#7D0732",
  display: "flex",
  flexDirection: isSmallScreen ? "column" : "row",
  paddingX: isSmallScreen ? "2rem" : "5rem",
  height: isSmallScreen ? "205px" : "160px",
  justifyContent: "space-between",
  color: "white",
  alignItems: "center",
}}
>
<Stack
  direction="row"
  spacing={{ xs: '0.56rem', sm: '1.20rem' }}
  alignItems="center"
  marginTop={isSmallScreen ? "33px" : "0px"}
>
  <Box sx={{ width: { xs: "30px", sm: '52px' }, height: { xs: "30px", sm: '49px' } }}>
    <img
      src={unBox}
      alt=""
      style={{
        width: '100%',
        display: "block",
      }}
    />
  </Box>
  <Box>
    <Typography
      variant="h3"
      sx={{
        color: "#FFF",
        fontFamily: "Inter",
        fontSize: isSmallScreen ? "1rem" : "1.5rem",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
      }}
    >
      UNBOXING BLR HABBA
    </Typography>
  </Box>
</Stack>

<Stack
  direction={isSmallScreen ? "column" : "row"}
  spacing={isSmallScreen ? "0.56rem" : "1.25rem"}
  sx={{ display: "inline-flex", alignItems: "center" }}
  marginBottom={isSmallScreen ? "45.5px" : "0px"}
>
  <Box>
    <Typography
      variant="h6"
      sx={{
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: { xs: '1rem', sm: '1.25rem' },
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
      }}
    >
      Follow us on
    </Typography>
  </Box>
  <Stack direction="row" spacing={isSmallScreen ? "1.56rem" : "1.42rem"}>
    {socialMediaPlatforms.map((platform, index) =>
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
              width: "2.4375rem",
              height: "2.4375rem",
              padding: "0.325rem",
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
            width: "2.4375rem",
            height: "2.4375rem",
            padding: "0.325rem",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        />
      )
    )}
  </Stack>
</Stack>
</Box>
  );
}

export default Footer;
