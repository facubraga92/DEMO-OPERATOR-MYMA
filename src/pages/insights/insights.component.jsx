import React from "react";
import Header from "../../components/header/header.component";
import { Box, Grid, Typography } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "../../components/footer/footer.component";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
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
      />

      <Box
        sx={{
          height: "100%",
          marginBottom: "90px",
          overflowY: "scroll",
          overflowX: "hidden",
          backgroundColor: "#C4C4C4",
        }}
      >
        <Filters />
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              marginBlockStart: "2.5rem",
              // marginBlockEnd: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                height: "60%",
                alignItems: "center",
                marginTop: "0rem",
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "#683d76" }}
              >
                <span>
                  Estamos analizando las interacciones de tus clientes con tus
                  máquinas y sus transacciones.
                </span>
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                  Próximamente, proporcionaremos los insights más valiosos sobre
                  tus consumidores.
                </span>
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "40%",
              }}
            >
              <InsightsOutlinedIcon
                sx={{ fontSize: "12rem" }}
                style={{ fill: "#fff" }}
              />
            </Grid>

            {/* <Grid item xs={12}>
            <Section title="Gustan & Aprendizajes :)" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <MediumCard variant={"a"} data={mediumCardDataPositive} />
              <MediumCard variant={"d"} data={mediumCardDataWinnerOfMonth} />
            </Slider>
          </Grid>
          <Grid item xs={12}>
            <Section title="NO Gustan & Aprendizajes :(" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <MediumCard variant={"a"} data={mediumCardDataNegative} />
              <MediumCard variant={"d"} data={mediumCardDataLoserOfMonth} />
            </Slider>
          </Grid>
          <Grid item xs={12}>
            <Section title="Compras & Momentos" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <MediumCard
                variant={"e"}
                data={mediumCardDataTopSpendingPerTurns}
              />
            </Slider>
          </Grid> */}
          </Grid>
        </Box>
      </Box>
      <Footer activeIconID={4} />
    </>
  );
};

export default Insights;
