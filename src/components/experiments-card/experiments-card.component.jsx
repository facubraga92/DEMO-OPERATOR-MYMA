import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as ExperimentsIcon } from "../../assets/images/experiments-icon.svg";
import { ReactComponent as MoneyLossIcon } from "../../assets/images/money-loss-icon.svg";
import { ReactComponent as CircularArrowsIcon } from "../../assets/images/circular-arrows-icon.svg";
import { ReactComponent as CalendarAlertIcon } from "../../assets/images/calendar-alert-icon.svg";
import { ReactComponent as VendingMachineIcon } from "../../assets/images/vending-icon.svg";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import InProgressButton from "./in-progress-button.component";
import StartButton from "./start-button.component";

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

            {/* subtitle  */}
            {/* <Grid
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
            </Grid> */}
            {/* subtitle end  */}

            {/* mid section  */}
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
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                      color: "#EA572E",
                    }}
                  >
                    PROBLEMA
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  <CircularArrowsIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  />
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Baja de Rotacion de [SKU 002]
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  <CalendarAlertIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  />
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Ventas: [2] Unidades durante [15] dias.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  <MoneyLossIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={11}
                >
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Impacto Negativo: [-20 €] perdidos x dia. [-100 €] perdidos
                    x semana
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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

            {/* subtitle  */}
            {/* <Grid
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
            </Grid> */}
            {/* subtitle end  */}

            {/* mid section  */}
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
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                      color: "#663B73",
                    }}
                  >
                    ACCIÓN
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  {/* <CircularArrowsIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  /> */}
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Retirar [SKU A Problema:] en #Unidades: [6],
                    <br /> Agregar [SKU B Experimento:] #Unidades [6].
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  xs={1}
                >
                  {/* <CalendarAlertIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  /> */}
                  <VendingMachineIcon
                    style={{ width: "1.3rem", fill: "#000" }}
                  />
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
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Ubicacion: Maquina [Lanz Com 01]. , Espacio [1026]{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sx={{ height: 1 / 4, display: "flex" }}>
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
                  {/* <MoneyLossIcon
                    style={{ height: "1.2rem", width: "1.2rem" }}
                  /> */}
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={11}
                >
                  <Typography
                    sx={{
                      fontSize: "0.79rem",
                      lineHeight: "1",
                      fontWeight: "bold",
                    }}
                  >
                    Inicio [Fecha] fin [fecha]
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
