import { Grid, Typography } from "@mui/material";
import React from "react";

const Section = ({ title, header }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          marginInline: "1rem",
          marginBlockStart: "0.5rem",
          marginBlockEnd: "0.5rem",
          display: "flex",
          width: "350px",
          paddingInlineEnd: "0.5rem",
          paddingInlineStart: "0.2rem",
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
            {title}
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
                  color: "#5A5956",
                }}
              >
                V-Antes
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
                  color: "#5A5956",
                }}
              >
                V-Actual
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
                  color: "#5A5956",
                }}
              >
                Change %
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Section;
