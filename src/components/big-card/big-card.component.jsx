import React from "react";
import { Button, ButtonGroup, Grid, Paper, Typography } from "@mui/material";
import { ReactComponent as TrendLineChartIcon } from "../../assets/images/trend-line-chart.svg";
import { ReactComponent as ArrowBigGreen } from "../../assets/images/arrow-green-big.svg";

const BigCard = ({
  title,
  subtitle,
  headline,
  quantity,
  currencySymbol,
  percentage,
}) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          marginInline: "1rem",
          marginBlockStart: "1rem",
          marginBlockEnd:"0.5rem",
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
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                color: "#A9A9A9",
                fontSize: "18px",
              }}
            >
              {subtitle}
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
              xs={12}
              sx={{
                minHeight: "2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
                <TrendLineChartIcon style={{ height: "32px" }} />
              </Grid>
              <Grid xs={8} sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontSize: "1.25rem" }}>{headline}</Typography>
              </Grid>
            </Grid>
            <Grid
              xs={12}
              sx={{
                minHeight: "4rem",
                display: "flex",
              }}
            >
              <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
                <ArrowBigGreen />
              </Grid>
              <Grid xs={8} sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Typography
                  sx={{
                    fontSize: "4rem",
                    lineHeight: "4rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {quantity}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  {currencySymbol}
                </Typography>
              </Grid>
              <Grid
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
                    backgroundColor: "#2CAF5F",
                    borderRadius: "3px",
                    padding: "5px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {percentage}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              xs={12}
              sx={{
                minHeight: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <ButtonGroup
                variant="outlined"
                color="black"
                sx={{ height: "25px" }}
                size="small"
              >
                <Button value="1W">1W</Button>
                <Button value="1M">1M</Button>
                <Button value="1Y">1Y</Button>
                <Button value="All">All</Button>
              </ButtonGroup>
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
