// import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

import ProductsCarousel from "../../components/products-carousel/products-carousel.component";
import PromoCarousel from "../../components/promo-carousel/promo-carousel.component";
import { getProducts, getProductsPromo } from "../../services/product.service";
// import { setOrderID } from "../../store/features/order/orderSlice";

import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
// import { getCustomerCards } from "../../services/customer.service";
// import { createOrder } from "../../services/order.service";
// import { SignalRContext } from "../..";
import JoyrideTutorial from "../../utils/joyRideTutorial";
import ReactGA from "react-ga4";
import { getCustomerCards } from "../../services/customer.service";
import { getStore } from "../../services/store.service";

const HomeBody = ({ storeId, cardId }) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { orderId } = useSelector((state) => state.order);
  // const { customerCardsData } = useSelector((state) => state.customer);
  // const [hasCreatedOrder, setHasCreatedOrder] = useState(false);

  // SignalRContext.useSignalREffect(
  //   "OrderStarted",
  //   (message) => {
  //     console.log("OrderStarted", message);
  //     dispatch(setOrderID(message.orderId));
  //     navigate("/order-created-success");
  //   },
  //   []
  // );

  // SignalRContext.useSignalREffect(
  //   "OrderCancelled",
  //   (message) => {
  //     console.log("OrderCancelled", message);
  //     navigate("/order-cancelled");
  //   },
  //   []
  // );

  // useEffect(() => {
  //   const createOrderCall = async () => {
  //     const order = await createOrder({ storeId, cardId });
  //     setHasCreatedOrder(false);
  //     if (order.status === 500) {
  //       navigate("/order-cancelled");
  //     }
  //   };

  //   if (!customerCardsData) return;

  //   const cardSelected = customerCardsData.find(
  //     (card) => card.id === parseInt(cardId)
  //   );
  //   if (!cardSelected || hasCreatedOrder) return;

  //   const shouldCreateOrder = storeId && cardSelected.token && !orderId;

  //   if (shouldCreateOrder) {
  //     SignalRContext.on();
  //     createOrderCall();
  //     setHasCreatedOrder(true);
  //   }
  // }, [
  //   cardId,
  //   customerCardsData,
  //   dispatch,
  //   hasCreatedOrder,
  //   navigate,
  //   orderId,
  //   storeId,
  // ]);

  const [runTutorial, setRunTutorial] = useState(false);
  return (
    <>
      <JoyrideTutorial runTutorial={runTutorial} />
      <Header
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "normal" }}>Mi</div>
            <div style={{ fontWeight: "bold" }}>&nbsp;Portfolio</div>
          </div>
        }
        setRunTutorial={setRunTutorial}
        runTutorial={runTutorial}
      />
      <Box
        sx={{
          height: "100%",
          marginBottom: "76px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Grid container>
          <Grid item xs={12} marginBottom="1rem">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                margin: "10px 0 0 15px",
                color: "pink.main",
              }}
            >
              Promociones
            </Typography>
            <PromoCarousel />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                margin: "10px 0 0 15px",
                color: "grey.main",
              }}
            >
              Catálogo de Precios
            </Typography>
            <ProductsCarousel />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // const [params, setParams] = useState({});
  const { getProductsStatus, getProductsPromoStatus } = useSelector(
    (state) => state.products
  );
  const { customerCardsStatus } = useSelector((state) => state.customer);
  const { storeStatus } = useSelector((state) => state.store);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Home Page",
    });
  }, []);

  useEffect(() => {
    const setStoreId = async () => {
      try {
        const storeId = await localStorage.getItem("storeId");

        const isValidStoreId = storeId && storeId !== "null" && storeId !== "";

        if (getProductsPromoStatus === "idle") {
          dispatch(
            getProductsPromo(isValidStoreId ? { storeId } : { storeId: 0 })
          );
        }
        if (getProductsStatus === "idle") {
          dispatch(getProducts(isValidStoreId ? { storeId } : { storeId: 0 }));
        }
        if (customerCardsStatus === "idle") {
          dispatch(getCustomerCards());
        }
        if (customerCardsStatus === "idle") {
          dispatch(getCustomerCards());
        }
        if (storeStatus === "idle") {
          dispatch(getStore(isValidStoreId && { storeId }));
        }
      } catch (error) {
        // console.error(error);
      }
    };

    setStoreId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const storeId = searchParams.get("storeId") || "";
  //   setParams({ storeId });
  // }, [searchParams]);

  // useEffect(
  //   () => {
  //     if (getProductsPromoStatus === "idle") {
  //       dispatch(getProductsPromo({ storeId: params.storeId }));
  //     }
  //     if (getProductsStatus === "idle") {
  //       dispatch(getProducts());
  //     }
  //     if (customerCardsStatus === "idle") {
  //       dispatch(getCustomerCards());
  //     }
  //   },
  //   // eslint-disable-next-line
  //   []
  // );

  return (
    <>
      <HomeBody />
    </>
  );
};

export default Home;
