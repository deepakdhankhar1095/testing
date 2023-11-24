import React, { useState } from "react";
import { Box ,Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SubEventSingleCard = (data) => {
  const [hovering, setHovering] = useState(false);
const navigate=useNavigate()
  function getEmbeddableImageUrl(driveLink) {
    const fileIdMatch = driveLink.match(/\/d\/([^/]+)\//);
    if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];

        const imageUrl = `https://drive.google.com/uc?id=${fileId}`;
       

        return imageUrl;
    } else {
        return driveLink;
    }

}
const handleSearchSubmit = (data) => {
  navigate(`/searchEvent`, { state: data });
};

const thumbnail = getEmbeddableImageUrl(data.thumbnail)
  return (
    <>
          <Box
            display="flex"
            width="96%"
            padding={{ xs: "14px", sm: "20px 21px 20px 19.5px" }}
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap={{ xs: "0.6rem", sm: "1rem" }}
            backgroundColor="white"
            margin="auto"
            borderRadius="1.25rem"
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => setHovering(false)}
          >
            <Box
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                margin: "auto",
              }}
              height={{
                xs:'200px',
                sm: "200px",
                md: "220px",
                lg: "300px",
                xl: "400px",
                xll: "500px",
              }}
            >
              <img
                src={thumbnail}
                alt={data.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit:'contain'
                }}

              />
            </Box>
            <Typography
              style={{
                color: "#231656",
                fontFamily: "Satoshi",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
               // Control whiteSpace based on hovering
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              fontSize={{ xs: "1.125rem", sm: "1.5rem" }}
              whiteSpace={{xs:'normal', md: hovering ? "normal" : "nowrap"}}

              maxWidth={{
                xs:'200px',
                sm: "200px",
                md: "220px",
                lg: "300px",
                xl: "400px",
                xll: "500px",
              }}
            >
              {data.eventsForUBH}
            </Typography>
            {/* <Box
              borderRadius="0.5rem"
              bgcolor="var(--Warm-Yellow, #FDD503)"
              width={{ xs: " 7.4375rem", sm: "10.5rem" }}
              height={{ xs: "2.5rem", sm: "2.875rem" }}
              flexShrink={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="body1"
                style={{
                  color: "#7D0732",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "1.125rem",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Learn More
              </Typography>
            </Box> */}
             <Box sx={{
                    borderRadius: '0.5rem',
                    height: '44px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                  {/* for now */}
                    <Button
                        sx={{
                            borderRadius: '0.5rem',
                            background: 'var(--Maroon, #7D0732)',
                            width:"50%",
                            height:'100%',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            '&:hover':{
                              background: 'var(--Light-Maroon, #A6213F)',
                            
                            }
                        }}
                        disabled={!data?.bookMyShowUrl || data?.bookMyShowUrl ===''}
                        onClick={()=>{window.open(data.bookMyShowUrl, '_blank');
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#FFF',
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: 'normal',
                                textTransform: 'uppercase',
                            }}
                        >
                            Book Now
                        </Typography>
                    </Button>
                    
                    <Button
                        sx={{
                            borderRadius: '0.5rem',
                            background: 'var(--Warm-Yellow, #FDD503)',
                            width:"50%",  // 50%
                            height:'100%',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            color: 'var(--Maroon, #7D0732)',
                            // '&:hover':{
                             
                            // },
                            '&:hover':{
                              background: 'var(--Subtle-Dark-Yellow, #DAA520)',
                              // color: '#fff',
                            
                            }
                        }}
                        // disabled={data.redirectionUrl===''}
                        // onClick={()=>{window.open(data.redirectionUrl, '_blank');}}
                        onClick={()=>handleSearchSubmit(data?.eventsForUBH)}
                    >
                        <Typography
                            sx={{
                               
                                textAlign: 'center',
                                fontFamily: 'Inter',
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: 'normal',
                                textTransform: 'uppercase',
                            }}
                        >
                            Learn More
                        </Typography>
                    </Button>
                </Box>
          </Box>
     
    </>
  );
};

export default SubEventSingleCard;
