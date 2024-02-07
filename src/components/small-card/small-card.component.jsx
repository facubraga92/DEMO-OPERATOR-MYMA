import React from "react";
import { Grid, Typography } from "@mui/material";
import { ReactComponent as ArrowSmallRed } from "../../assets/images/arrow-red-small.svg";
import { ReactComponent as ArrowSmallGreen } from "../../assets/images/arrow-green-small.svg";

const SmallCard = ({
  type,
  productName,
  productSku,
  oldValue,
  newValue,
  change,
  title,
  description,
  variant,
  header,
}) => {
  return (
    <Grid container>
      {variant === "negative" ? (
        <Grid
          item
          xs={12}
          sx={{
            marginInline: "1rem",
            marginBlockEnd: "1rem",
            display: "flex",
            width: "350px",
            height: "6rem",
            border: "2px solid #727272",
            borderRadius: "1rem",
            paddingInlineEnd: "0.5rem",
            paddingInlineStart: "0.2rem",
            paddingBlock: "0.5rem",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={1}
          >
            <ArrowSmallRed />
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "column" }} xs={11}>
            <Grid
              item
              sx={{ display: "flex", alignItems: "center", maxHeight: 1 / 5 }}
              xs={12}
            >
              <Typography
                sx={{
                  color: "#FF0707",
                  fontWeight: "bold",
                  display: "flex",
                }}
              >
                {type}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                maxHeight: 2 / 5,
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  display: "flex",
                  lineHeight: "0.85rem",
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                height: 2 / 5,
                overflow: "hidden",
              }}
              xs={12}
            >
              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: "bold",
                  overflow: "hidden",
                  lineHeight: "0.65rem",
                }}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sx={{
            marginInline: "1rem",
            marginBlockEnd: "1rem",
            display: "flex",
            width: "350px",
            height: "6rem",
            border: "2px solid #727272",
            borderRadius: "1rem",
            paddingInlineEnd: "0.5rem",
            paddingInlineStart: "0.2rem",
            paddingBlock: "0.5rem",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={1}
          >
            <ArrowSmallGreen />
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "column" }} xs={4}>
            <Grid item sx={{ display: "flex", alignItems: "center" }} xs={12}>
              <Typography sx={{ color: "#00A87C", fontWeight: "bold" }}>
                {type}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {productName}
              </Typography>
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }} xs={12}>
              <Typography
                sx={{
                  fontSize: "0.6rem",
                  fontWeight: "bold",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {productSku}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={7 / 3}
          >
            <Grid
              item
              sx={{
                height: 1 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              {header && (
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    // fontWeight: "bold",
                    color: "#5A5956",
                  }}
                >
                  V-Antes
                </Typography>
              )}
            </Grid>
            <Grid
              item
              sx={{
                height: 2 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={12}
            >
              <Typography>{oldValue}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={7 / 3}
          >
            <Grid
              item
              sx={{
                height: 1 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              {header && (
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    // fontWeight: "bold",
                    color: "#5A5956",
                  }}
                >
                  V-Actual
                </Typography>
              )}
            </Grid>
            <Grid
              item
              sx={{
                height: 2 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              xs={12}
            >
              <Typography>{newValue}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={7 / 3}
          >
            <Grid
              item
              sx={{
                height: 1 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={12}
            >
              {header && (
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    // fontWeight: "bold",
                    color: "#5A5956",
                  }}
                >
                  Change %
                </Typography>
              )}
            </Grid>
            <Grid
              item
              sx={{
                height: 2 / 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                color: "#00A87C",
              }}
              xs={12}
            >
              <Typography>{change}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SmallCard;
