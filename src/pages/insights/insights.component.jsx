import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { Box, Grid } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Section from "../../components/section/section.component";
import Footer from "../../components/footer/footer.component";
import axios from "axios";
import {
  mediumCardDataLoserOfMonth,
  mediumCardDataNegative,
  mediumCardDataNeutral,
  mediumCardDataPositive,
  mediumCardDataTopSpendingPerTurns,
  mediumCardDataWinnerOfMonth,
} from "../../utils/fakeData";
import MediumCard from "../../components/medium-card/medium-card.component";

const Insights = () => {
  const [dropdownData, setDropdownData] = useState({});

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    // afterChange: handleSlideChange,
  };

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
          marginBottom: "76px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Filters dropdownData={dropdownData} />
        <Grid container sx={{ marginBlockStart: "2.5rem" }}>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Box>
      <Footer activeIconID={4} />
    </>
  );
};

export default Insights;
