import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import JoyrideTutorial from "../../utils/joyRideTutorial";
import ReactGA from "react-ga4";
import BigCard from "../../components/big-card/big-card.component";
import Section from "../../components/section/section.component";
import Metrics from "../../components/metrics/metrics.component";
// import axios from "axios";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  bigCardFirstSlider,
  bigCardSecondSlider,
  bigCardThirdSlider,
  trafficLightData1,
  trafficLightData2,
  trafficLightData3,
  portfolioFakeData,
} from "../../utils/fakeData";
import TrafficLight from "../../components/traffic-light/traffic-light.component";

const HomeBody = () => {
  const [runTutorial, setRunTutorial] = useState(false);

  const [metricsData, setMetricsData] = useState({});

  const [period, setPeriod] = useState("2w");

  // const [machinesSelectorDisabled, setMachinesSelectorDisabled] =
  //   useState(true);

  useEffect(() => {
    const fetch = async () => {
      setMetricsData(portfolioFakeData[period]);
    };

    fetch();
  }, [period]);

  // const handleSlideChange = (index) => {
  //   // Check if the index of the current slide is 0
  //   const isZero = index === 0;
  //   // Update the variable based on the condition
  //   setMachinesSelectorDisabled(isZero);
  //   // You can perform more actions as needed
  // };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    // afterChange: handleSlideChange,
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
          marginBottom: "90px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Filters machinesSelectorDisabled />
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
          <div>
            <BigCard
              period={period}
              setPeriod={setPeriod}
              bigCardData={bigCardThirdSlider}
              metricsData={metricsData}
              logo="trendlinechart"
            />
          </div>
        </Slider>
        <Section title="KPIS Relevantes" />
        <Slider {...sliderSettings}>
          <div>
            <Metrics slideIndex="0" metricsData={metricsData} />
          </div>
          <div>
            <Metrics slideIndex="1" metricsData={metricsData} />
          </div>
        </Slider>
        <Section title="Rendimientos" header="b" />
        <TrafficLight {...trafficLightData1} client="Lanzadera" header />
        <TrafficLight {...trafficLightData2} client="EDEM" header />
        <TrafficLight {...trafficLightData3} client="Angels" header />
      </Box>
      <Footer activeIconID={0} />
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
