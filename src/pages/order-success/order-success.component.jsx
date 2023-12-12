import { Grid, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as PaymentSuccessIcon } from "../../assets/images/payment-success.svg";
import { ReactComponent as PositiveFeedback } from "../../assets/images/positive-feedback.svg";
import { ReactComponent as RegularFeedback } from "../../assets/images/regular-feedback.svg";
import { ReactComponent as NegativeFeedback } from "../../assets/images/negative-feedback.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOrderID } from "../../store/features/order/orderSlice";
import { sendFeedback } from "../../services/feedback.service";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const commonStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
};

const gridContainerStyles = {
  textAlign: "center",
  maxWidth: "323px",
  margin: "0 auto",
};
const OrderSuccess = () => {
  const { orderID } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Order Success Page",
    });
  }, []);

  const handleFeedbackClick = async (feedback) => {
    switch (feedback) {
      case "regular_feedback":
        navigate("/feedback/1", { state: { reset: true } });
        break;
      case "negative_feedback":
        navigate("/feedback/2", { state: { reset: true } });
        break;
      default:
        await dispatch(sendFeedback({ orderID }));
        await dispatch(setOrderID(null));
        navigate("/home", { state: { reset: true } });
        break;
    }
  };

  return (
    <ContainerScreen
      bgColor="green"
      sx={{ position: "initial", height: "100vh" }}
    >
      <Grid container sx={gridContainerStyles}>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Typography
            variant="h4"
            color="#FFF"
            sx={{
              fontWeight: 800,
            }}
          >
            ¡Tu compra ha sido procesada con éxito!
          </Typography>
        </Grid>
        <Grid item sm={12} sx={commonStyles}>
          <PaymentSuccessIcon />
        </Grid>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Grid
            item
            sm={12}
            sx={{
              ...commonStyles,
              justifyContent: "start",
            }}
          >
            <Typography
              variant="h6"
              color="#FFF"
              sx={{
                fontWeight: "bold",
              }}
            >
              Danos tu feedback para poder mejorar
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            sx={{
              ...commonStyles,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "start",
            }}
          >
            <PositiveFeedback
              onClick={() => handleFeedbackClick("positive_feedback")}
            />
            <RegularFeedback
              onClick={() => handleFeedbackClick("regular_feedback")}
            />
            <NegativeFeedback
              onClick={() => handleFeedbackClick("negative_feedback")}
            />
          </Grid>
        </div>
      </Grid>
    </ContainerScreen>
  );
};

export default OrderSuccess;
