import { useNavigate } from "react-router-dom";
import { Grid, Typography, styled } from "@mui/material";

// import { ReactComponent as LogoutIcon } from "../../assets/images/logout-icon.svg";
import { ReactComponent as AlertsIcon } from "../../assets/images/notifications-icon.svg";

import { ReactComponent as HomeIcon } from "../../assets/images/home-icon.svg";
import { ReactComponent as ExperimentsIcon } from "../../assets/images/erlenmeyer-icon.svg";
import { ReactComponent as VendingMachineIcon } from "../../assets/images/vending-icon.svg";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import { authLogout } from "../../services/auth.service";

const FooterContainer = styled("div")((props) => {
  return {
    width: "100%",
    maxWidth: "calc(600px - 48px)",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#F8F8F8",
    borderRadius: "20px 20px 0 0",
    border: "solid 2px white",
    borderBottom: "none",
    padding: "10px 10px",
    display: "flex",
    justifyContent: "space-between",
  };
});

const FooterButtons = styled("div")((props) => {
  return {
    width: 46,
    height: 46,
    border: props.main ? "1px solid #FFF" : "none",
    borderRadius: "50%",
    backgroundColor: props.active ? "#fff" : "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    "& svg": {
      fill: props.active ? props.theme.palette.purple.main : "#8C8C8C",
    },
  };
});

const Footer = ({ activeIconID }) => {
  const navigate = useNavigate();

  const handleButtonClick = (eventName) => {
    switch (eventName) {
      case "home":
        navigate("/home");
        break;
      case "machines":
        navigate("/machines");
        break;
      case "experiments":
        navigate("/experiments");
        break;
      case "cards":
        navigate("/cards");
        break;
      case "insights":
        authLogout();
        break;
      default:
    }
  };

  return (
    <FooterContainer>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <FooterButtons
            className="joyride-step1"
            active={0 === activeIconID}
            onClick={() => handleButtonClick("home")}
          >
            <HomeIcon />
          </FooterButtons>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: activeIconID === 0 ? "#663B73" : "#8C8C8C",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Portfolio
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <FooterButtons
            className="joyride-step2"
            active={1 === activeIconID}
            onClick={() => handleButtonClick("machines")}
          >
            <VendingMachineIcon height="26px" />
          </FooterButtons>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: activeIconID === 1 ? "#663B73" : "#8C8C8C",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Máquinas
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <FooterButtons
            className="joyride-step3"
            // main
            active={2 === activeIconID}
            onClick={() => handleButtonClick("experiments")}
          >
            <ExperimentsIcon fontSize="large" />
          </FooterButtons>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: activeIconID === 2 ? "#663B73" : "#8C8C8C",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Experimentos
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <FooterButtons
            className="joyride-step4"
            active={3 === activeIconID}
            onClick={() => handleButtonClick("cards")}
          >
            <AlertsIcon />
          </FooterButtons>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              color: activeIconID === 3 ? "#663B73" : "#8C8C8C",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Alertas
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <FooterButtons
            className="joyride-step5"
            active={4 === activeIconID}
            onClick={() => handleButtonClick("insights")}
          >
            <InsightsOutlinedIcon fontSize="large" />
          </FooterButtons>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: activeIconID === 4 ? "#663B73" : "#8C8C8C",
              fontWeight: "bold",
            }}
            variant="caption"
          >
            Insights
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
