import { Grid, Typography } from "@mui/material";
import React from "react";

const MetricItem = ({ value, label, symbol }) => (
  <Grid
    item
    xs={12}
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid #727272",
      borderRadius: "1rem",
      alignItems: "center",
      justifyContent: "center",
      paddingInline: "1rem",
    }}
  >
    <Grid item xs={12} sx={{ display: "flex" }}>
      <Typography
        sx={{
          fontSize: "1.7rem",
          lineHeight: "1.5rem",
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginTop: "1.5rem",
        }}
      >
        {`${value}`}
      </Typography>
      {symbol && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "end",
          }}
        >
          {`${symbol}`}
        </Typography>
      )}
    </Grid>
    <Grid item sx={{ display: "flex", alignItems: "center" }} xs={12}>
      <Typography
        sx={{
          fontSize: "0.65rem",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "0.7rem",
        }}
      >
        {label}
      </Typography>
    </Grid>
  </Grid>
);

const Metrics = ({ metricsData, slideIndex }) => (
  <Grid container>
    <Grid
      item
      xs={12}
      sx={{
        marginInline: "1rem",
        marginBlockEnd: "1rem",
        display: "flex",
        height: "7.5rem",
        paddingBlock: "0.5rem",
        gap: "1rem",
      }}
    >
      <MetricItem
        symbol={slideIndex === "0" && metricsData?.currency?.symbol}
        value={
          slideIndex === "0"
            ? Math.round(metricsData?.sales?.avg)
            : Math.round(metricsData?.units?.avg_orders_per_customer)
        }
        label={
          slideIndex === "0" ? "Ticket Promedio" : "Ordenes Promedio x Cliente"
        }
      />
      <MetricItem
        symbol={slideIndex === "0" && metricsData?.currency?.symbol}
        value={
          slideIndex === "0"
            ? Math.round(metricsData?.sales?.avg_sale_per_store)
            : Math.round(metricsData?.units?.avg_units_per_order)
        }
        label={
          slideIndex === "0" ? "Ingresos Medios x Tienda" : "Productos x Orden"
        }
      />
      <MetricItem
        symbol={slideIndex === "0" && metricsData?.currency?.symbol}
        value={
          slideIndex === "0"
            ? Math.round(metricsData?.sales?.total_sales_recurring_customer)
            : Math.round(metricsData?.units?.total_recurring_customers)
        }
        label={
          slideIndex === "0"
            ? "Ingresos Medios x Cliente"
            : " Clientes Recurrentes (>10 meses)"
        }
      />
    </Grid>
  </Grid>
);

export default Metrics;
