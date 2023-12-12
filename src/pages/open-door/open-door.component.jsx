import { Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as ClockIcon } from "../../assets/images/open_door_timer.svg";

import ReactGA from "react-ga4";
import { useEffect } from "react";

const OpenDoor = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Open Door Page",
    });
  }, []);
  return (
    <ContainerScreen bgColor="purple" sx={{ position: "relative" }}>
      <Grid container flexDirection="column" sx={{ justifyContent: "center" }}>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ClockIcon />
          <Typography
            variant="body1"
            color="#FFF"
            sx={{
              marginTop: "35px",
              textAlign: "center",
              fontWeight: 800,
              width: "80%",
            }}
          >
            ¡Abrí la Heladera para comenzar tu Compra!
          </Typography>
        </Grid>
      </Grid>
    </ContainerScreen>
  );
};

export default OpenDoor;
