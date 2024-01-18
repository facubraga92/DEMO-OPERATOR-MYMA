import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ReactComponent as ExperimentsIcon } from "../../assets/images/experiments-icon.svg";
import { ReactComponent as MoneyLossIcon } from "../../assets/images/money-loss-icon.svg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AdsClickIcon from "@mui/icons-material/AdsClick";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

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
          marginBlockStart: "-2.7rem",
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
              paddingBlockEnd: "0.5rem",
              flexDirection: "column",
            }}
          >
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
                <Grid item sx={{ display: "flex", alignItems: "end" }} xs={11}>
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
                    justifyContent: "start",
                  }}
                  xs={1}
                >
                  <MoneyLossIcon />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={11}
                >
                  <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                    Problemas.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 3.5 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ height: "50%", display: "flex" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                >
                  {/* <ExperimentsIcon style={{ width: "1.3rem" }} /> */}
                </Grid>
                <Grid
                  sx={{
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                  item
                  xs={11}
                >
                  <Typography sx={{ fontSize: "0.79rem", lineHeight: "1" }}>
                    Las variaciones negativas en Ingresos en las Semanas [38] y
                    [39] se dieron por falta de Rotacion del producto [SKU 002],
                    solo [2] ventas del [SKU 002] durante [15] dias.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: "50%", display: "flex" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                >
                  {/* <CalendarMonthOutlinedIcon fontSize="medium" /> */}
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={11}
                >
                  <Typography sx={{ fontSize: "0.79rem", lineHeight: "1" }}>
                    Impacto representa: [-20 €] perdidos x dia. Costo de
                    oportunidad de los [15] días [-300 €] Ingresos brutos{" "}
                  </Typography>
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
              paddingBlockEnd: "0.5rem",
              flexDirection: "column",
            }}
          >
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
                <Grid item sx={{ display: "flex", alignItems: "end" }} xs={11}>
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
                      marginBlockEnd: "2px",
                    }}
                  >
                    Rotación
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "1rem",
                maxHeight: 3 / 6,
              }}
              item
              xs={12}
            >
              <Grid item sx={{ height: "60%", display: "flex" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                >
                  <ExperimentsIcon style={{ width: "1.3rem" }} />
                </Grid>
                <Grid
                  sx={{
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                  item
                  xs={11}
                >
                  <Typography sx={{ fontSize: "0.79rem", lineHeight: "1" }}>
                    Aumentar [SKU A:] en [#Unidades: 6], reemplazando [#Unidades
                    6], de [SKU: Pollo a la Mostaza] en Codigo Seleccion [1026]
                    de Maquina [Lanz Com 01].
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: "40%", display: "flex" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                >
                  <CalendarMonthOutlinedIcon fontSize="medium" />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={11}
                >
                  <Typography sx={{ fontSize: "0.79rem", lineHeight: "1" }}>
                    Inicio [Fecha] fin [fecha] - Duracion esperada [15 dias]
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
                  <Button
                    variant="contained"
                    sx={{
                      height: "2.5rem",
                      borderRadius: "1.2rem",
                      display: "flex",
                      backgroundColor: "#663B73",
                      textTransform: "none",
                      paddingLeft: "2rem",
                      "&:active": {
                        backgroundColor: "#663B73",
                      },
                      "&:focus": {
                        backgroundColor: "#663B73",
                      },
                      "&:hover": {
                        backgroundColor: "#663B73",
                      },
                    }}
                    endIcon={<AdsClickIcon />}
                  >
                    Iniciar
                  </Button>
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
