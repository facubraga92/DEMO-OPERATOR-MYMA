import React, { useState } from "react";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import InProgressButton from "./buttons/in-progress-button.component";
import StartButton from "./buttons/start-button.component";
import MiddleSectionAction from "./middle-section/action.component";
import MiddleSectionProblem from "./middle-section/problem.component";

// const sliderSettings = {
//   infinite: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   appendDots: (dots) => (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "start",
//         position: "unset",
//       }}
//     >
//       <ul
//         style={{
//           paddingInlineStart: 0,
//           marginBlock: 0,
//           marginBlockStart: "-2.45rem",
//         }}
//       >
//         {" "}
//         {dots}{" "}
//       </ul>
//     </div>
//   ),
// };

const ExperimentsCard = ({
  type,
  productName,
  productSku,
  oldValue,
  newValue,
  change,
  title,
  description,
  variant,
}) => {
  //Experiment middle section selector - dev start
  const [experimentMiddleSection, setExperimentMiddleSection] =
    useState("problem");
  const handleMiddleSection = (event, newSection) => {
    if (newSection === null) {
      return;
    }

    setExperimentMiddleSection(newSection);
  };
  //Experiment middle section selector - dev end

  const [toggleButton, setToggleButton] = useState(false);

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
          height: "12rem",
          border: "2px solid #727272",
          borderRadius: "2rem",
          paddingInlineEnd: "0.5rem",
          paddingInlineStart: "0.2rem",
          paddingBlock: "0.5rem",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingInline: "1rem",
            maxHeight: 1 / 6,
          }}
          item
          xs={12}
        >
          <Grid item sx={{ display: "flex", height: "100%" }}>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={1}
            ></Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }} xs={11}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                EXPERIMENTO
              </Typography>
              &nbsp;
              <Typography
                variant="body2"
                sx={{ color: "#EA572E", fontWeight: "bold" }}
              >
                [0001]
              </Typography>
              &nbsp;
              <Typography
                sx={{
                  border: "1px solid #EA572E",
                  color: "#EA572E",
                  borderRadius: "5px",
                  padding: "2px 7px",
                  fontSize: "0.5rem",
                }}
              >
                Rotación
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* header end  */}

        {/* mid section start  */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingInline: "1rem",
            maxHeight: 3.5 / 6,
          }}
          item
          xs={12}
        >
          {/* Middle section selector button  */}
          <Grid item sx={{ height: 1 / 4, display: "flex" }}>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={1}
            ></Grid>
            <Grid
              sx={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={11}
            >
              <ToggleButtonGroup
                // color="primary"
                value={experimentMiddleSection}
                exclusive
                onChange={handleMiddleSection}
                aria-label="Platform"
                size="small"
                sx={{ height: "1.2rem" }}
              >
                <ToggleButton value="problem">
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        experimentMiddleSection === "problem"
                          ? "#EA572E"
                          : "#bfbfbf",
                      fontWeight: "bold",
                    }}
                  >
                    PROBLEMA
                  </Typography>
                </ToggleButton>
                <ToggleButton value="action">
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        experimentMiddleSection === "action"
                          ? "#EA572E"
                          : "#bfbfbf",
                      fontWeight: "bold",
                    }}
                  >
                    ACCIÓN
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          {/* Middle section selector button  */}
          {experimentMiddleSection === "problem" ? (
            <MiddleSectionProblem />
          ) : (
            <MiddleSectionAction />
          )}
          {/* mid section end  */}
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingInline: "1rem",
            maxHeight: 1.5 / 6,
          }}
          item
          xs={12}
        >
          <Grid item sx={{ display: "flex", height: "100%" }}>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={1}
            ></Grid>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
              xs={11}
            >
              {toggleButton ? (
                <InProgressButton
                  onClick={() => setToggleButton(!toggleButton)}
                />
              ) : (
                <StartButton onClick={() => setToggleButton(!toggleButton)} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperimentsCard;
