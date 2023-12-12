import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";


import { ReactComponent as LogoutIcon } from "../../assets/images/logout-icon.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/wallet-icon.svg";
// import { ReactComponent as DoorIcon } from "../../assets/images/door-icon.svg";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { ReactComponent as HomeIcon } from "../../assets/images/home-icon.svg";
import { ReactComponent as BuyIcon } from "../../assets/images/buy-icon.svg";
import { authLogout } from "../../services/auth.service";

const FooterContainer = styled("div")((props) => {
  return {
    width: "100%",
    maxWidth: "calc(600px - 48px)",
    position: "fixed",
    bottom: 0,
    backgroundColor: props.theme.palette.primary.main,
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
      fill: props.active ? "#EA572E" : "#FFF",
    },
  };
});

const Footer = ({ activeIconID = 2 }) => {
  const navigate = useNavigate();

  const handleButtonClick = (eventName) => {
    switch (eventName) {
      case "home":
        navigate("/home");
        break;
      case "purchases":
        navigate("/purchases");
        break;
      case "openDoor":
        navigate("/read-qr");
        break;
      case "cards":
        navigate("/cards");
        break;
      case "logout":
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
        onClick={() => handleButtonClick("purchases")}
      >
        <BuyIcon />
      </FooterButtons>
      <FooterButtons
        className="joyride-step3"
        main
        active={2 === activeIconID}
        onClick={() => handleButtonClick("openDoor")}
      >
        <QrCode2Icon fontSize="large" />
      </FooterButtons>
      <FooterButtons
        className="joyride-step4"
        active={3 === activeIconID}
        onClick={() => handleButtonClick("cards")}
      >
        <WalletIcon />
      </FooterButtons>
      <FooterButtons
        className="joyride-step5"
        active={4 === activeIconID}
        onClick={() => handleButtonClick("logout")}
      >
        <LogoutIcon />
      </FooterButtons>
    </FooterContainer>
  );
};

export default Footer;
