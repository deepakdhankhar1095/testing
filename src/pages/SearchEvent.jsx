import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import SubEventCard from "../components/SubEventCard";
import unBox from "../assets/footer/unBox.svg";
import { Stack, Box, Typography, TextField, InputAdornment, useMediaQuery, Button } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../components/dummyData";
import titleToSlug from "../utils/titleToSlug";
import Navbar from "../components/Navbar";
import EventDetailsCards from "../components/singleEventDetails/EventDetailsCards";
import AttaGalatta from "../assets/subevents/AttaGalatta.webp"
import BLF from "../assets/subevents/BLF.webp"
import BLR_Reads from "../assets/subevents/BLR-Reads.webp"
import searchIcon from "../assets/searchEvent/searchIcon.svg"
import arrow from "../assets/arrow.svg"
import SearchBar from "../components/searchBar";
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';
import FilterDrawer from "../components/FilterDrawer";
import filterIcon from "../assets/FilterIcon.svg"
import theme from "../theme";
import CircularProgress from '@mui/material/CircularProgress';


const useDebounce = (value, delay) => {

  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);
  return debouncedValue;
};

const SearchEvent = () => {
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate();

  const [filterData, setFilterData] = useState('')
  const [allSearchData, setAllSearchData] = useState([])
  const [noResultFound, setNoResultFound] = useState(false)
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [filterdSearchArray, setFilterdSearchArray] = useState({})
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const handleFilterButtonClick = () => {
    setShowFilterDrawer(true);
  };

  const handleFilterDrawerClose = () => {
    setShowFilterDrawer(false);
  };

  const location = useLocation()
  const { state } = location;
  console.log(state, "locationstate");
  
  const [searchData, setSearchData] = useState(state ? state : '');
  

  const fetchData = async (searchData, filterData = {}) => {
    try {
      const url = 'https://ec2.unboxingblr.com/get-all-events';
      const data = {};
      if (searchData && searchData.length !== 0) {
        data.searchWord = searchData
      }

      if (filterData && Object.keys(filterData).length !== 0) {
        const { date, regions, event_type } = filterData;
        data.filter = { date, regions, event_type };
      }
      const response = await axios.post(url, data);
      setTimeout(()=>{
        setLoading(false)
      },500)
      setAllSearchData(response.data.events)
      if (response.data.events.length === 0) {
        setNoResultFound(true)
      }
      else {
        setNoResultFound(false)
        setLoading(false)
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const debouncedSearchData = useDebounce(searchData, 700);


  const handleSearchSubmit = () => {
    fetchData(searchData, filterdSearchArray)
  };

  const handleClearClick = () => {
    setSearchData('');
    fetchData('')
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const hasEffectRun = useRef(false);

  useEffect(() => {
    // if (!hasEffectRun.current) {
      //  setSearchData(state);
      fetchData(debouncedSearchData, filterdSearchArray);
     
      window.scrollTo(0, 0);
      hasEffectRun.current = true;
      console.log(state,'state')
    // } 
//     else{
 
//   if(debouncedSearchData){
//       fetchData(debouncedSearchData, filterData);
//   }
// }
  }, [ debouncedSearchData,filterdSearchArray]);


    const handleSearchSubmit1 = async () => {
      const token ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0MTk2OGU2LWY5MWMtNDBjOC05NDZhLTk0M2Y3OWVjYzEwYyIsImV4dGVybmFsQ3VzdG9tZXJJZCI6Ijc1ODc4MTc2NzgiLCJvcmdfaWQiOiJmYjE0ZjdjMy1mNzkxLTQxNzQtYTgxMy01NzBiYTkwY2QyMTMiLCJvcmdhbmlzYXRpb25Db2RlIjoiVERMIiwiaWF0IjoxNzAwNjU2MzUwLCJleHAiOjE3MDA4MjkxNTAsImlzcyI6IldhbGtpbiJ9.icqNx-ZpXU8R3ZEfJ3PHOdLNr1sWh6sigoZZEYkZjPWUdnXcaOqIR0azbX1qmUzdySy_KKB4gHFC21Jb3z3x1cwKEaACzxlY0FyymVjFg0Yi75PS4Mjr01xFPiw70m7jNVCI9gK7MEskQ3wSWsqNEGK6UZbTJ9fnwZJ88FGbeG6GptBpjp160vY_mgOTAVFXVv"
       const res = await axios.post("https://gratify.esmagico.net/api/tata_pwa", null, {
          headers: {
              "x-auth-token": token,
          },
      });
      console.log(res)
      // if (res.data.message === "success") {
      //     ("https://gratify.esmagico.net/");
      // }
  };
  

  return (
    // <div style={{ display: "grid", gridTemplateRows: "1fr auto", minHeight: "100vh", backgroundColor: '#fdf7ec' }}>
    //   <div>
    //     <Navbar pathName={'SearchEvent'} />
    //     <Box sx={{ marginTop: '90px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    //       <Typography
    //         sx={{
    //           color: '#231656',
    //           fontFamily: 'Satoshi',
    //           fontSize: { xs: '1.5rem', sm: '2.5rem' },
    //           fontStyle: 'normal',
    //           fontWeight: 900,
    //           lineHeight: 'normal',
    //           marginLeft: { xs: '20%', sm: '28%' },
    //         }}
    //       >
    //         {searchData?'Search Events':'Event Schedule' }
    //       </Typography>
    //       <Box onClick={handleFilterButtonClick} sx={{
    //         display: 'flex',
    //         width: { xs: '30px', sm: '120px' },
    //         height: '42px',
    //         padding: '6px 15px',
    //         justifyContent: "center",
    //         alignItems: 'center',
    //         gap: '16px',
    //         flexShrink: 0,
    //         borderRadius: '12px',
    //         border: Object.keys(filterdSearchArray).length === 0 ? '1px solid #EB9601' : '3px solid #EB9601',
    //         background: '#FFF',
    //         '&:hover': {
    //           cursor: 'pointer',
    //         },
    //       }}>
    //         {isSmallScreen ?
    //           <Typography
    //             sx={{
    //               color: '#231656',
    //               fontFamily: 'Inter',
    //               fontSize: '15px',
    //               fontStyle: 'normal',
    //               fontWeight: 400,
    //               lineHeight: 'normal',
    //             }}
    //           >
    //             Filter By
    //           </Typography>
    //           : <img src={filterIcon}
    //             alt="" />
    //         }
    //       </Box>

    //       <FilterDrawer open={showFilterDrawer} onClose={handleFilterDrawerClose} setFilterdSearchArray={setFilterdSearchArray} filterdSearchArray={filterdSearchArray} />

    //     </Box>
    //     <Box sx={{ marginTop: "30px" }}>
    //       <Box
    //         display='flex'
    //         justifyContent='center'
    //         alignItems='center'
    //         width={{ xs: '90%', sm: '60%', md: '60%' }}
    //         margin='auto'
    //         backgroundColor='#fff'
    //         borderRadius='50px'
    //       >
    //         <TextField
    //           variant="outlined"
    //           placeholder="Search Events"
    //           onChange={(e) => setSearchData(e.target.value)}
    //           value={searchData}
    //           onKeyDown={handleKeyPress}
    //           fullWidth
    //           sx={{
    //             '& .MuiOutlinedInput-notchedOutline': {
    //               borderRadius: '50px',
    //               border: '1px solid #EB9601'
    //             },
    //             '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //               border: '2px solid #EB9601',
    //             },
    //             '&:hover .MuiOutlinedInput-notchedOutline': {
    //               border: '1px solid #EB9601',
    //             },
    //           }}
    //           InputProps={{
    //             style: {
    //               height: '56px',
    //               boxSizing: 'border-box',
    //               color: '#000',
    //               fontFamily: 'Inter',
    //               fontSize: '20px',
    //               fontStyle: 'normal',
    //               fontWeight: 500,
    //               lineHeight: 'normal',
    //             },

    //             startAdornment: (
    //               <InputAdornment position="start">
    //                 <img
    //                   src={searchIcon}
    //                   alt="Search Icon"
    //                   style={{
    //                     height: '20px',
    //                     width: '20px',
    //                   }}
    //                 />
    //               </InputAdornment>
    //             ),
    //             endAdornment: (
    //               <InputAdornment position="end">
    //                 {searchData && (
    //                   <ClearIcon
    //                     onClick={handleClearClick}
    //                     style={{
    //                       cursor: 'pointer', border: '1px solid black', width: '30px',
    //                       height: '30px', borderRadius: '50%', marginRight: '10px'
    //                     }}
    //                   />
    //                 )}
    //                 <Box
    //                   onClick={() => handleSearchSubmit()}
    //                   sx={{
    //                     display: 'flex',
    //                     width: '48px',
    //                     height: '46px',
    //                     flexShrink: 0,
    //                     backgroundColor: '#EB9601',
    //                     borderRadius: '50%',
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     '&:hover': {
    //                       cursor: 'pointer',
    //                     },
    //                   }}
    //                 >
    //                   <img
    //                     src={arrow}
    //                     alt="arrow"
    //                     style={{
    //                       height: '20px',
    //                       width: '20px',
    //                     }}
    //                   />
    //                 </Box>
    //               </InputAdornment>
    //             ),
    //           }}
    //         />
    //       </Box>
    //     </Box>
    //     {loading ? (
    //     <CircularProgress style={{display:'flex',margin:'auto',justifyContent:'center',alignItems:'center',marginTop:'100px'}} />
    //   ) : (

    //     !noResultFound ? <EventDetailsCards data={allSearchData ?? []} />
    //       : <Box
    //         sx={{
    //           display: 'flex',
    //           width: { xs: '100%' },
    //           height: '55px',
    //           padding: '18px 0px',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           flexShrink: 0,
    //           borderRadius: '12px',
    //           justifySelf: 'center',
    //           marginTop: '100px'

    //         }}
    //       >
    //         <Typography
    //           sx={{
    //             color: 'var(--Maroon, #7D0732)',
    //             textAlign: 'center',
    //             fontFamily: 'Inter',
    //             fontSize: '16px',
    //             fontStyle: 'normal',
    //             fontWeight: 600,
    //             lineHeight: 'normal',
    //             textDecorationLine: 'underline',
    //           }}
    //         >
    //           No Events Found
    //         </Typography>

    //       </Box>
    //   )}
    //   </div>
    //   {/* {!noResultFound ?
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         width: { xs: '90%', sm: '60%', md: '48%' },
    //         height: '55px',
    //         padding: '18px 0px',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         flexShrink: 0,
    //         borderRadius: '12px',
    //         background: '#F6DBC0',
    //         justifySelf: 'center',
    //         marginBottom: '50px',
    //         '&:hover': {
    //           cursor: 'pointer',
    //         },
    //       }}
    //       onClick={() => handleViewAllBtn()}
    //     >
    //       <Typography
    //         sx={{
    //           color: 'var(--Maroon, #7D0732)',
    //           textAlign: 'center',
    //           fontFamily: 'Inter',
    //           fontSize: '16px',
    //           fontStyle: 'normal',
    //           fontWeight: 600,
    //           lineHeight: 'normal',
    //           textDecorationLine: 'underline',
    //           textTransform: 'uppercase',
    //         }}
    //       >
    //         View All
    //       </Typography>

    //     </Box>
    //     : null} */}

    //   <Footer />

    // </div >
    <Button onClick={()=>handleSearchSubmit1()}>
      api call

    </Button>
  );
};

export default SearchEvent;