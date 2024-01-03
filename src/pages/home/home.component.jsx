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
import Section from "../../components/section/section.component";
import Metrics from "../../components/metrics/metrics.component";
import axios from "axios";

const HomeBody = () => {
  const [runTutorial, setRunTutorial] = useState(false);

  const [metricsData, setMetricsData] = useState({});

  const [period, setPeriod] = useState("2w");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/metrics?clientId=natica&period=${period}`
      );

      setMetricsData(data);
    };

    fetch();
  }, [period]);

  //hardcoded fake data.
  const bigCardData = {
    title: "Ingresos",
    subtitle: "Marina de Empresas",
    headline: "Ingresos Brutos",
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

  // const metricsData = {
  //   filters: {
  //     clientId: "natica",
  //     perid: "w",
  //     dateRange: {
  //       currentPeriod: {
  //         startDate: "2024-01-01T00:26:34.849Z",
  //         endDate: "2024-01-07T00:26:34.849Z",
  //       },
  //       previousPeriod: {
  //         startDate: "2023-12-25T00:26:34.851Z",
  //         endDate: "2023-12-31T00:26:34.851Z",
  //       },
  //     },
  //   },
  //   sales: {
  //     total: "60",
  //     total_previous_period: "31.80",
  //     avg: "15",
  //     avg_sale_per_store: "20",
  //     total_sales_recurring_customer: "10",
  //   },
  //   units: {
  //     total: "0",
  //     total_previous_period: "29",
  //     avg_orders_per_customer: "NaN",
  //     avg_units_per_order: "1.00",
  //     total_recurring_customers: 0,
  //   },
  // };

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
        <BigCard
          period={period}
          setPeriod={setPeriod}
          bigCardData={bigCardData}
          metricsData={metricsData}
        />
        <Section title="KPIS Relevante" />
        <Metrics metricsData={metricsData} />
        <Section title="Experimentos" header />
        <SmallCard {...smallCardDataPositive} />
        <SmallCard {...smallCardDataPositive} />
        <Section title="Alertas & Notificaciones" />
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
