import { Grid, Typography } from "@mui/material";
import { ReactComponent as ArrowMediumRed } from "../../assets/images/arrow-red-big.svg";
import { ReactComponent as ArrowMediumGreen } from "../../assets/images/arrow-green-big.svg";

import React from "react";

const MediumCardVariantD = ({ type, content, variant, arrow }) => {
  const variants = {
    positive: {
      arrow: <ArrowMediumGreen />,
      color: "#00A87C",
    },
    negative: {
      arrow: <ArrowMediumRed />,
      color: "#FF0707",
    },
    neutral: {
      arrow: null,
      color: "#000",
    },
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          marginInline: "1rem",
          marginBlockEnd: "1rem",
          width: "350px",
          height: "8rem",
          border: "2px solid #727272",
          borderRadius: "1rem",
          paddingInlineEnd: "0.2rem",
          paddingInlineStart: "0.2rem",
          paddingBlock: "0.5rem",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", maxHeight: 1 / 3, height: 1 / 3 }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={1}
          ></Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }} xs={11}>
            <Typography
              sx={{
                color: variants[variant].color,
                fontWeight: "bold",
              }}
            >
              {type}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", height: 2 / 3, maxHeight: 2 / 3 }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={1}
          >
            {arrow !== false && variants[variant].arrow}
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              paddingBlock: "0.5rem",
            }}
            xs={11}
          >
            <Typography variant="subtitle1">{content}</Typography>
          </Grid>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediumCardVariantD;
