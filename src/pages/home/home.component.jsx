// import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

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

import { ReactComponent as TrendLineChartIcon } from "../../assets/images/trend-line-chart.svg";
import { ReactComponent as ArrowBigGreen } from "../../assets/images/arrow-green-big.svg";

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
          <Grid
            item
            xs={12}
            sx={{
              marginInline: "1rem",
              marginBlock: "1rem",
              display: "flex",
              flexDirection: "column",
              width: "350px",
              height: "auto",
            }}
          >
            <Paper sx={{ borderRadius: "10px" }} elevation={1}>
              <Grid
                item
                xs={12}
                sx={{
                  minHeight: "89px",
                  backgroundColor: "#663B73",
                  borderRadius: "10px 10px 0px 0px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FCFCF7",
                    fontSize: "24px",
                  }}
                >
                  Ingresos{" "}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "normal",
                    color: "#A9A9A9",
                    fontSize: "18px",
                  }}
                >
                  Marina de Empresas{" "}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  height: "207px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid
                  xs={12}
                  sx={{
                    minHeight: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <TrendLineChartIcon style={{ height: "32px" }} />
                  </Grid>
                  <Grid
                    xs={8}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography sx={{ fontSize: "1.25rem" }}>
                      Ingresos Brutos
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    minHeight: "4rem",
                    display: "flex",
                  }}
                >
                  <Grid
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ArrowBigGreen />
                  </Grid>
                  <Grid
                    xs={8}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontSize: "4rem",
                        lineHeight: "4rem",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      768
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "2rem",
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      €
                    </Typography>
                  </Grid>
                  <Grid
                    xs={2}
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        backgroundColor: "#2CAF5F",
                        borderRadius: "3px",
                        padding: "5px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      71%
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    minHeight: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                  }}
                >
                  <ButtonGroup
                    variant="outlined"
                    color="black"
                    sx={{ height: "25px" }}
                    size="small"
                  >
                    <Button value="1W">1W</Button>
                    <Button value="1M">1M</Button>
                    <Button value="1Y">1Y</Button>
                    <Button value="All">All</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  minHeight: "35px",
                  backgroundColor: "#663B73",
                  borderRadius: "0px 0px 10px 10px",
                }}
              ></Grid>
            </Paper>
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
