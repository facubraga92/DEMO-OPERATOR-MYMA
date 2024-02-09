import React from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as MoneyLossIcon } from "../../../assets/images/money-loss-icon.svg";
import { ReactComponent as CircularArrowsIcon } from "../../../assets/images/circular-arrows-icon.svg";
import { ReactComponent as CalendarAlertIcon } from "../../../assets/images/calendar-alert-icon.svg";

const MiddleSectionProblem = () => {
  return (
    <>
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
          <CircularArrowsIcon style={{ height: "1.2rem", width: "1.2rem" }} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          item
          xs={11}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              fontWeight: "bold",
              marginInlineStart: "0.2rem",
            }}
          >
            Baja de Rotacion de SKU 002
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
          <CalendarAlertIcon style={{ height: "1.2rem", width: "1.2rem" }} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          item
          xs={11}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              fontWeight: "bold",
              marginInlineStart: "0.2rem",
            }}
          >
            Ventas: 2 Unidades durante 15 dias.
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
          <MoneyLossIcon style={{ height: "1.2rem", width: "1.2rem" }} />
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }} item xs={11}>
          <Typography
            sx={{
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              fontWeight: "bold",
              marginInlineStart: "0.2rem",
            }}
          >
            Impacto Negativo: -20 € perdidos x dia. -100 € perdidos x semana
          </Typography>
        </Grid>
      </Grid>
      {/* mid section end  */}
    </>
  );
};

export default MiddleSectionProblem;
