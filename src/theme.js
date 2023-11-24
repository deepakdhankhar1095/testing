import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 370, // Extra-small screen size
      sm: 600, // Small screen size
      md: 960, // Medium screen size
      lg: 1280, // Large screen size
      xl: 1560, // Extra-large screen size
      xll: 1920, // Extra-large screen size
      xxl: 2560, // Extra-large screen size
    },
  },
});

export default theme;
