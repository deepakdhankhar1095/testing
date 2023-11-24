import { Box, Stack, Typography } from "@mui/material";
import ConfettiSvg from "./svgcomponents/ConfettiSvg";
import ExploreSectionCard from "./ExploreSectionCard";
import Frame from "../assets/Frame404.png";
import des from "../assets/FigmaMotif21.png";
import flowerhalf from "../assets/flowerhalf.svg";
import flower from "../assets/flower.svg";
import churumuri from "../assets/homePageCard/churumuri.webp";
import craftsMela from "../assets/homePageCard/craftsMela.webp";
import designMantapa from "../assets/homePageCard/designMantapa.webp";
import golfMaidana from "../assets/homePageCard/golfMaidana.webp";
import kalaKoota from "../assets/homePageCard/kalaKoota.webp";
import litNagara from "../assets/homePageCard/litNagara.webp";
import ootaAaita from "../assets/homePageCard/ootaAaita.webp";
import rangaKatte from "../assets/homePageCard/rangaKatte.webp";
import techHalli from "../assets/homePageCard/techHalli.webp";
import walksPopuli from "../assets/homePageCard/walksPopuli.webp";
import publicjaaga from "../assets/homePageCard/publicJaaga.webp";
import hasiru from "../assets/homePageCard/hasiruCity.webp";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    imgUrl: techHalli,
    title: "Tech Halli",
    subTitle: "Ideas & Innovation",
  },
  {
    id: 2,
    imgUrl: litNagara,
    title: "Lit Nagara",
    subTitle: "Books, Authors, Readers & More...",
  },
  {
    id: 3,
    imgUrl: kalaKoota,
    title: "Kala Koota",
    subTitle: "Visual Arts",
  },
  {
    id: 4,
    imgUrl: rangaKatte,
    title: "Ranga Katte",
    subTitle: "Music, Theatre, Dance & More...",
  },
  {
    id: 5,
    imgUrl: walksPopuli,
    title: "Walks Populi",
    subTitle: "City trails",
  },
  {
    id: 6,
    imgUrl: ootaAaita,
    title: "Thindi Puram",
    subTitle: "Food & Beverages",
  },
  {
    id: 7,
    imgUrl: craftsMela,
    title: "Crafts Mela",
    subTitle: "Handmade",
  },
  {
    id: 8,
    imgUrl: designMantapa,
    title: "Design Mantapa",
    backgrondCss: "lightgray 1.045px -88.494px / 288.369% 152.426% no-repeat",
    subTitle: "Artists & Makers",
  },
  {
    id: 9,
    imgUrl: golfMaidana,
    title: "Green Maidana",
    subTitle: "Tee off",
  },
  {
    id: 10,
    imgUrl: churumuri,
    title: "Churumuri",
    subTitle: "Conversations, Arts, Crafts & Culture",
  },
  {
    id: 11,
    imgUrl: publicjaaga,
    title: "Public Jaaga",
    subTitle: "Urban Commons",
  },
  {
    id: 12,
    imgUrl: hasiru,
    title: "Hasiru City",
    subTitle: "Green & Blue",
  },
];



const ExploreSection = () => {

  const navigate = useNavigate();
  const [allVerticles, setAllVerticels] = useState([])

  const handleSearchEvents = () => {
    navigate(`/searchEvent`)
  };
  // useEffect(() => {
  //   handleData()
  // }, [])

  useEffect(() => {
    const url = 'https://ec2.unboxingblr.com/get-all-verticals';

    const data = {
      id: '2ba1425f-09bb-4655-aae9-7163413b514e',
    };

    axios.get(url)
      .then(response => {
        setAllVerticels(response.data.verticals);
        console.log(response.data.verticals)
      })
      .catch(error => {
        console.error('Error making GET request:', error);
      });
  }, []);

  return (
    <Box
      sx={{
        // paddingTop: { xs: "55px", sm: "94px" },
        backgroundColor:
          "linear-gradient(180deg, rgba(235, 150, 1, 0.08) 0%, rgba(235, 150, 1, 0.00) 100%)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "295px",
          left: "0px",
          width: { xs: "218px", sm: "431px" },
          height: "474px",
          background: `url(${flowerhalf})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          // opacity: "0.08",
        }}
      ></Box>

      <Box
        sx={{
          width: { xs: "218px", sm: "431px" },
          height: "474px",
          position: "absolute",
          top: "930px",
          right: "0",
          backgroundRepeat: "no-repeat",
          backgroundImage: { xs: `url(${flower})`, sm: `url(${flower})` },
          backgroundPosition: { xs: "110px", sm: "290px" },
          backgroundClip: "border-box",
          // opacity: "0.08",
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" alignItems="center" gap="12px">
          <ConfettiSvg />
          <Typography
            variant="h1" // Use the appropriate variant for your use case
            sx={{
              color: "#231656",
              fontFamily: "Satoshi",
              fontSize: { xs: "24px", md: "50px" },
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "normal",
            }}
          >
            Explore all Events
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "#231656",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: { xs: "14px", sm: "20px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "153.023%",
          }}
        >
          {" "}
          Your gateway to the soul of Namma Bengaluru
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          maxWidth: "964px",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          gap: "32px",
          flexWrap: "wrap",
          margin: { xs: "55px auto 0 auto", sm: "100px auto 0 auto" },
        }}
      >
        {allVerticles.length > 0 &&
          allVerticles.map((res) => <ExploreSectionCard key={res.name} {...res} />)}
      </Box>
      <Box width="100%"
        display="flex" justifyContent={"center"} alignItems={"center"}>
          {/* for now */}
        <Box
          sx={{
            display: 'flex',
            width: { xs: '90%', sm: '60%', md: '35%' },
            height: '55px',
            padding: '18px 0px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            borderRadius: '12px',
            background: '#F6DBC0',
            justifySelf: 'center',
            marginTop: '50px',
            '&:hover': {
              cursor: 'pointer', 
            },
           
          }}
          onClick={()=>handleSearchEvents()}
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
            View All Events
          </Typography>

        </Box>

      </Box>
    </Box>
  );
};

export default ExploreSection;
