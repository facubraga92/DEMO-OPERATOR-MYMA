import React from "react";
import Header from "../../components/header/header.component";
import { Box, Grid } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "../../components/footer/footer.component";
import Section from "../../components/section/section.component";
import Slider from "react-slick";
import {
  mediumCardDataYesterdaySpendedItems1,
  mediumCardDataYesterdaySpendedItems2,
} from "../../utils/fakeData";
import MediumCard from "../../components/medium-card/medium-card.component";
// import Slider from "react-slick";
// import Section from "../../components/section/section.component";
// import {
//   mediumCardDataLoserOfMonth,
//   mediumCardDataNegative,
//   mediumCardDataPositive,
//   mediumCardDataTopSpendingPerTurns,
//   mediumCardDataWinnerOfMonth,
// } from "../../utils/fakeData";
// import MediumCard from "../../components/medium-card/medium-card.component";

const Insights = () => {
  // eslint-disable-next-line
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    // afterChange: handleSlideChange,
  };

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "normal" }}>Mis</div>
            <div style={{ fontWeight: "bold" }}>
              &nbsp;Consumidores Insights
            </div>
          </div>
        }
        avatar="FB"
        longTitle
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
        <Grid container sx={{ marginBlockStart: "0.5rem" }}>
          <Grid item xs={12}>
            <Section title="Ventas Ayer. Compras Mañana. Listas p/ Comer" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <div>
                <MediumCard
                  variant="f"
                  data={mediumCardDataYesterdaySpendedItems1}
                />
              </div>
              <div>
                <MediumCard
                  variant="f"
                  data={mediumCardDataYesterdaySpendedItems2}
                />
              </div>
            </Slider>
          </Grid>
        </Grid>
      </Box>
      <Footer activeIconID={4} />
    </>
  );
};

export default Insights;
