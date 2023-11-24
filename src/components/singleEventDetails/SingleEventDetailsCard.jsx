import React, { useState,useEffect } from "react";
import { Box, useMediaQuery, Typography ,Button} from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ticketImg from "../../assets/tickets.svg"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BLF from "../../assets/subevents/BLF.webp"
import Skeleton from '@mui/material/Skeleton';
import greenTicketIcon from "../../assets/greenTicket.svg"



const SingleEventDetailsCard = (data) => {

    const  [loading,setLoading]=useState(true)
    const [hovering, setHovering] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() => {
        const fetchImageUrl = async () => {
          try {
            const url = await getEmbeddableImageUrl(data.thumbnail);
            setImageUrl(url);
          } catch (error) {
            console.error('Error fetching image URL', error);
            // Handle the error if necessary
          } finally {
            setLoading(false);
          }
        };
      
        fetchImageUrl();
      }, [data.thumbnail]);


    function getEmbeddableImageUrl(driveLink) {
        const fileIdMatch = driveLink.match(/\/d\/([^/]+)\//);
        if (fileIdMatch && fileIdMatch[1]) {
            const fileId = fileIdMatch[1];

            const imageUrl = `https://drive.google.com/uc?id=${fileId}`;
           

            return imageUrl;
        } 
        return driveLink
    }

    return (
        <>
          
            <Box
                display="flex"
                width='100%'
                padding={{ xs: "14px", sm: "15px" }}
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="0.6rem"
                backgroundColor="white"
                borderRadius="1.25rem"
               

            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap={{ xs: "0.6rem", sm: "0.5rem" }}
                    backgroundColor="white"
                    margin="auto"
                    borderRadius="1.25rem"
                    width="100%"
                >
                    <Box
                        sx={{
                            width: { xs: "35%", sm: '26%' },
                            borderRadius: "10px",
                            overflow: "hidden",
                            margin: "auto",
                         
                        }}
                    >

                      
                            <img
                                src={imageUrl}
                                alt={data.title}
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                    display: "block",
                                }}
                                loading="lazy"
                            />

                        


                        {/* <img
                            src={imageUrl}
                            alt={data.title}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                display: "block",
                            }}

                        /> */}
                    </Box>
                    <Box
                        sx={{
                            width: "60%",
                            borderRadius: "10px",
                            overflow: "hidden",
                            margin: "auto",

                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '10px',
                            

                        }}
                       
                    >
                        <Box sx={{
                            gap: '0px',
                            width: '100%',
                            paddingLeft: '5px'

                        }}
                        onMouseEnter={() => {
                            setHovering(true);
                        }}
                        onMouseLeave={() => setHovering(false)}>
                            <Typography
                                sx={{
                                    color: '#231656',
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '1rem', sm: '1.25rem', },
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '153.023%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: {
                                        xs: '170px',
                                        sm: "200px",
                                        md: "220px",
                                        lg: "300px",
                                        xl: "400px",
                                        xll: "500px",
                                    },
                                    whiteSpace: hovering ? 'normal !important' : 'nowrap',

                                }}
                            >
                                {data?.event_name}
                            </Typography>

                        </Box>



                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignContent: 'center',
                            gap: '5px',
                        }}>
                            <PermIdentityOutlinedIcon />
                            <Typography
                                style={{
                                    color: '#231656',
                                    fontFamily: 'Inter',
                                    fontSize: '1rem',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '153.023%', // 1.53025rem
                                }}
                            >
                                {data.category_tag}
                            </Typography>
                        </Box>
                        <a
                            href={data.gmap_coordinates}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',/* Remove underline */
                                color: 'inherit',
                                width: '100%'
                            }}

                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignContent: 'center',
                                gap: '5px',
                                "&:hover": {
                                    cursor: 'pointer'
                                },

                                maxWidth: {
                                    xs: '200px',
                                    sm: "220px",
                                    md: "220px",
                                    lg: "300px",
                                    xl: "400px",
                                    xll: "500px",
                                },

                            }}
                            >
                                <FmdGoodOutlinedIcon sx={{

                                }} />

                                <Typography
                                    style={{
                                        color: '#231656',
                                        fontFamily: 'Inter',
                                        fontSize: { xs: '0.75rem', sm: '1rem' },
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '153.023%', // 1.53025rem

                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: hovering ? 'normal !important' : 'nowrap',

                                    }}
                                >
                                    {data.venue}
                                </Typography>
                            </Box>
                        </a>
                        {!isSmallScreen ?
                            <Box
                                sx={{
                                    borderRadius: '0.5rem',
                                    height: '27px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: '1',
                                        borderRadius: '0.5rem',
                                        background: '#FED',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.3rem',

                                        minWidth: '45%',
                                        maxWidth: '50%'
                                    }}
                                >
                                    <CalendarMonthOutlinedIcon />
                                    <Typography
                                        sx={{
                                            color: '#231656',
                                            textAlign: 'center',
                                            fontFamily: 'Inter',
                                            fontSize: '0.700rem',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {data.date.split(' - ').map(dateStr => new Date(dateStr).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })).join(' - ')}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        flex: '1',
                                        borderRadius: '0.5rem',
                                        background: '#FED',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.2rem',
                                    }}
                                >
                                    <AccessTimeIcon />
                                    <Typography
                                        sx={{
                                            color: '#231656',
                                            textAlign: 'center',
                                            fontFamily: 'Inter',
                                            fontSize: '0.700rem',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            lineHeight: 'normal',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {new Date(`2000-01-01T${data.start_time}`).getMinutes() === 0
                                            ? new Date(`2000-01-01T${data.start_time}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).replace(/\s/g, '')
                                            : new Date(`2000-01-01T${data.start_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                        }
                                        {' - '}
                                        {new Date(`2000-01-01T${data.end_time}`).getMinutes() === 0
                                            ? new Date(`2000-01-01T${data.end_time}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).replace(/\s/g, '')
                                            : new Date(`2000-01-01T${data.end_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                        }
                                    </Typography>
                                </Box>
                            </Box>

                            : null}
                    </Box>

                </Box>
                {isSmallScreen ?
                    <Box
                        sx={{
                            borderRadius: '0.5rem',
                            height: '27px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                flex: '1',
                                borderRadius: '0.5rem',
                                background: '#FED',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: '15px',
                                justifyContent: 'flex-start',
                                gap: '0.3rem',
                                maxWidth: '45%'
                            }}
                        >
                            <CalendarMonthOutlinedIcon />
                            <Typography
                                sx={{
                                    color: '#231656',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: '0.875rem',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {data.date.split(' - ').map(dateStr => new Date(dateStr).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })).join(' - ')}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flex: '1',
                                borderRadius: '0.5rem',
                                background: '#FED',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.3rem',
                            }}
                        >
                            <AccessTimeIcon />
                            <Typography
                                sx={{
                                    color: '#231656',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: '0.875rem',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal',
                                    textTransform: 'uppercase',
                                }}
                            >

                                {new Date(`2000-01-01T${data.start_time}`).getMinutes() === 0
                                    ? new Date(`2000-01-01T${data.start_time}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).replace(/\s/g, '')
                                    : new Date(`2000-01-01T${data.start_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                }
                                {' - '}
                                {new Date(`2000-01-01T${data.end_time}`).getMinutes() === 0
                                    ? new Date(`2000-01-01T${data.end_time}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).replace(/\s/g, '')
                                    : new Date(`2000-01-01T${data.end_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                }
                            </Typography>
                        </Box>
                    </Box>
                    : null}
                <Box sx={{
                    borderRadius: '0.5rem',
                    background: '#F7F9FC',
                    height: '50px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px',
                    paddingX: '20px'
                }}>
                    <img src={data?.ticketType=="free"?greenTicketIcon:ticketImg} alt="" />
                    <Typography
                        variant="h6"
                        style={{
                            color: '#231656',
                            fontFamily: 'Inter',
                            fontSize: '1rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '153.023%',
                        }}
                    >    {data?.ticketType && data.ticketType.charAt(0).toUpperCase() + data.ticketType.slice(1)}
                    </Typography>

                </Box>
                <Box sx={{
                    borderRadius: '0.5rem',
                    height: '44px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                   
                        <Button

                            sx={{
                                borderRadius: '0.5rem',
                                background: 'var(--Maroon, #7D0732)',
                                width: "100%",
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                "&:hover": {
                                    cursor: 'pointer',
                                    background: 'var(--DarkMaroon, #5A0320)'

                                },
                                "&:disabled": {
                                    background: 'var(--Maroon, #7D0732)',
                                    opacity: 0.5, // Adjust the opacity value as needed
                                    cursor: 'not-allowed',
                                },

                            }}
                            disabled={data.book_bms_link===""}
                            onClick={()=>{window.open(data.book_bms_link, '_blank')}}
                           
                            // onClick={()=>{window.open('https://in.bookmyshow.com/events/ahum-arts-festival/ET00375958', '_blank')}}
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
                
                   
                         {/* <Button
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
                        disabled={data.knowMore_url===''}
                        onClick={()=>{window.open(data.knowMore_url, '_blank');}}
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
                    </Button> */}
                    
                </Box>
            </Box>
            
        </>
    );
};

export default SingleEventDetailsCard;
