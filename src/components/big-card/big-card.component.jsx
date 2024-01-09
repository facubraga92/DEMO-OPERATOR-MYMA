import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { ReactComponent as TrendLineChartIcon } from "../../assets/images/trend-line-chart.svg";
import { ReactComponent as ArrowBigGreen } from "../../assets/images/arrow-green-big.svg";
import { ReactComponent as ArrowBigRed } from "../../assets/images/arrow-red-big.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const BigCard = ({ metricsData, bigCardData, period, setPeriod, logo }) => {
  //Using logo prop for set up metricsData property to fill cards.
  const [metricsProperty, setMetricsProperty] = useState("sales");

  useEffect(
    () => {
      if (logo === "trendlinechart") {
        setMetricsProperty("sales");
      }
      if (logo === "shopcart") {
        setMetricsProperty("units");
      }
    },
    // eslint-disable-next-line
    [metricsProperty]
  );

  const percentage = Math.round(
    parseFloat(metricsData?.[metricsProperty]?.difference_str)
  );

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          marginInline: "1rem",
          marginBlockStart: "1rem",
          marginBlockEnd: "0.5rem",
          display: "flex",
          flexDirection: "column",
          width: "350px",
          height: "auto",
        }}
      >
        <Paper sx={{ borderRadius: "10px" }} elevation={5}>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "89px",
              backgroundColor: "#663B73",
              borderRadius: "10px 10px 0px 0px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#FCFCF7",
                fontSize: "24px",
              }}
            >
              {bigCardData.title}
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "#A9A9A9",
                fontSize: "18px",
              }}
            >
              {bigCardData.subtitle}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "207px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                minHeight: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {logo === "trendlinechart" && (
                  <TrendLineChartIcon style={{ height: "32px" }} />
                )}
                {logo === "shopcart" && (
                  <ShoppingCartIcon sx={{ fontSize: "32px" }} />
                )}
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography sx={{ fontSize: "1.25rem" }}>
                  {bigCardData.headline}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                minHeight: "4rem",
                display: "flex",
              }}
            >
              <Grid
                item
                xs={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {metricsData?.[metricsProperty]?.difference < 0 ? (
                  <ArrowBigRed />
                ) : (
                  <ArrowBigGreen />
                )}
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {" "}
                <Typography
                  variant="h2"
                  sx={{
                    lineHeight: "4rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {metricsData?.[metricsProperty]?.total}
                </Typography>
                {logo === "trendlinechart" && (
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {metricsData?.currency?.symbol}
                  </Typography>
                )}
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    backgroundColor: `${
                      metricsData?.[metricsProperty]?.difference < 0
                        ? "#FD3F03"
                        : "#2CAF5F"
                    }`,
                    borderRadius: "3px",
                    padding: "5px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {`${percentage}%`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                minHeight: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              {period && (
                <ToggleButtonGroup
                  color="black"
                  sx={{ height: "25px" }}
                  value={period}
                  onChange={(event, newValue) => {
                    // Verificar si el nuevo valor es diferente al valor actual o no es null
                    if (newValue !== period && newValue !== null) {
                      setPeriod(newValue);
                    }
                  }}
                  exclusive
                  size="small"
                >
                  <ToggleButton value="w" aria-label="week">
                    W{" "}
                  </ToggleButton>
                  <ToggleButton value="2w" aria-label="sprint">
                    2W
                  </ToggleButton>
                  <ToggleButton value="m" aria-label="month">
                    M{" "}
                  </ToggleButton>
                  <ToggleButton value="y" aria-label="year">
                    Y{" "}
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "35px",
              backgroundColor: "#663B73",
              borderRadius: "0px 0px 10px 10px",
            }}
          ></Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BigCard;
