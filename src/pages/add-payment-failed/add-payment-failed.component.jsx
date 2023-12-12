import { Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as PaymentFailedIcon } from "../../assets/images/warning-icon.svg";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const AddPaymentFailed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Add Card Failed Page",
    });
  }, []);
  return (
    <ContainerScreen bgColor="red">
      <Grid container flexDirection="column" sx={{ flexWrap: "nowrap" }}>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: "70%",
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
            Tarjeta no válida
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
          <PaymentFailedIcon />
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
            El proceso de registro no puede continuar, por favor introduzca una
            tarjeta válida
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
            width: "70%",
            margin: "0 auto",
          }}
        >
          <CustomizedButtons
            label={"Entendido"}
            color="white"
            handleClick={() => navigate(-1)}
          />
        </Grid>
      </Grid>
    </ContainerScreen>
  );
};

export default AddPaymentFailed;
