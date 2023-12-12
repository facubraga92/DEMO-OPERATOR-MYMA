import { Grid, Paper, Typography } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { ReactComponent as RegularFeedback } from "../../assets/images/regular-feedback.svg";
import { ReactComponent as NegativeFeedback } from "../../assets/images/negative-feedback.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getFeedbackOptions,
  sendFeedback,
} from "../../services/feedback.service";
import { setOrderID } from "../../store/features/order/orderSlice";
import { SignalRContext } from "../..";
import FeedbackModal from "../../components/feedback-modal/feedback-modal.component";
import ReactGA from "react-ga4";

const commonStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
};

const gridContainerStyles = {
  flexDirection: "column",
  textAlign: "center",
  maxWidth: "361px",
  margin: "0 auto",
  flexWrap: "nowrap",
};

const Feedback = () => {
  const [openCvvModal, setOpenCvvModal] = useState(false);

  const { feedbackOptionsData } = useSelector((state) => state.feedback);
  const { orderID } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: feedbackTypeID } = useParams();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Feedback Page",
    });
  }, []);

  useEffect(() => {
    dispatch(getFeedbackOptions());
  }, [dispatch]);

  // useEffect(() => {
  //   if (sendFeedbackStatus === "succeeded") {
  //     dispatch(setOrderID(null));
  //     SignalRContext.off();
  //     setTimeout(() => navigate("/home"), 2000);
  //   }
  // }, [dispatch, sendFeedbackStatus, navigate]);

  const handleFeedbackOption = async (feedbackID) => {
    await dispatch(sendFeedback({ orderID, feedbackTypeID, feedbackID }));
    await dispatch(setOrderID(null));
    await SignalRContext.off();
    await setOpenCvvModal(true);
    await setTimeout(() => navigate("/home"), 2000);
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
            ...commonStyles,
            justifyContent: "center",
          }}
        >
          {feedbackTypeID === "1" && <RegularFeedback />}
          {feedbackTypeID === "2" && <NegativeFeedback />}
          <Typography
            variant="h6"
            color="#FFF"
            sx={{
              fontWeight: "bold",
              width: "180px",
              marginTop: "16px",
            }}
          >
            Danos tu feedback para poder mejorar
          </Typography>
        </Grid>
        <Grid item sm={12} sx={{ ...commonStyles, flex: 2 }}>
          <Paper
            sx={{
              width: "100%",
              minHeight: "90%",
              borderRadius: "30px",
              padding: "25px 30px",
              marginBottom: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#5A5956",
              }}
            >
              ¿Algo salió mal?
            </Typography>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
              }}
            >
              {feedbackOptionsData.map((option) => (
                <li
                  style={{
                    border: "1px solid #5A5956",
                    borderRadius: "44px",
                    padding: "19px 0",
                  }}
                  key={option.id}
                  onClick={() => handleFeedbackOption(option.id)}
                >
                  {option.name}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <FeedbackModal onClose={setOpenCvvModal} open={openCvvModal} />
    </ContainerScreen>
  );
};

export default Feedback;
