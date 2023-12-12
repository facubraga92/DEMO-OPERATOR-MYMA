import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as MymaLogo } from "../../assets/images/myma-logo-full-color.svg";
import { ReactComponent as WelcomeText } from "../../assets/images/welcome-01.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

import CustomizedButtons from "../../components/custom-button/custom-button.component";
import { useHasBeen } from "../../hooks/useHasBeen";
import ContainerRounded from "../../styled-components/container-rounded";
import ReactGA from "react-ga4";

export const gridStyles = {
  display: "flex",
  justifyContent: "end",
  alignItems: "end",
  padding: "0 1rem",
};

export const gridFooterStyles = {
  ...gridStyles,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem",
  marginBottom: "1.5rem",
};

const Welcome = () => {
  const navigate = useNavigate();
  const { hasBeenLS } = useHasBeen();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Welcome Page",
    });
  }, []);

  useEffect(() => {
    if (hasBeenLS) navigate("/home");
  }, [hasBeenLS, navigate]);

  const handleNext = () => navigate("/onboarding");

  return (
    <ContainerRounded bgColor="beige">
      <Grid container>
        <Grid item xs={12} sx={gridStyles}>
          <div>
            <div style={{ padding: "1rem" }}>
              <MymaLogo />
            </div>
            {/* <Typography
              color="secondary.light"
              variant="h6"
              sx={{ width: "min-content" }}
            >
              Augmented Phygital
            </Typography> */}
            <Typography
              color="secondary.light"
              variant="h6"
              sx={{
                fontWeight: "bolder",
                marginTop: "1.25rem",
                textAlign: "center",
              }}
            >
              Grab and Enjoy
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            ...gridStyles,
            alignItems: "center",
          }}
        >
          <WelcomeText />
        </Grid>
        <Grid item xs={12} sx={gridFooterStyles}>
          <CustomizedButtons label={"Siguiente"} handleClick={handleNext}>
            <ArrowRight />
          </CustomizedButtons>
        </Grid>
      </Grid>
    </ContainerRounded>
  );
};

export default Welcome;
