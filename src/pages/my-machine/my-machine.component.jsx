import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { Box } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import BigCard from "../../components/big-card/big-card.component";
import Section from "../../components/section/section.component";
import Metrics from "../../components/metrics/metrics.component";
import Footer from "../../components/footer/footer.component";
import MediumCard from "../../components/medium-card/medium-card.component";
import {
  machinesFakeData,
  mediumCardDataNeutral,
  mediumCardDataPositive,
  smallCardDataNegative,
  smallCardDataPositive,
} from "../../utils/fakeData";
import SmallCard from "../../components/small-card/small-card.component";

const MyMachine = () => {
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
      setMetricsData(machinesFakeData[period]);
    };

    fetch();
  }, [period]);

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
        <Filters />
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
        <Section title="Experimentos" />
        <Slider {...sliderSettings}>
          <SmallCard header {...smallCardDataPositive} />
          <SmallCard header {...smallCardDataPositive} />
        </Slider>
        <Section title="Alertas" />
        <Slider {...sliderSettings}>
          <SmallCard {...smallCardDataNegative} />
          <SmallCard {...smallCardDataNegative} />
        </Slider>
        <Section title="Insights" />
        <Slider {...sliderSettings}>
          <MediumCard variant={"a"} data={mediumCardDataPositive} />
          <MediumCard variant={"a"} data={mediumCardDataPositive} />
        </Slider>
        <Section title="Campañas" />
        <Slider {...sliderSettings}>
          <MediumCard variant={"c"} data={mediumCardDataNeutral} />
          <MediumCard variant={"c"} data={mediumCardDataNeutral} />
        </Slider>
      </Box>
      <Footer activeIconID={1} />
    </>
  );
};

export default MyMachine;
