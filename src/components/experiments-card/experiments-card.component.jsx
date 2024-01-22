import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import InProgressButton from "./buttons/in-progress-button.component";
import StartButton from "./buttons/start-button.component";
import MiddleSectionAction from "./middle-section/action.component";
import MiddleSectionProblem from "./middle-section/problem.component";

const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  appendDots: (dots) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        position: "unset",
      }}
    >
      <ul
        style={{
          paddingInlineStart: 0,
          marginBlock: 0,
          marginBlockStart: "-2.45rem",
        }}
      >
        {" "}
        {dots}{" "}
      </ul>
    </div>
  ),
};

const ExperimentsCard = ({
  type,
  productName,
  productSku,
  oldValue,
  newValue,
  change,
  title,
  description,
  variant,
}) => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <Slider {...sliderSettings}>
      <div>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              marginInline: "1rem",
              marginBlockEnd: "1rem",
              display: "flex",
              width: "350px",
              height: "12rem",
              border: "2px solid #727272",
              borderRadius: "2rem",
              paddingInlineEnd: "0.5rem",
              paddingInlineStart: "0.2rem",
              paddingBlock: "0.5rem",
              flexDirection: "column",
            }}
          >
            {/* header */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 1 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ display: "flex", height: "100%" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                ></Grid>
                <Grid
                  item
                  sx={{ display: "flex", alignItems: "center" }}
                  xs={11}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    EXPERIMENTO
                  </Typography>
                  &nbsp;
                  <Typography
                    variant="body2"
                    sx={{ color: "#EA572E", fontWeight: "bold" }}
                  >
                    [0001]
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* header end  */}

            {/* mid section  */}
            <MiddleSectionProblem />
            {/* mid section end  */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 1.5 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ display: "flex", height: "100%" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                ></Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  xs={11}
                >
                  {toggleButton ? (
                    <InProgressButton
                      onClick={() => setToggleButton(!toggleButton)}
                    />
                  ) : (
                    <StartButton
                      onClick={() => setToggleButton(!toggleButton)}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              marginInline: "1rem",
              marginBlockEnd: "1rem",
              display: "flex",
              width: "350px",
              height: "12rem",
              border: "2px solid #727272",
              borderRadius: "2rem",
              paddingInlineEnd: "0.5rem",
              paddingInlineStart: "0.2rem",
              paddingBlock: "0.5rem",
              flexDirection: "column",
            }}
          >
            {/* header */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 1 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ display: "flex", height: "100%" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                ></Grid>
                <Grid
                  item
                  sx={{ display: "flex", alignItems: "center" }}
                  xs={11}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    EXPERIMENTO
                  </Typography>
                  &nbsp;
                  <Typography
                    variant="body2"
                    sx={{ color: "#EA572E", fontWeight: "bold" }}
                  >
                    [0001]
                  </Typography>
                  &nbsp;
                  <Typography
                    sx={{
                      border: "1px solid #EA572E",
                      color: "#EA572E",
                      borderRadius: "5px",
                      padding: "2px 7px",
                      fontSize: "0.5rem",
                    }}
                  >
                    Rotación
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* header end  */}

            {/* mid section  */}
            <MiddleSectionAction />
            {/* mid section end  */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 1.5 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ display: "flex", height: "100%" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                ></Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                  xs={11}
                >
                  {toggleButton ? (
                    <InProgressButton
                      onClick={() => setToggleButton(!toggleButton)}
                    />
                  ) : (
                    <StartButton
                      onClick={() => setToggleButton(!toggleButton)}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Slider>
  );
};

export default ExperimentsCard;
