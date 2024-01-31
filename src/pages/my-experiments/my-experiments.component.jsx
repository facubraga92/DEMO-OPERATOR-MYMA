import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { Box } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import BigCard from "../../components/big-card/big-card.component";
import Section from "../../components/section/section.component";
// import Metrics from "../../components/metrics/metrics.component";
import Footer from "../../components/footer/footer.component";
// import axios from "axios";
// import MediumCard from "../../components/medium-card/medium-card.component";
import ExperimentsCard from "../../components/experiments-card/experiments-card.component";
import SmallCard from "../../components/small-card/small-card.component";
import {
  experimentsFakeData,
  smallCardDataPositive1,
  smallCardDataPositive2,
} from "../../utils/fakeData";

const MyExperiments = () => {
  const [metricsData, setMetricsData] = useState({});
  // eslint-disable-next-line
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
    title: "Ingresos Incrementales",
    subtitle: "Lanzadera - Com Izq",
    headline: "Ingresos Adicionales Experimentos",
  };
  const bigCardSecondSlider = {
    title: "Unidades Incrementales",
    subtitle: "Marina de Empresas",
    headline: "Unidades Adicionales Experimentos",
  };

  // END OF HARDCODED FAKE DATA //

  useEffect(() => {
    const fetch = async () => {
      setMetricsData(experimentsFakeData[period]);
    };

    fetch();
  }, [period]);

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "normal" }}>Mis</div>
            <div style={{ fontWeight: "bold" }}>&nbsp;Experimentos</div>
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
              // sprintProgress={70}
              bigCardData={bigCardFirstSlider}
              metricsData={metricsData}
              logo="experiment"
              experimentsPage
              sales
            />
          </div>
          <div>
            <BigCard
              // sprintProgress={70}
              bigCardData={bigCardSecondSlider}
              metricsData={metricsData}
              logo="experiment"
              experimentsPage
              units
            />
          </div>
        </Slider>

        <Section title="IMPACTO EXPERIMENT." header="a" />
        <SmallCard {...smallCardDataPositive1} />
        <SmallCard {...smallCardDataPositive2} />
        <Section title="EXPERIMENTOS A ACCIONAR" />
        <Slider {...sliderSettings}>
          <ExperimentsCard />
          <ExperimentsCard />
        </Slider>
        {/* <ExperimentsCard {...smallCardDataPositive} /> */}
        {/* <Skeleton
          variant="rectangular"
          height={150}
          sx={{ marginInline: "1rem" }}
        /> */}
      </Box>
      <Footer activeIconID={2} />
    </>
  );
};

export default MyExperiments;
