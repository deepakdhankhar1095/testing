import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SubEventCard from "../components/SubEventCard";
import unBox from "../assets/footer/unBox.svg";
import { Stack, Box, Typography, useMediaQuery } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { data } from "../components/dummyData";
import titleToSlug from "../utils/titleToSlug";
import Navbar from "../components/Navbar";
import axios from "axios"
const SubEventPage = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [subEvent, setSubEvent] = useState({});
  const handleSearchSubmit = (data) => {
    navigate(`/searchEvent`, { state: data });
  };

  const location = useLocation()
  const { state } = location;

  useEffect(() => {
    const url = `https://ec2.unboxingblr.com/get-vertical`;

    const data = {
      id: state,
    };

    axios.post(url,data)
      .then(response => {
        setSubEvent(response.data.vertical)
        console.log(subEvent)
      })
      .catch(error => {
        console.error('Error making GET request:', error);
      });
      
      window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let res = data.filter((res) => {
      return titleToSlug(res.title) === title;
    });

    setSubEvent(res[0]);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateRows: "1fr auto", minHeight: "100vh",backgroundColor: "#fdf7ed" }}>
      <div style={{ backgroundColor: "#fdf7ed" }}>
      <Navbar pathName={'SearchEvent'}/>
        {/* event details */}
        <Stack
          marginTop={{xs:'80px',sm:'90px'}}
          direction={"column"}
          gap="0.5rem"
          paddingBottom="40px"
          paddingTop={"0.38rem"}
        >
          <Typography
            color="#231656"
            textAlign="center"
            fontFamily="Satoshi"
            fontSize={{ xs: "1.5rem", sm: "2.25rem" }}
            fontStyle="normal"
            fontWeight="900"
            lineHeight="normal"
          >
            {subEvent?.name ?? ""}
          </Typography>
          <Typography
            color="#231656"
            textAlign="center"
            fontFamily="Inter"
            fontSize={{ xs: "1rem", sm: "1.25rem" }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="153.023%"
          >
            {subEvent?.tags ?? ""}
          </Typography>
        </Stack>
        <SubEventCard data={subEvent?.organizations ?? []} />

      </div >
      {/* for now */}
      <Box
        sx={{
          display: 'flex',
          width: {xs:'90%',sm:'60%',md:'35%'},
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
        onClick={()=>handleSearchSubmit(subEvent?.name)}
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
          View All  {subEvent?.name ?? ""} Events
        </Typography>

      </Box>
      <Footer />

    </div>
  );
};

export default SubEventPage;
