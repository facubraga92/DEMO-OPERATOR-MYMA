import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

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
    padding: "15px 10px",
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
    backgroundColor: props.active ? "#FFF" : "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    "& svg": {
      fill: props.active ? props.theme.palette.purple.main : "black",
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
      <FooterButtons
        className="joyride-step1"
        active={0 === activeIconID}
        onClick={() => handleButtonClick("home")}
      >
        <HomeIcon />
      </FooterButtons>
      <FooterButtons
        className="joyride-step2"
        active={1 === activeIconID}
        onClick={() => handleButtonClick("machines")}
      >
        <VendingMachineIcon />
      </FooterButtons>
      <FooterButtons
        className="joyride-step3"
        // main
        active={2 === activeIconID}
        onClick={() => handleButtonClick("experiments")}
      >
        <ExperimentsIcon fontSize="large" />
      </FooterButtons>
      <FooterButtons
        className="joyride-step4"
        active={3 === activeIconID}
        onClick={() => handleButtonClick("cards")}
      >
        <AlertsIcon />
      </FooterButtons>
      <FooterButtons
        className="joyride-step5"
        active={4 === activeIconID}
        onClick={() => handleButtonClick("insights")}
      >
        <InsightsOutlinedIcon fontSize="large" />
      </FooterButtons>
    </FooterContainer>
  );
};

export default Footer;
