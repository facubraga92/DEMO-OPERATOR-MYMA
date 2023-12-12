import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import SplashScreen from "../spash-screen/splash-screen.component";
import "./layout.css";

const Layout = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1200);
  }, []);

  return (
    <Box sx={{ height: "100vh" }}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          maxWidth="sm"
          className={`splash-container ${splash ? "visible" : "hidden"}`}
        >
          <SplashScreen splash={splash} />
        </Box>
        <Box
          maxWidth="sm"
          sx={{
            height: "100%",
            overflowY: "visible",
            display: "flex",
            flexDirection: "column",
          }}
          className={`content-container ${splash ? "hidden" : "visible"}`}
        >
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
