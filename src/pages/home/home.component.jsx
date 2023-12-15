import React from "react";
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
import SmallCard from "../../components/small-card/small-card.component";

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

  const smallCardDataPositive = {
    type: "Rotación",
    productName: "Ensalada Caesar",
    productSku: "T: LANZ IZ . EID:002",
    oldValue: "2",
    newValue: "10",
    change: "+80%",
    variant: "positive",
  };

  const smallCardDataNegative = {
    type: "Costos",
    title: "[Mercadona] Aumento de Precio sku: Sandiwch Pollo",
    description:
      "INGRESOS: Baja de ingresos,en caso de no actualizar Precio Venta",
    variant: "negative",
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
        <SmallCard {...smallCardDataPositive} />
        <SmallCard {...smallCardDataPositive} />
        <SmallCard {...smallCardDataNegative} />
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
