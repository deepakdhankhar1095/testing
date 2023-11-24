import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ArrowLeftSvg from "../components/svgcomponents/ArrowLeftSvg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import titleToSlug from "../utils/titleToSlug";
import theme from "../theme";
// eslint-disable-next-line react/prop-types
const ExploreSectionCard = ({ thumbnail, name, tags,id }) => {
  const navigate = useNavigate();
  const handleCard = () => {
    
    navigate(`/subevent/${titleToSlug(name)}`, {state:id});
  };
  const [isHovered, setIsHovered] = useState(false);
  const isExtraExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Box
        sx={{
          width: isExtraExtraSmallScreen
            ? "250px"
            : { xs: "353px", sm: "300px" },
          position: "relative",
          height: { xs: "192px", sm: "386px" },
          borderRadius: "20px",
          background: {
            sm: `url(${thumbnail}) 50% / cover no-repeat`,
            xs: `url(${thumbnail}) 50% / cover no-repeat`,
          },
          backgroundColor: "lightgray",
          cursor: isHovered ? 'pointer' : 'default'
        }}
        onClick={handleCard}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            width: isExtraExtraSmallScreen ? "100%" : "100%",
            height: { xs: "192px", sm: "386px" },
            background: {
              xs: "linear-gradient(180deg, rgba(41, 0, 15, 0.00) 18.73%, #29000F 106.59%)",
              sm: "linear-gradient(180deg, rgba(41, 0, 15, 0.00) 18.73%, #29000F 106.59%)",
            },
            borderRadius: "20px",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "24px",
            left: "20px",
            display: "flex",
            "@media (max-width:580px)": {
              bottom: "24px",
              alignItems: "center",
            },
          }}
        >
          <Stack gap="6px">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="h4"
                sx={{
                  width: isExtraExtraSmallScreen ? "190px" : { xs: "242px" },
                  color: "#FFF",
                  fontFamily: "Inter",
                  fontSize: { xs: "18px", sm: "24px" },
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "137.023%",
                  "@media (max-width:600px)": {
                    width: isExtraExtraSmallScreen ? "190px" : "283px",
                    height: "auto",
                  },
                }}
              >
                {name}
              </Typography>
              <ArrowLeftSvg />
            </Stack>
            <Typography
              variant="h5"
              sx={{
                color: "#FFF",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "137.023%",
                textTransform: "capitalize",
              }}
              display={{ xs: "block", sm: isHovered ? "block" : "none" }}
            >
              {tags}
            </Typography>
            <Box display={{ xs: "none", sm: isHovered ? "block" : "none" }}>
              <Stack direction="row" alignItems="flex-start" gap="0.5625rem">
                <Box
                  style={{
                    width: "6.625rem",
                    height: "0.3125rem",
                    borderRadius: "0.75rem",
                    background: "var(--Warm-Yellow, #FDD503)",
                  }}
                ></Box>
                <Box
                  style={{
                    width: "1.25rem",
                    height: "0.3125rem",
                    borderRadius: "0.75rem",
                    background: "var(--Warm-Yellow, #FDD503)",
                  }}
                ></Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
export default ExploreSectionCard;
