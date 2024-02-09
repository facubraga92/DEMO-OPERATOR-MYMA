import { Grid, Typography } from "@mui/material";
import { ReactComponent as ArrowMediumRed } from "../../assets/images/arrow-red-big.svg";
import { ReactComponent as ArrowMediumGreen } from "../../assets/images/arrow-green-big.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

import React from "react";

const MediumCardVariantF = ({ type, list, variant, position, date }) => {
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
          height: "auto",
          border: "2px solid #727272",
          borderRadius: "1rem",
          paddingInlineEnd: "0.2rem",
          paddingInlineStart: "0.2rem",
          //   paddingBlock: "0.5rem",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex", height: "15%" }}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={1}
          >
            {" "}
            <ShoppingCartIcon
              sx={{ height: "80%", width: "100%", fill: "#00A87C" }}
            />
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }} xs={11}>
            <Typography
              variant="body2"
              sx={{
                color: variants[variant].color,
                fontWeight: "bold",
                width: "37.5%",
                // fontSize: "0.8rem",
              }}
            >
              {position}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: variants[variant].color,
                fontWeight: "bold",
                width: "37.5%",
                // fontSize: "0.8rem",
              }}
            >
              {date}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: variants[variant].color,
                width: "25%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Ventas</span> &nbsp;
              <span>(Un)</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            // paddingBlock: "0.5rem",
          }}
          xs={12}
        >
          {list && Array.isArray(list) && list.length > 0 && (
            <ol
              style={{
                paddingLeft: "0rem",
                fontSize: "0.7rem",
                fontWeight: "bold",
                width: "100%",
                listStyleType: "none",
              }}
            >
              {list.map((element, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                  }}
                >
                  {Object.entries(element).map(([key, value]) => (
                    <Grid item xs={12} sx={{ display: "flex" }} key={key}>
                      <Grid
                        item
                        xs={9}
                        sx={{ fontWeight: "bold", display: "flex" }}
                      >
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          {key}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.8rem" }}>
                          {value}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </li>
              ))}
            </ol>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MediumCardVariantF;
