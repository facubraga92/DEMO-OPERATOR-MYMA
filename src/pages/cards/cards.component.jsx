import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "react-swipeable-list/dist/styles.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType,
} from "react-swipeable-list";

import { ReactComponent as BackIcon } from "../../assets/images/back-icon.svg";
import { ReactComponent as CardIcon } from "../../assets/images/card-icon.svg";

import Header from "../../components/header/header.component";
import CustomizedButtons from "../../components/custom-button/custom-button.component";

import { SUCCEEDED } from "../../constants";

import { getCustomerCards } from "../../services/customer.service";
import CvvModal from "../../components/cvv-modal/cvv-modal.component";
import { deleteCard } from "../../services/card.services";
import Footer from "../../components/footer/footer.component";
import ReactGA from "react-ga4";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [storeId, setStoreId] = useState();
  const [cardSelected, setCardSelected] = useState();
  const [openCvvModal, setOpenCvvModal] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);

  const { customerCardsData, customerCardsStatus } = useSelector(
    (state) => state.customer
  );

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Cards Page",
    });
  }, []);

  useEffect(
    () => {
      const storeIdParams = searchParams.get("storeId") || "";
      setStoreId(storeIdParams);
      dispatch(getCustomerCards());
    },
    // eslint-disable-next-line
    [searchParams]
  );

  useEffect(() => {
    if (
      customerCardsStatus === SUCCEEDED &&
      Array.isArray(customerCardsData) &&
      !customerCardsData.length
    ) {
      navigate("/add-credit-card");
    }
  }, [customerCardsData, customerCardsStatus, navigate]);

  const handleDelete = (card) => {
    setCardSelected(card);
    setConfirmDeleteDialogOpen(true);
  };

  const trailingActions = (card) => (
    <TrailingActions>
      <SwipeAction destructive={false} onClick={() => handleDelete(card)}>
        <Paper
          sx={{
            padding: "0.61rem",
            margin: "0.25rem",
            marginLeft: 0,
            display: "flex",
            width: "80px",
            backgroundColor: "red.main",
            color: "white.main",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <DeleteOutlinedIcon fontSize="large" />
        </Paper>
      </SwipeAction>
    </TrailingActions>
  );

  const handleCardSelected = (card) => {
    const { token } = card;

    if (!storeId) return;
    setCardSelected(card);

    if (token) {
      navigate(`/loading?storeId=${storeId}&cardId=${card.id}`);
    } else {
      setOpenCvvModal(true);
    }
  };

  return (
    <>
      <Dialog
        open={confirmDeleteDialogOpen}
        onClose={() => setConfirmDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar esta tarjeta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setConfirmDeleteDialogOpen(false)}
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={async () => {
              setConfirmDeleteDialogOpen(false);
              await dispatch(deleteCard(cardSelected.id));
              dispatch(getCustomerCards());
            }}
            color="primary"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ height: "100%", backgroundColor: "primary.main" }}>
        <Header title={"Métodos de pago"} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - 125px)`,
            overflow: "hidden",
          }}
        >
          <BackIcon
            style={{
              zIndex: 1,
              margin: "1.25rem",
            }}
            onClick={() => navigate("/home")}
          />
          <Grid
            container
            sx={{
              justifyContent: "center",
              flex: 1,
              padding: " 0 1.25rem",
            }}
          >
            <Grid item sx={{ width: "100%" }}>
              {customerCardsData &&
                customerCardsData.map((card) => (
                  <SwipeableList
                    key={card.id}
                    fullSwipe={false}
                    type={ListType.IOS}
                    style={{ height: "auto" }}
                  >
                    <SwipeableListItem trailingActions={trailingActions(card)}>
                      <Paper
                        onClick={() => handleCardSelected(card)}
                        sx={{
                          padding: "1rem",
                          margin: "0.25rem",
                          marginRight: "1px",
                          display: "flex",
                          width: "100%",
                          borderRadius: "12px",
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <Typography variant="body1" gutterBottom>
                            {card?.paymentMethod?.name}
                          </Typography>
                          <Typography variant="caption">
                            XXXX-XXXX-XXXX-
                            {card.lastFourDigits}
                          </Typography>
                        </div>
                      </Paper>
                    </SwipeableListItem>
                  </SwipeableList>
                ))}
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              padding: "1rem 1.25rem 2rem",
              backgroundColor: "inherit",
            }}
          >
            <CustomizedButtons
              label={"Agregar Tarjeta"}
              variant="contained"
              color={"green"}
              sx={{ flexDirection: "row-reverse" }}
              handleClick={() =>
                navigate(`/add-credit-card?storeId=${storeId}`)
              }
            >
              <CardIcon />
            </CustomizedButtons>
          </Grid>
        </Box>
        <Footer activeIconID={3} />
      </Box>
      <CvvModal
        onClose={setOpenCvvModal}
        open={openCvvModal}
        cardData={cardSelected}
        storeId={storeId}
      />
    </>
  );
};

export default Cards;
