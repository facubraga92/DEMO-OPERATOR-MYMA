import { Grid, Typography } from "@mui/material";
import { ReactComponent as ArrowMediumRed } from "../../assets/images/arrow-red-big.svg";
import { ReactComponent as ArrowMediumGreen } from "../../assets/images/arrow-green-big.svg";
import { ReactComponent as ExperimentsIcon } from "../../assets/images/experiments-icon.svg";
import { ReactComponent as VendingMachineIcon } from "../../assets/images/vending-icon.svg";

import React from "react";

const MediumCard = ({
  type,
  title,
  subtitle,
  list,
  value,
  icon,
  imgURL,
  variant,
}) => {
  const icons = {
    none: null,
    experiment: <ExperimentsIcon style={{ fill: "black" }} fontSize="large" />,
    vending: <VendingMachineIcon style={{ fill: "black" }} />,
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
          display: "flex",
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
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          xs={1}
        >
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", maxHeight: 1 / 3 }}
            xs={4}
          >
            {icons[icon]}
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }} xs={8}>
            {variants[variant].arrow}
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          xs={11}
        >
          <Grid
            item
            sx={{ display: "flex", maxHeight: 1 / 3, alignItems: "center" }}
            xs={12}
          >
            <Typography
              sx={{
                color: variants[variant].color,
                fontWeight: "bold",
              }}
            >
              {type}
            </Typography>
            <Typography>&nbsp;- {title}</Typography>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", maxHeight: 2 / 3 }}
            xs={12}
          >
            <Grid item xs={variant !== "neutral" ? 12 : 8}>
              {list &&
              Array.isArray(list) &&
              list.length > 0 &&
              variant !== "neutral" ? (
                <ol style={{ paddingLeft: "1rem" }}>
                  {list.map((element, index) => (
                    <li key={index}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {Object.keys(element)}: {element[Object.keys(element)]}
                      </Typography>
                    </li>
                  ))}
                </ol>
              ) : list && variant === "neutral" ? (
                <ul style={{ paddingLeft: "1rem" }}>
                  {list.map((element, index) => (
                    <li key={index}>
                      <Typography variant="caption" fontWeight="bold">
                        {element}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography sx={{ paddingLeft: "1rem" }} variant="h2">
                  {value}€
                </Typography>
              )}
            </Grid>
            {variant === "neutral" && (
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
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediumCard;
