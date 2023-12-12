import { Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as GrabIcon } from "../../assets/images/grab-icon.svg";
import { SignalRContext } from "../..";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../services/utils";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const OrderCreatedSuccess = () => {
  const navigate = useNavigate();
  const {
    authData: { access_token },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Order Created Success Page",
    });
  }, []);

  SignalRContext.useSignalREffect(
    "OrderFeedbackRequest",
    (message) => {
      console.log("OrderFeedbackRequest", message);
      navigate("/order-success");
    },
    []
  );

  SignalRContext.useSignalREffect(
    "OrderCancelled",
    (message) => {
      console.log("OrderCancelled", message);
      navigate("/order-cancelled");
    },
    []
  );

  return (
    <SignalRContext.Provider
      connectEnabled={!!access_token}
      accessTokenFactory={() => access_token}
      dependencies={[access_token]}
      url={`${BASE_URL}/storeHub`}
    >
      <ContainerScreen bgColor="primary" sx={{ position: "relative" }}>
        <Grid
          container
          flexDirection="column"
          sx={{ justifyContent: "center" }}
        >
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
            <GrabIcon />
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
              Retirá el producto que quieras comprar
            </Typography>
          </Grid>
        </Grid>
      </ContainerScreen>
    </SignalRContext.Provider>
  );
};

export default OrderCreatedSuccess;
