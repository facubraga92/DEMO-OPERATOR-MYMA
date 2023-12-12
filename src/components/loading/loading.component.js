import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as MymaLogo } from "../../assets/images/myma-logo-full-color.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SignalRContext } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { setOrderID } from "../../store/features/order/orderSlice";
import { createOrder } from "../../services/order.service";
// import { getProductsPromo } from "../../services/product.service";
import OpenDoor from "../../pages/open-door/open-door.component";
import { getCustomerCards } from "../../services/customer.service";

const Loading = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId } = useSelector((state) => state.order);
  const { customerCardsData, customerStatus } = useSelector(
    (state) => state.customer
  );
  const [hasCreatedOrder, setHasCreatedOrder] = useState(false);
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({});
  const [shouldCreateOrder, setShouldCreateOrder] = useState(false);
  const [orderStarted, setOrderStarted] = useState(false);

  SignalRContext.useSignalREffect(
    "OrderStarted",
    (message) => {
      console.log("OrderStarted", message);
      dispatch(setOrderID(message.orderId));
      setOrderStarted(true);
      navigate("/order-created-success");
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

  useEffect(() => {
    const storeId = searchParams.get("storeId") || "";
    const cardId = searchParams.get("cardId") || "";
    setParams({ storeId, cardId });
  }, [searchParams]);

  useEffect(
    () => {
      if (customerStatus === "succeeded") {
        dispatch(getCustomerCards());
      }
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    const storeId = params.storeId;
    const cardId = params.cardId;

    //Provisory call to set Promotional Products for the current storeId.
    // if (storeId) {
    //   dispatch(getProductsPromo({ storeId: storeId }));
    // }
    //

    const createOrderCall = async () => {
      const order = await createOrder({ storeId, cardId });
      setHasCreatedOrder(false);
      if (order.status === 500) {
        navigate("/order-cancelled");
      }
    };

    if (!customerCardsData) return;

    const cardSelected = customerCardsData.find(
      (card) => card.id === parseInt(cardId)
    );
    if (!cardSelected || hasCreatedOrder) return;

    const shouldCreateOrder = storeId && cardSelected.token && !orderId;

    if (shouldCreateOrder && !orderStarted) {
      SignalRContext.on();
      createOrderCall();
      setShouldCreateOrder(true);
      setHasCreatedOrder(true);
    }
    // eslint-disable-next-line
  }, [customerCardsData]);

  return (
    <>
      {shouldCreateOrder && !orderStarted ? (
        <OpenDoor />
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              justifyItems: "center",
              gap: "30px",
            }}
          >
            <MymaLogo sx={{}} />
            <CircularProgress color="secondary" />
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Loading;
