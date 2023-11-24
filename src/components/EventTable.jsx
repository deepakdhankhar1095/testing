import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell, Paper, Typography, Box, Stack, useMediaQuery } from '@mui/material';
import { Link } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EventTable = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const [data,setData] = useState([])
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const url = 'https://ec2.unboxingblr.com/get-random-events';
      const response = await axios.get(url);
   
      setData(response.data.events)
      console.log(data)
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearchEvents = () => {
    navigate(`/searchEvent`)
  };

  useEffect(()=>{
    fetchData()
    console.log(data,'table data')
  },[])

  // const fakeData = [
  //   {
  //     date: 'Dec 1',
  //     time: '10:00 AM - 11:30 AM',
  //     category: 'Books, Authors, Readers & More...',
  //     eventName: 'Lit Nagara',
  //     location: 'Location 1',
  //   },
  //   {
  //     date: 'Dec 1',
  //     time: '12:00 PM - 01:30 PM',
  //     category: 'Music, Theatre, Dance & More...',
  //     eventName: 'Tech Halli',
  //     location: 'Location 2',
  //   },
  //   {
  //     date: 'Dec 2',
  //     time: '10:30 AM - 12:00 PM',
  //     category: 'Books, Authors, Readers & More...',
  //     eventName: 'Kala Koota',
  //     location: 'Location 3',
  //   },
  //   {
  //     date: 'Dec 2',
  //     time: '01:00 PM - 02:30 PM',
  //     category: 'Music, Theatre, Dance & More...',
  //     eventName: 'Ranga Katte',
  //     location: 'Location 4',
  //   },
  //   {
  //     date: 'Dec 3',
  //     time: '10:00 AM - 11:30 AM',
  //     category: 'Books, Authors, Readers & More...',
  //     eventName: 'Thindi Puram',
  //     location: 'Location 5',
  //   },
  //   {
  //     date: 'Dec 3',
  //     time: '12:00 PM - 01:30 PM',
  //     category: 'Music, Theatre, Dance & More...',
  //     eventName: 'Churumuri',
  //     location: 'Location 6',
  //   },
  //   {
  //     date: 'Dec 4',
  //     time: '10:30 AM - 12:00 PM',
  //     category: 'Books, Authors, Readers & More...',
  //     eventName: 'Hasiru City',
  //     location: 'Location 7',
  //   },
  //   {
  //     date: 'Dec 4',
  //     time: '01:00 PM - 02:30 PM',
  //     category: 'Music, Theatre, Dance & More...',
  //     eventName: 'Churumuri',
  //     location: 'Location 8',
  //   },
  //   {
  //     date: 'Dec 5',
  //     time: '10:00 AM - 11:30 AM',
  //     category: 'Books, Authors, Readers & More...',
  //     eventName: 'Hasiru City',
  //     location: 'Location 9',
  //   },
  //   {
  //     date: 'Dec 5',
  //     time: '12:00 PM - 01:30 PM',
  //     category: 'Music, Theatre, Dance & More...',
  //     eventName: 'Hasiru City',
  //     location: 'Location 10',
  //   },
  // ];

  const cellStyle = {
    color: '#231656',
    fontFamily: 'Inter',
    fontSize: {sm:'0.75rem',md:'1rem'},
    fontStyle: 'normal',
    fontWeight:{sm:400,md:500},
    lineHeight: '153.023%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderBottom:'0px',
    boxSizing:'border-box',
      '& .css-jzq96e-MuiTableCell-root':{
         padding:{xs:'10px',sm:'15px'}
      },
      paddingX:{xs:'8px'}
  };


  return (
    // <Box sx={{
    //   width: {xs:'95%',sm:'90%',md:'75%'}, margin: '0 auto', 
    //   borderRadius: {
    //     xs: '20px',
    //     md: '40px 40px 50px 50px',
    //   },
    //   background: '#FDD503', marginTop: '50px'
    // }}>
    //   <Stack
    //     direction="row"
    //     alignItems="center"
    //     justifyContent='space-between'
    //     height={{xs:'50px',sm:'80px'}}
    //     paddingX={{xs:'20px',sm:'40px'}}
        
    //   >
    //     <Typography
    //       sx={{
    //         color: '#231656',
    //         fontFamily: 'Satoshi',
    //         fontSize: {xs:'1rem',sm:'1.75rem'},
    //         fontStyle: 'normal',
    //         fontWeight: 700,
    //         lineHeight: 'normal',
    //       }}
    //     >
    //       Events Schedule
    //     </Typography>
    //     <Box
    //      onClick={()=>handleSearchEvents()}
    //       sx={{ textDecoration: "none", color: 'var(--Maroon, #7D0732)',
    //       '&:hover':{
    //         cursor:'pointer'
    //       } }}>
    //       <Typography
    //         style={{
    //           color: 'var(--Maroon, #7D0732)',
    //           textAlign: 'center',
    //           fontFamily: 'Inter',
    //           fontSize: {xs:'0.75rem',sm:'1rem'},
    //           fontStyle: 'normal',
    //           fontWeight: 600,
    //           lineHeight: 'normal',
    //           textDecorationLine: 'underline',
    //           textTransform: 'uppercase',
    //         }}
    //       >
    //         View ALL
    //       </Typography>
    //     </Box>
    //   </Stack>
    //   {/* <Paper style={{ borderRadius: '4%' }}>
    //     <Table>
    //       <TableHead>
    //         <TableRow style={{gap:'10px'}}>
             
    //           <TableCell sx={{ width:  {xs:'20%',sm:'5%'}, ...cellStyle, textAlign: 'center' }}>Date</TableCell>
    //           {isSmallScreen ? null : <TableCell sx={{ width: '10%', ...cellStyle, }}>Time</TableCell>}
    //           <TableCell sx={{ width:  {xs:'20%',sm:'10%'}, ...cellStyle }}>Event Type</TableCell>
    //           <TableCell sx={{ width:  {xs:'30%',sm:'20%'}, ...cellStyle}}>Event Name</TableCell>
    //           <TableCell sx={{ width:{xs:'30%',sm:'25%'} ,...cellStyle,}}>Venue</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {data.map((row, index) => (
    //           <TableRow key={index} sx={index % 2 === 0 ? { backgroundColor: '#F7F9FC' } : null}>
    //             <TableCell sx={{ ...cellStyle, textAlign: 'center' }}>
    //             {row.date.split(' - ').map(dateStr => new Date(dateStr).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })).join(' - ')}
    //                                  </TableCell>
    //             {isSmallScreen ? null :<TableCell sx={cellStyle}>
    //             {new Date(`2000-01-01T${row.start_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} -   {new Date(`2000-01-01T${row.end_time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                  
    //               </TableCell>}
    //             <TableCell sx={{ ...cellStyle,maxWidth:'10px' }}>{row.category}</TableCell>
    //             <TableCell sx={{ ...cellStyle,maxWidth:'50px'}}>{row.event_name}</TableCell>
    //             <TableCell sx={{...cellStyle,maxWidth:'50px'}}>{row.venue}</TableCell>
               
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </Paper> */}
    // </Box>
    <Box
            
            sx={{
              width:'80%',
              height: { xl: '776px', lg: '776px', md: '625px', xs: '672px' },
              margin:{xs:'80px auto',sm:'80px auto',md:'auto'},
              background: {
                // sm: `url(${largeImages[currentImage]}?${new Date().getTime()}) #EFA301 50% / cover no-repeat`,
                xs:`url(${'https://unboxblr-db.s3.ap-south-1.amazonaws.com/view+all+events.png'}) #FFF 50% / cover no-repeat`,
                sm: `url(${'https://unboxblr-db.s3.ap-south-1.amazonaws.com/view+all+events.png'}) #FFF 50% / cover no-repeat`,
                md: `url(${'https://unboxblr-db.s3.ap-south-1.amazonaws.com/Home+Sprint+13.png'}) #FFF 50% / cover no-repeat`,
              },
              '&:hover':{
                cursor:'pointer'
              }
            
            }}
            onClick={()=>navigate('/searchEvent')}
          ></Box>
  );

};

export default EventTable;
