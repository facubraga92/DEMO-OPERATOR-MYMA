import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { Box, Skeleton } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import BigCard from "../../components/big-card/big-card.component";
import Section from "../../components/section/section.component";
import Metrics from "../../components/metrics/metrics.component";
import Footer from "../../components/footer/footer.component";
import axios from "axios";
import MediumCard from "../../components/medium-card/medium-card.component";

const MyMachine = () => {
  const [dropdownData, setDropdownData] = useState({});
  const [metricsData, setMetricsData] = useState({});
  const [period, setPeriod] = useState("2w");

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    // afterChange: handleSlideChange,
  };

  // HARDCODED FAKE DATA //

  const mediumCardDataPositive = {
    type: "TOP 3",
    title: "Experimentos en [15 días]",
    list: [
      { "Sandwich Pastrami": "+39 Ventas" },
      { "Sandwich Mila": "+27 Ventas" },
      { "Ensaladilla Tusa": "+26 Ventas" },
    ],
    value: "",
    icon: "experiment",
    variant: "positive",
  };
  const mediumCardDataNegative = {
    type: "TOP 3",
    title: "Menos Vendidos en [15 días]",
    list: [
      { "Ensalada MEX": "6 Ventas" },
      { "Carne / Papas": "4 Ventas" },
      { "Ensalada Pasta": "3 Ventas" },
    ],
    value: "",
    icon: "vending",
    variant: "negative",
  };
  const mediumCardDataNeutral = {
    type: "CAMP ID",
    title: "101",
    subtitle: "¡NO te quedes sin el tuyo!",
    list: [
      "Sandwich de Pollo",
      "Precio PROMO a 3.00€",
      "SLOT 45 - MAQUINA LANZADERA",
    ],
    imgURL:
      "https://okdiario.com/img/2023/01/16/sandwich-de-pollo-de-mercadona.jpg",
    variant: "neutral",
  };
  const mediumCardDataExperiment = {
    type: "EXPERIMENTO",
    title: "102 Sandwich Pastrami",
    icon: "blocks",
    value: "+168",
    variant: "positive",
    arrow: false,
  };

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

  // END OF HARDCODED FAKE DATA //

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

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "normal" }}>Mi</div>
            <div style={{ fontWeight: "bold" }}>&nbsp;Máquina</div>
          </div>
        }
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
        <Filters dropdownData={dropdownData} />
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
        {/* <Skeleton
          animation="pulse"
          sx={{ marginInline: "1rem", marginBlockEnd: "1rem" }}
          variant="rectangular"
          height={118}
        /> */}
        <MediumCard {...mediumCardDataPositive} />
        <MediumCard {...mediumCardDataNegative} />
        <MediumCard {...mediumCardDataNeutral} />
        <MediumCard {...mediumCardDataExperiment} />
        {/* <SmallCard {...mediumCardDataPositive} />
   <SmallCard {...smallCardDataPositive} />
    <Section title="Alertas & Notificaciones" />
    <SmallCard {...smallCardDataNegative} /> */}
      </Box>
      <Footer />
    </>
  );
};

export default MyMachine;
