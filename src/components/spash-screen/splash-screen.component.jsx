import { Fade, Grid, Typography } from "@mui/material";
import { ReactComponent as SplashBG } from "../../assets/images/splash-bg.svg";
import { ReactComponent as MymaLogo } from "../../assets/images/myma-logo.svg";
import ContainerScreen from "../../styled-components/container-screen";

const SplashScreen = ({ splash }) => {
  return (
    <Fade in={splash}>
      <ContainerScreen bgColor="purple">
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
            <SplashBG width={"85%"} />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <MymaLogo />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="overline"
              display="block"
              align="center"
              color={"white"}
            >
              V1.0
            </Typography>
          </Grid>
        </Grid>
      </ContainerScreen>
    </Fade>
  );
};

export default SplashScreen;
