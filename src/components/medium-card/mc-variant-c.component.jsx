import { Grid, Typography } from "@mui/material";
import { ReactComponent as ArrowMediumRed } from "../../assets/images/arrow-red-big.svg";
import { ReactComponent as ArrowMediumGreen } from "../../assets/images/arrow-green-big.svg";
import { ReactComponent as ExperimentsIcon } from "../../assets/images/experiments-icon.svg";
import { ReactComponent as VendingMachineIcon } from "../../assets/images/vending-icon.svg";
import { ReactComponent as ChangesIcon } from "../../assets/images/changes-icon.svg";

import React from "react";

const MediumCardVariantC = ({
  type,
  title,
  subtitle,
  list,
  icon,
  imgURL,
  variant,
  arrow,
}) => {
  const icons = {
    none: null,
    experiment: <ExperimentsIcon style={{ fill: "black", height: "1.5rem" }} />,
    vending: <VendingMachineIcon style={{ fill: "black", height: "1.5rem" }} />,
    blocks: <ChangesIcon style={{ fill: "black", height: "1.5rem" }} />,
  };

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
          >
            {icons[icon]}
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }} xs={11}>
            <Typography
              sx={{
                color: variants[variant].color,
                fontWeight: "bold",
              }}
            >
              {type}&nbsp;:
            </Typography>
            <Typography>&nbsp; {title}</Typography>
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
              flexDirection: "column",
            }}
            xs={7}
          >
            <Grid item sx={{ height: 1 / 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {subtitle}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{ display: "flex", alignItems: "center", height: 2 / 3 }}
            >
              <ul style={{ paddingLeft: "1rem", lineHeight: "0rem" }}>
                {list.map((element, index) => (
                  <li key={index}>
                    <Typography fontSize="0.65rem" fontWeight="bold">
                      {element}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={4}
          >
            <img src={imgURL} height="80px" alt="Campaign img" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediumCardVariantC;
