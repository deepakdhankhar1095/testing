import React, { useEffect, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, styled } from '@mui/material';

const FilterDrawer = ({ open, onClose, setFilterdSearchArray, filterdSearchArray, viewAll }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  const [selectedVenuesList, setSelectedVenuesList] = useState([]);
  const [showDateOptions, setShowDateOptions] = useState(false);
  const [showEventTypeOptions, setShowEventTypeOptions] = useState(false);
  const [showVenueOptions, setShowVenueOptions] = useState(false);

  const [selectedRegionsList, setSelectedRegionsList] = useState([]);
  const [showRegionsOptions, setShowRegionsOptions] = useState(false);

  const handleDateClick = (formattedDate) => {
    if (!selectedDates.includes(formattedDate)) {
      setSelectedDates([...selectedDates, formattedDate]);
    }
    else {
      const updatedDatesList=selectedDates.filter((date)=>date!==formattedDate)
        setSelectedDates(updatedDatesList)
      
    }
  };

  const handleRemoveDate = (formattedDate) => {
    const updatedDates = selectedDates.filter((date) => date !== formattedDate);
    setSelectedDates(updatedDates);
  };

  const formatDisplayDate = (formattedDate) => {
    const [, month, day] = formattedDate.split('-');
    return `Dec ${day}`;
  };

  const generateDateOptions = () => {
    const options = [];

    for (let day = 1; day <= 11; day++) {
      const paddedDay = day < 10 ? `0${day}` : `${day}`;
      const formattedDate = `2023-12-${paddedDay}`;
      const displayDate = `Dec ${day}`;

      options.push(
        { formattedDate, displayDate }
      );
    }
    return options;
  };

  const handleEventTypeClick = (eventType) => {
    if (!selectedEventTypes.includes(eventType)) {
      setSelectedEventTypes([...selectedEventTypes, eventType]);
    } else {
      const updatedEventTypes = selectedEventTypes.filter((type) => type !== eventType);
      setSelectedEventTypes(updatedEventTypes);
    }

  };


  const generateEventTypeOptions = () => {
    const eventTypes = [
      'Heritage Walks', 'F&B','Talks',  'City Walks',
      'Open Mic', 'Golf', 'Birdwatching',
      'Visual Art', 'Music', 'Theatre', 'Dance', 'Nature Walks','Films',
      'Crafts', 'Comedy', 'Sustainability',
      'Exhibition', 'Film', 'Design', 'Literature',
      'Pottery', 'Studio visits', 'Performances', 'Market',
      'Tech', 'Workshops', 'Kadalekai Parishe','Walks' , 'Public Infrastructure',
    ]
    return eventTypes
  };

  const handleVenueTypeClick = (venue) => {
    if (!selectedVenuesList.includes(venue)) {
      setSelectedVenuesList([...selectedVenuesList, venue]);
    } else {
      const updatedVenuesList = selectedVenuesList.filter((type) => type !== venue);
      setSelectedVenuesList(updatedVenuesList);
    }
  };

  const generateVenueOptions = () => {
    const venues = [
      'Lahe Lahe', 'Courtyard', 'Medai', 'BIC', 'Lal Bagh', 'IME, JP Nagar & Cubbon Band Stand',
      'Forum South Bangalore Mall', 'Vyoma, JP Nagar', 'Nandi Hills', 'Sarjapur Road',
      'MAP Kasturba Road', 'Jayanagar 4th block', 'LaLit Ashok', 'Church Street',
      'Gavipuram, Tipu\'s palace, Cubbon Park, Shivaji Nagar, Devanahalli, and Bhoganandishwara',
      'Hayes Road', 'Bangalore Palace', 'Shoonya, Lal Bagh', 'Nandi Hills',
      'Courtyard, Koota, Kengeri', 'BIC, Domlur', 'BCC, Yelahanka', 'Attakkalari Centre, Wilson Garden',
      'Atta Galatta, Indiranagar', 'Whitefield', 'Lahe Lahe, Indiranagar', 'KR Market and other areas',
      'To be confirmed', 'Ramdas M Pai Convention Centre', 'IIWC, Basavangudi', 'Nandi Hills',
      'Gallery Sumukha, Wilson Garden', 'Bhartiya City/Leela Lawns', 'Kempegowda International Airport',
      'Courtyard, Shanti Nagar', 'BIC, Domlur', 'Malleshwaram', 'AHUM Space, Jakkur', 'Jangama, Rajarajeshwari Nagar'
    ];

    return venues
  };

  const handleRegionsTypeClick = (region) => {
    if (!selectedRegionsList.includes(region)) {
      setSelectedRegionsList([...selectedRegionsList, region]);
    } else {
      const updatedRegionsList = selectedRegionsList.filter((type) => type !== region);
      setSelectedRegionsList(updatedRegionsList);
    }
  };
  const generateRegionsOptions = () => {
    const regions = [
      'North',
      'South',
      'East',
      'West',
      'Central',
    ]
    return regions
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    onClose(open);
  };



  const handleClearFilters = (e) => {
    setSelectedDates([]);
    setSelectedEventTypes([]);
    setSelectedVenuesList([]);
    setShowDateOptions(false);
    setShowEventTypeOptions(false);
    setShowVenueOptions(false);
    // Close the drawer
    setFilterdSearchArray({});
    toggleDrawer(false)(e);
  };

  useEffect(() => {
    handleClearFilters()
  }, [viewAll])


  const handleApplyFilters = (e) => {
    console.log('Selected Dates:', selectedDates);
    console.log('Selected Event Types:', selectedEventTypes);
    console.log('Selected Venues List:', selectedVenuesList);

    // const formatDate = (inputDate) => {
    //   const [year, day] = inputDate.split('-');
    //   return `${parseInt(day, 10)} Dec, 2023`;
    // };


    // // Create an object with only non-empty arrays
    // const filters = {};
    // if (selectedDates.length > 0) {
    //   filters.date = selectedDates;
    // }

    const formatDate = (inputDate) => {
      const [year, month, day] = inputDate.split('-');
      return `${parseInt(day, 10)} Dec, 2023`;
    };

    // Assuming selectedDates is an array of date strings in "yyyy-d" format
    const formattedDates = selectedDates.map(formatDate);

    // Create an object with only non-empty arrays
    const filters = {};
    if (formattedDates.length > 0) {
      filters.date = formattedDates;
    }
    if (selectedRegionsList.length > 0) {
      filters.regions = selectedRegionsList;
    }
    if (selectedEventTypes.length > 0) {
      filters.event_type = selectedEventTypes;
    }

    // Set the filtered search array
    setFilterdSearchArray(filters);

    // Close the drawer
    toggleDrawer(false)(e);
  };

  const handleEventDropdown = () => {
    setShowDateOptions(false)
    setShowRegionsOptions(false)
    
  }
  const handleVenueDropdown = () => {
    setShowEventTypeOptions(false)
    setShowDateOptions(false)
  }
  const handleRegionDropdown = () => {
    setShowEventTypeOptions(false)
    setShowDateOptions(false)
  }
  const handleDateDropdown = () => {
    setShowEventTypeOptions(false)
    setShowRegionsOptions(false)
  }


  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      PaperProps={{ style: { width: '350px', padding: '16px', borderRadius: '10px' } }}
    >

      <Paper sx={{

      }}>
        <div style={{ padding: '0px 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Filter By</Typography>
            <IconButton onClick={toggleDrawer("right", false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <List style={{ marginBottom: '200px' }}>
            <div style={{ border: '1px solid #E9E8EF', borderRadius: '0.75rem', margin: '1px', padding: '0px 10px', marginTop: '5px' }}>
              <Box style={{ margin: '10px 0px 10px 5px' }}>
                <Typography sx={{
                  color: '#231656',
                  fontFamily: 'Inter',
                  fontSize: '1rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',

                }}>Date</Typography>
              </Box>
              <Accordion style={{
                borderRadius: '10px',
                boxShadow: 'none',
              }}
                expanded={showDateOptions}
                onChange={() => setShowDateOptions(!showDateOptions)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={() => handleDateDropdown()}
                  style={{
                    paddingX: '25px', border: '1px solid #E9E8EF', height: '40px'
                  }}
                >
                  <Typography>Select Date</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexWrap: 'wrap', padding: '8px 0px', border: 'none' }}>
                  {generateDateOptions().map((el) => (
                    <Box key={el.displayDate}
                      onClick={() => handleDateClick(el.formattedDate)}

                      // sx={{
                      //   border: '1px solid #E9E8EF',
                      //   cursor: 'pointer',
                      //   padding: '5px',
                      //   fontSize: {xs:'0.75rem',sm:'0.9rem'},
                      //   background: selectedDates.includes(el.formattedDate) ? '#F6DBC0' : '#fdf7ec',
                      //   margin: '5px',
                      //   borderRadius: 5,
                      // }}
                      sx={{
                        color: "#231656",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontSize:{xs:'0.5rem',sm:'1rem'},
                        fontWeight: 500,
                        lineHeight: "normal",
                        margin: '3px',
                        borderRadius: 5,
                        cursor: 'pointer',
                        padding: '5px',
                        borderRadius: '8px',
                        border: '1px solid #E9E8EF',
                        cursor: 'pointer',
                        background: selectedDates.includes(el.formattedDate) ? '#F6DBC0' : '#fdf7ec',
                      }}
                      >
                      {el.displayDate}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion >

              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {selectedDates.map((date, index) => (
                  <Box key={date} style={{ background: '#fdf7ec', padding: '0px 0px 0px 8px', borderRadius: '10%', marginRight: '10px', marginBottom: '10px', border: '1px solid #E9E8EF', }}>
                    <span className={`selected-date day-${date.split('-')[0]}`}>{formatDisplayDate(date)}</span>
                    <IconButton onClick={() => handleRemoveDate(date)} style={{ marginLeft: '2px' }}>
                      <CloseIcon style={{ fontSize: 14 }} />
                    </IconButton>
                  </Box>
                ))}
              </div>
            </div>

            <div style={{ border: '1px solid #E9E8EF', borderRadius: '0.75rem', margin: '1px', padding: '0px 10px', marginTop: '5px' }}>
              <Box style={{ margin: '10px 0px 10px 5px' }}>
                <Typography sx={{
                  color: '#231656',
                  fontFamily: 'Inter',
                  fontSize: '1rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',

                }}>Event Type</Typography>
              </Box>
              <Accordion
                style={{
                  borderRadius: '10px',
                  boxShadow: 'none',
                }}
                expanded={showEventTypeOptions}
                onChange={() => setShowEventTypeOptions(!showEventTypeOptions)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={() => handleEventDropdown()}
                  style={{ paddingX: '25px', border: '1px solid #E9E8EF', height: '40px' }}
                >
                  <Typography>Select Event Type</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexWrap: 'wrap', padding: '10px 0px' }}>
                  {generateEventTypeOptions().map((eventType, index) => (
                    <Box
                      key={index}
                      onClick={() => handleEventTypeClick(eventType)}
                      sx={{
                          color: "#231656",
                          fontFamily: "Inter",
                          fontStyle: "normal",
                          fontSize:{xs:'0.5rem',sm:'1rem'},
                          fontWeight: 500,
                          lineHeight: "normal",
                          margin: '3px',
                          borderRadius: 5,
                          cursor: 'pointer',
                          padding: '5px',
                          borderRadius: '8px',
                          border: '1px solid #E9E8EF',
                          cursor: 'pointer',
                          background: selectedEventTypes.includes(eventType) ? '#F6DBC0' : '#fdf7ec',
                        }}
                    >
                      {eventType}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>

              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {selectedEventTypes.map((eventType, index) => (
                  <Box key={eventType} style={{ background: '#fdf7ec', padding: '0px 0px 0px 8px', borderRadius: '10%', marginRight: '10px', marginBottom: '10px', border: '1px solid #E9E8EF', }}>
                    {eventType}
                    <IconButton onClick={() => handleEventTypeClick(eventType)} style={{ marginLeft: '2px' }}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </div>
            </div>

            {/* <div style={{ border: '1px solid #E9E8EF', borderRadius: '0.75rem', margin: '1px', padding: '0px 10px', marginTop: '5px' }}>
              <div style={{ marginBottom: '20px' }}>
                <Box style={{ margin: '10px 0px 10px 5px' }}>
                  <Typography sx={{
                    color: '#231656',
                    fontFamily: 'Inter',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',

                  }}>Venue</Typography>
                </Box>
              </div>
              <Accordion
                style={{
                  borderRadius: '10px',
                  boxShadow: 'none',
                }}
                expanded={showVenueOptions}
                onChange={() => setShowVenueOptions(!showVenueOptions)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={()=>handleVenueDropdown()}
                  style={{ paddingX: '25px', border: '1px solid #E9E8EF', height: '40px' }}
                >
                  <Typography>Select Venue</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexWrap: 'wrap', padding: '10px 0px' }}>
                  {generateVenueOptions().map((venue, index) => (
                    <div
                      key={index}
                      onClick={() => handleVenueTypeClick(venue)}
                      style={{
                        border: '1px solid #E9E8EF',
                        cursor: 'pointer',
                        padding: '8px',
                        background: selectedVenuesList.includes(venue) ? '#F6DBC0' : '#fdf7ec',
                        margin: '5px',
                        borderRadius: 5,
                      }}
                    >
                      {venue}
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {selectedVenuesList.map((venue, index) => (
                  <Box key={venue} style={{ background: '#fdf7ec', padding: '0px 0px 0px 8px', borderRadius: '10%', marginRight: '10px', marginBottom: '10px', border: '1px solid #E9E8EF', }}>
                    {venue}
                    <IconButton onClick={() => handleVenueTypeClick(venue)} style={{ marginLeft: '2px', }}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </div>
            </div> */}

              <div style={{ border: '1px solid #E9E8EF', borderRadius: '0.75rem', margin: '1px', padding: '0px 10px', marginTop: '5px' }}>
              <div style={{ marginBottom: '20px' }}>
                <Box style={{ margin: '10px 0px 10px 5px' }}>
                  <Typography sx={{
                    color: '#231656',
                    fontFamily: 'Inter',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',

                  }}>Regions</Typography>
                </Box>
              </div>
              <Accordion
                style={{
                  borderRadius: '10px',
                  boxShadow: 'none',
                }}
                expanded={showRegionsOptions}
                onChange={() => setShowRegionsOptions(!showRegionsOptions)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={()=>handleRegionDropdown()}
                  style={{ paddingX: '25px', border: '1px solid #E9E8EF', height: '40px' }}
                >
                  <Typography>Select Regions</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexWrap: 'wrap', padding: '10px 0px' }}>
                  {generateRegionsOptions().map((region, index) => (
                    <Box
                      key={index}
                      onClick={() => handleRegionsTypeClick(region)}
                      sx={{
                        color: "#231656",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontSize:{xs:'0.5rem',sm:'1rem'},
                        fontWeight: 500,
                        lineHeight: "normal",
                        margin: '3px',
                        borderRadius: 5,
                        cursor: 'pointer',
                        padding: '5px',
                        borderRadius: '8px',
                        border: '1px solid #E9E8EF',
                        cursor: 'pointer',
                        background: selectedRegionsList.includes(region) ? '#F6DBC0' : '#fdf7ec',
                      }}
                      
                    >
                      {region}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                {selectedRegionsList.map((region, index) => (
                  <Box key={region} style={{ background: '#fdf7ec', padding: '0px 0px 0px 8px', borderRadius: '10%', marginRight: '10px', marginBottom: '10px', border: '1px solid #E9E8EF', }}>
                    {region}
                    <IconButton onClick={() => handleRegionsTypeClick(region)} style={{ marginLeft: '2px', }}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </div>
            </div> 




            <div style={{ display: 'flex', justifyContent: 'space-around', width: '350px', padding: '20px 20px 20px 0px', position: 'fixed', bottom: 0 ,backgroundColor:"#fff",border: '1px solid #E9E8EF',right:'0px'}}>
            <Box onClick={handleClearFilters} sx={{
              flexShrink: 0, borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px', border: '1px solid #7D0732',width:'150px',
              "&:hover": {
                cursor: 'pointer'
              }

            }}>

              <Typography sx={{
                color: '#7D0732',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '0.875rem',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}>
                Clear All Filters
              </Typography>

            </Box>
            <Box onClick={handleApplyFilters} sx={{
              background: '#7D0732', width: '120px', height: '36px', flexShrink: 0, borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
                cursor: 'pointer'
              }
            }}>
              <Typography sx={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '0.875rem',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
              }}>
                Apply Filters
              </Typography>

            </Box>

          </div>
          </List>

         
        </div>
      </Paper>
     
    </SwipeableDrawer>
  );
};

export default FilterDrawer;



