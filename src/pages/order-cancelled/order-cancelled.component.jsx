import { Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as WarningIcon } from "../../assets/images/warning-icon.svg";
import { useNavigate } from "react-router-dom";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderID } from "../../store/features/order/orderSlice";
import { SignalRContext } from "../..";
import ReactGA from "react-ga4";

const OrderCancelled = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Order Cancelled Page",
    });
  }, []);

  useEffect(() => {
    dispatch(setOrderID(""));
    SignalRContext.off();
  }, [dispatch]);

  return (
    <ContainerScreen bgColor="red">
      <Grid container flexDirection="column" sx={{ justifyContent: "center" }}>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="body1"
            color="#FFF"
            sx={{
              marginTop: "15px",
              marginBottom: "45px",
              textAlign: "center",
              fontWeight: 800,
              width: "80%",
            }}
          >
            Orden Cancelada!
          </Typography>

          <WarningIcon />
          <Typography
            variant="body2"
            color="#FFF"
            sx={{
              marginTop: "15px",
              marginBottom: "45px",
              textAlign: "center",
              fontWeight: 800,
              width: "80%",
            }}
          >
            No abriste la puerta a tiempo. Por favor, volvé a escanear el código
            para empezar otra vez.
          </Typography>
          <Grid item sx={{ width: "100%" }}>
            <CustomizedButtons
              label={"Entendido"}
              color="white"
              handleClick={() => navigate("/home")}
            />
          </Grid>
        </Grid>
      </Grid>
    </ContainerScreen>
  );
};

export default OrderCancelled;
