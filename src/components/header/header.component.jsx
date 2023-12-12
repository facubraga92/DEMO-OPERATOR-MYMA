import { AppBar, Grid, styled, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
const HeaderContainer = styled(AppBar)((props) => {
  return {
    width: "100%",
    backgroundColor: props.theme.palette.primary.main,
    padding: "15px 44px",
    display: "flex",
  };
});

const Header = ({ title, setRunTutorial, runTutorial }) => {
  const openWhatsApp = () => {
    var number = `${process.env.REACT_APP_WA_NUMBER}`;
    var url = "https://api.whatsapp.com/send?phone=" + number;
    window.open(url, "_blank");
  };

  return (
    <HeaderContainer position="static">
      <Grid container>
        <Grid item xs={12} sx={{}}></Grid>
        <Grid item xs={12} sx={{ display: "flex", position: "relative" }}>
          <Typography
            variant="h5"
            textAlign={"center"}
            color="#FFF"
            sx={{ width: "100%", fontWeight: 800 }}
          >
            {title}
          </Typography>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: -44,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {title === "Tienda" && (
              <div onClick={() => setRunTutorial(!runTutorial)}>
                <TipsAndUpdatesIcon style={{ margin: 10 }} />
              </div>
            )}

            <div className="joyride-step6" onClick={openWhatsApp}>
              <WhatsAppIcon style={{ margin: 10 }} />
            </div>
          </div>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
