import React from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore } from "../../services/store.service";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { media } from "./media";

const Ads = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { storeData } = useSelector((state) => state.store);

  //Sets the margin of the body to 0 when the component mounts, and it resets the margin when the component is unmounted.
  useEffect(() => {
    const setStoreId = async () => {
      try {
        const storeId = localStorage.getItem("storeId");
        dispatch(getStore({ storeId }));
      } catch (error) {
        // console.error(error);
      }
    };

    setStoreId();
    document.body.style.margin = "0";
    return () => {
      document.body.style.margin = "";
    };
    // eslint-disable-next-line
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    // fade: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#EBE9DA",
      }}
    >
      <Grid
        container
        sx={{
          height: "320px",
          display: "flex",
          paddingBlock: "2rem",
          paddingInline: "0.5rem",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "1rem",
          }}
          xs={4}
        >
          <Grid
            sx={{
              backgroundColor: "#EA572E",
              borderRadius: "30px 30px 0px 0px",
              textAlign: "center",
              padding: "0.5rem 1rem",
            }}
            item
            xs={12}
          >
            <Typography
              sx={{
                fontSize: "26.2px",
                color: "#fff",
                lineHeight: "1.2",
                fontWeight: 900,
                fontFamily: "MuseoSansRounded",
              }}
            >
              Comienza Aquí
            </Typography>
          </Grid>
          <Grid item sx={{ backgroundColor: "#fff" }} xs={12}>
            <img
              style={{
                height: "200px",
                width: "100%",
              }}
              src={media[storeData?.id]?.qr?.url}
              alt={media[storeData?.id]?.qr?.title}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#663b73",
            borderRadius: "50px 0px 50px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={8}
        >
          <img
            src={media[storeData?.id]?.logo?.url}
            alt={media[storeData?.id]?.logo?.title}
            style={media[storeData?.id]?.logo?.style}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          marginBottom: "0rem",
          borderRadius: "2rem 2rem 0rem 0rem",
          alignContent: "center",
        }}
      >
        <Grid item xs={12}>
          <Slider {...settings}>
            {media[storeData?.id]?.cards.map((element, index) => {
              return (
                <Card
                  key={index}
                  sx={{ backgroundColor: element.backgroundColor }}
                >
                  <CardMedia
                    component="img"
                    alt={element.title}
                    src={element.url}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "scale-down",
                      scale: "0.8",
                    }}
                  />
                </Card>
              );
            })}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ads;
