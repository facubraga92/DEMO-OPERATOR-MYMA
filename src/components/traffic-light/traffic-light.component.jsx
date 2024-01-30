import React from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as ColorDotIcon } from "../../assets/images/traffic-light-dot.svg";

const TrafficLight = ({
  title,
  header,
  client,
  unitVolume,
  billing,
  profitability,
}) => {
  const colors = {
    red: "#FA0909",
    green: "#00A87C",
    yellow: "#FFD702",
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          marginInline: "1rem",
          marginBlockStart: "0.5rem",
          //   marginBlockEnd: "0.5rem",
          display: "flex",
          width: "350px",
          paddingInlineEnd: "0.5rem",
          paddingInlineStart: "0.2rem",
          backgroundColor: "#F6F6F6",
          height: "2.5rem",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
          item
          xs={header ? 5 : 12}
        >
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            {client}
          </Typography>
        </Grid>

        {header && (
          <>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={7 / 3}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: colors[unitVolume],
                }}
              >
                <ColorDotIcon style={{ fill: colors[unitVolume] }} />
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={7 / 3}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: colors[billing],
                }}
              >
                <ColorDotIcon style={{ fill: colors[billing] }} />
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={7 / 3}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: colors[profitability],
                }}
              >
                <ColorDotIcon style={{ fill: colors[profitability] }} />
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default TrafficLight;
