// import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

import { getProducts, getProductsPromo } from "../../services/product.service";

import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

import JoyrideTutorial from "../../utils/joyRideTutorial";
import ReactGA from "react-ga4";
import { getCustomerCards } from "../../services/customer.service";
import { getStore } from "../../services/store.service";

import BigCard from "../../components/big-card/big-card.component";

const HomeBody = () => {
  const [runTutorial, setRunTutorial] = useState(false);

  //hardcoded fake data.
  const bigCardData = {
    title: "Ingresos",
    subtitle: "Marina de Empresas",
    headline: "Ingresos Brutos",
    quantity: "768",
    currencySymbol: "€",
    percentage: "71%",
  };

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
        <BigCard {...bigCardData} />
      </Box>
      <Footer />
    </>
  );
};

const Home = () => {
  const dispatch = useDispatch();
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

  return (
    <>
      <HomeBody />
    </>
  );
};

export default Home;
