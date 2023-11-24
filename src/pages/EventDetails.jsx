import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import EventDetailsCards from "../components/singleEventDetails/EventDetailsCards";
import SearchBar from "../components/searchBar";
import FilterDrawer from "../components/FilterDrawer";
import filterIcon from "../assets/FilterIcon.svg"
import theme from "../theme";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const EventDetails = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [filterdSearchArray, setFilterdSearchArray] = useState({})
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [noResultFound,setNoResultFound]=useState(false)
  const [loading, setLoading] = useState(true);
  const [viewAll,setViewAll]=useState(false)

  const [data, setData] = useState([])

  const handleFilterButtonClick = () => {
    setShowFilterDrawer(true);
  };

  const handleFilterDrawerClose = () => {
    setShowFilterDrawer(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(filterdSearchArray)

    fetchData(filterdSearchArray)

  }, [filterdSearchArray])

  const handleViewAll = () => {
    window.scrollTo(0, 0);
   setViewAll(!viewAll)
    fetchData()
  }


  const fetchData = async (searchData) => {
    try {
      const url = 'https://ec2.unboxingblr.com/get-all-events';
      const data = {};

      if (searchData && Object.keys(searchData).length !== 0) {
        const { date, venue, event_type } = searchData;
        data.filter = { date, venue, event_type };
      }
      const response = await axios.post(url, data);
      if(response.data.events.length===0){
        setNoResultFound(true)
      }
      else{
        setNoResultFound(false)
      }
        setData(response.data.events);
        setLoading(false); 
     
      // setData(response.data.events)
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
      throw error;
    }
  };


  return (
    <div style={{ display: "grid", gridTemplateRows: "1fr auto", minHeight: "100vh", backgroundColor: '#fdf7ec' }}>
      <div>
        <Navbar pathName={'SearchEvent'} />
        <Box sx={{ marginTop: '90px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Typography
            sx={{
              color: '#231656',
              fontFamily: 'Satoshi',
              fontSize: { xs: '1.5rem', sm: '2.5rem' },
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: 'normal',
              marginLeft: { xs: '20%', sm: '28%' },
            }}
          >
            Events Schedule
          </Typography>
          <Box onClick={handleFilterButtonClick} sx={{
            display: 'flex',
            width: { xs: '30px', sm: '120px' },
            height: '42px',
            padding: '6px 15px',
            justifyContent: "center",
            alignItems: 'center',
            gap: '16px',
            flexShrink: 0,
            borderRadius: '12px',
            border: Object.keys(filterdSearchArray).length === 0 ? '1px solid #EB9601' : '3px solid #EB9601',
            background: '#FFF',
            '&:hover': {
              cursor: 'pointer',
            },
          }}>
            {isSmallScreen ?
              <Typography
                sx={{
                  color: '#231656',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Filter By
              </Typography>
              : <img src={filterIcon}
                alt="" />
            }
          </Box>

          <FilterDrawer open={showFilterDrawer} onClose={handleFilterDrawerClose} setFilterdSearchArray={setFilterdSearchArray} filterdSearchArray={filterdSearchArray}  viewAll={viewAll}/>
        </Box>
        <Box sx={{ marginTop: "30px", }}>
          <SearchBar />
        </Box>
        {loading ? (
        <CircularProgress style={{display:'flex',margin:'auto',justifyContent:'center',alignItems:'center',marginTop:'100px'}} />
      ) : (

         !noResultFound ?  <EventDetailsCards data={data ?? []} />
        :   <Box
        sx={{
          display: 'flex',
          width: {xs:'100%'},
          height: '55px',
          padding: '18px 0px',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          borderRadius: '12px',
          justifySelf: 'center',
          marginTop:'100px'
          
        }}
      >
        <Typography
          sx={{
            color: 'var(--Maroon, #7D0732)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            textDecorationLine: 'underline',
          }}
        >
        No Events Found
        </Typography>
 
      </Box>
        
      
      )}
      </div>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '90%', sm: '60%', md: '40%' },
          height: '55px',
          padding: '18px 0px',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0,
          borderRadius: '12px',
          background: '#F6DBC0',
          justifySelf: 'center',
          marginBottom: '50px',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() => handleViewAll()}
      >
        <Typography
          sx={{
            color: 'var(--Maroon, #7D0732)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
            textDecorationLine: 'underline',
            textTransform: 'uppercase',
          }}
        >
          View All
        </Typography>
      </Box>
      <Footer />
    </div >
  );
};

export default EventDetails;
