import React from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as ExperimentsIcon } from "../../../assets/images/experiments-icon.svg";
import { ReactComponent as VendingMachineIcon } from "../../../assets/images/vending-icon.svg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const MiddleSectionAction = () => {
  return (
    <>
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
            <VendingMachineIcon style={{ width: "1.3rem", fill: "#000" }} />
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
          <Grid sx={{ display: "flex", alignItems: "center" }} item xs={11}>
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
    </>
  );
};

export default MiddleSectionAction;
