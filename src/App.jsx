import { createTheme } from "@mui/material";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Satoshi", "Inter"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
