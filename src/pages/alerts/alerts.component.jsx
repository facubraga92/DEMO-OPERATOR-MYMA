import React from "react";
import Header from "../../components/header/header.component";
import { Box, Grid } from "@mui/material";
import Filters from "../../components/filters/filters.component";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Section from "../../components/section/section.component";
import Footer from "../../components/footer/footer.component";
import {
  smallCardDataNegativeAlertsCosts,
  smallCardDataNegativeAlertsRotation,
} from "../../utils/fakeData";
import SmallCard from "../../components/small-card/small-card.component";

const Alerts = () => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.06,
    slidesToScroll: 1,
    // afterChange: handleSlideChange,
  };

  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:3001/api/dd?clientId=natica`
  //     );

  //     setDropdownData(data);
  //   };

  //   fetch();
  // }, []);

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontWeight: "normal" }}>Mis</div>
            <div style={{ fontWeight: "bold" }}>&nbsp;Alertas</div>
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
        <Grid container sx={{ marginBlockStart: "3rem" }}>
          <Grid item xs={12}>
            <Section title="Costos de los Productos" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <div>
                <SmallCard {...smallCardDataNegativeAlertsCosts} />
              </div>
              <div>
                <SmallCard {...smallCardDataNegativeAlertsCosts} />
              </div>
            </Slider>
          </Grid>
          <Grid item xs={12}>
            <Section title="Cambios Preferencias Consumidores" />
          </Grid>
          <Grid sx={{ marginBlockStart: "0.5rem" }} item xs={12}>
            <Slider {...sliderSettings}>
              <div>
                <SmallCard {...smallCardDataNegativeAlertsRotation} />
              </div>
              <div>
                <SmallCard {...smallCardDataNegativeAlertsRotation} />
              </div>
            </Slider>
          </Grid>
        </Grid>
      </Box>
      <Footer activeIconID={3} />
    </>
  );
};

export default Alerts;
