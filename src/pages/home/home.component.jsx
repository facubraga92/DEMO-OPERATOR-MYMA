import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
// import { getProducts, getProductsPromo } from "../../services/product.service";
// import { getCustomerCards } from "../../services/customer.service";
// import { getStore } from "../../services/store.service";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import JoyrideTutorial from "../../utils/joyRideTutorial";
import ReactGA from "react-ga4";
import BigCard from "../../components/big-card/big-card.component";
// import SmallCard from "../../components/small-card/small-card.component";
import Section from "../../components/section/section.component";
import Metrics from "../../components/metrics/metrics.component";
import axios from "axios";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const HomeBody = () => {
  const [runTutorial, setRunTutorial] = useState(false);

  const [metricsData, setMetricsData] = useState({});

  const [period, setPeriod] = useState("2w");

  const [dropdownData, setDropdownData] = useState({});

  const [machinesSelectorDisabled, setMachinesSelectorDisabled] =
    useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/metrics?clientId=natica&period=${period}`
      );

      setMetricsData(data);
    };

    fetch();
  }, [period]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/dd?clientId=natica`
      );

      setDropdownData(data);
    };

    fetch();
  }, []);

  const handleSlideChange = (index) => {
    // Check if the index of the current slide is 0
    const isZero = index === 0;
    // Update the variable based on the condition
    setMachinesSelectorDisabled(isZero);
    // You can perform more actions as needed
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSlideChange,
  };

  //hardcoded fake data.
  const bigCardFirstSlider = {
    title: "Ingresos",
    subtitle: "Marina de Empresas",
    headline: "Ingresos Brutos",
  };
  const bigCardSecondSlider = {
    title: "Unidades",
    subtitle: "Marina de Empresas",
    headline: "Unidades",
  };
  // eslint-disable-next-line
  const smallCardDataPositive = {
    type: "Rotación",
    productName: "Ensalada Caesar",
    productSku: "T: LANZ IZ . EID:002",
    oldValue: "2",
    newValue: "10",
    change: "+80%",
    variant: "positive",
  };
  // eslint-disable-next-line
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
        avatar="FB"
      />
      <Box
        sx={{
          height: "100%",
          marginBottom: "76px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Filters
          machinesSelectorDisabled={machinesSelectorDisabled}
          dropdownData={dropdownData}
        />
        <Slider {...sliderSettings}>
          <div>
            <BigCard
              period={period}
              setPeriod={setPeriod}
              bigCardData={bigCardFirstSlider}
              metricsData={metricsData}
              logo="trendlinechart"
            />
          </div>
          <div>
            <BigCard
              period={period}
              setPeriod={setPeriod}
              bigCardData={bigCardSecondSlider}
              metricsData={metricsData}
              logo="shopcart"
            />
          </div>
        </Slider>
        {/* <BigCard
          period={period}
          setPeriod={setPeriod}
          bigCardData={bigCardData}
          metricsData={metricsData}
        /> */}
        <Section title="KPIS Relevante" />
        <Slider {...sliderSettings}>
          <div>
            <Metrics slideIndex="0" metricsData={metricsData} />
          </div>
          <div>
            <Metrics slideIndex="1" metricsData={metricsData} />
          </div>
        </Slider>
        <Section title="Información Relevante" />
        <Skeleton
          animation="pulse"
          sx={{ marginInline: "1rem", marginBlockEnd: "1rem" }}
          variant="rectangular"
          height={118}
        />

        {/* <SmallCard {...smallCardDataPositive} />
        <SmallCard {...smallCardDataPositive} />
        <Section title="Alertas & Notificaciones" />
        <SmallCard {...smallCardDataNegative} /> */}
      </Box>
      <Footer />
    </>
  );
};

const Home = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { getProductsStatus, getProductsPromoStatus } = useSelector(
    (state) => state.products
  );
  // eslint-disable-next-line
  const { customerCardsStatus } = useSelector((state) => state.customer);
  // eslint-disable-next-line
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
        // eslint-disable-next-line
        const isValidStoreId = storeId && storeId !== "null" && storeId !== "";

        // if (getProductsPromoStatus === "idle") {
        //   dispatch(
        //     getProductsPromo(isValidStoreId ? { storeId } : { storeId: 0 })
        //   );
        // }
        // if (getProductsStatus === "idle") {
        //   dispatch(getProducts(isValidStoreId ? { storeId } : { storeId: 0 }));
        // }
        // if (customerCardsStatus === "idle") {
        //   dispatch(getCustomerCards());
        // }
        // if (customerCardsStatus === "idle") {
        //   dispatch(getCustomerCards());
        // }
        // if (storeStatus === "idle") {
        //   dispatch(getStore(isValidStoreId && { storeId }));
        // }
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
