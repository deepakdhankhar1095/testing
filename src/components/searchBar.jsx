import React, { useState } from 'react'
import searchIcon from "../assets/searchEvent/searchIcon.svg"
import arrow from "../assets/arrow.svg"
import { Box, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = () => {
  const [searchData,setSearchData] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = () => {
    // const searchBarData = {
    //   searchData,
    //   additionalData,
    // };
    navigate(`/searchEvent`, { state: searchData });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };
  const handleClearClick = () => {
    setSearchData('');
  };
  
  return (
    <Box
      display= 'flex'
      justifyContent= 'center'
      alignItems= 'center'
      width={{xs:'95%',sm:'60%',md:'60%'}}
      margin= 'auto'
      backgroundColor= '#fff'
      borderRadius='50px'
  >
    <TextField
      variant="outlined"
      placeholder="Search Event, Venues, Locations"
      onChange={(e) => setSearchData(e.target.value)}
      value={searchData}
      onKeyDown={handleKeyPress}
      fullWidth
      sx={{ 
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '50px',
          border: '1px solid #EB9601'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '2px solid #EB9601', 
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #EB9601',
        },
      }}
      InputProps={{
        style: {
          height: '56px',
          boxSizing: 'border-box',
          color: '#000', 
          fontFamily: 'Inter',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        },

        startAdornment: (
          <InputAdornment position="start">
            <img
              src={searchIcon}
              alt="Search Icon"
              style={{
                height: '20px', 
                width: '20px',
              }}
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {searchData && (
              <ClearIcon
                onClick={handleClearClick}
                style={{ cursor: 'pointer',border:'1px solid black',  width: '30px',
                height: '30px', borderRadius: '50%', marginRight:'10px' }}
              />
            )}
            <Box
              onClick={() => handleSearchSubmit()}
              sx={{
                display: 'flex',
                width: '48px',
                height: '46px',
                flexShrink: 0,
                backgroundColor: '#EB9601',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <img
                src={arrow}
                alt="arrow"
                style={{
                  height: '20px',
                  width: '20px',
                }}
              />
            </Box>
          </InputAdornment>
        ),
      }}
    />
  </Box>
  )
}

export default SearchBar