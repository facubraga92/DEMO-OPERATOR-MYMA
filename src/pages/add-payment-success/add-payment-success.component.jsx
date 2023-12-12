import { Box, Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as PaymentSuccessIcon } from "../../assets/images/payment-success.svg";
import { ReactComponent as ProfileIcon } from "../../assets/images/profile-icon.svg";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const AddPaymentSuccess = () => {
  const {
    customerData: { nickName },
  } = useSelector((state) => state.customer);

  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Add Card Success Page",
    });
  }, []);
  return (
    <ContainerScreen bgColor="green">
      <Grid container flexDirection="column" sx={{ flexWrap: "nowrap" }}>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            width: "60%",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            color="#FFF"
            sx={{
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            ¡Ya estás listo para comprar!
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            width: "70%",
            margin: "0 auto",
          }}
        >
          <PaymentSuccessIcon />
          <Typography
            variant="body1"
            color="#FFF"
            sx={{
              marginTop: "15px",
              textAlign: "center",
              fontWeight: 800,
              width: "80%",
            }}
          >
            {`${nickName}`}, tu método de pago se ha integrado de forma exitosa
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            width: "60%",
            margin: "0 auto",
          }}
        >
          <Box
            display="flex"
            marginBottom="15px"
            sx={{ justifyContent: "center" }}
          >
            <ProfileIcon style={{ transform: "scale(1.4)" }} width="56" />
            <Typography variant="caption" textAlign="center" color="#FFF">
              Si necesitas cambiar tus datos, hacelo desde “Mi Perfil”.
            </Typography>
          </Box>
          <CustomizedButtons
            label={"Ir a Inicio"}
            color="white"
            handleClick={() => navigate("/home")}
          />
        </Grid>
      </Grid>
    </ContainerScreen>
  );
};

export default AddPaymentSuccess;
