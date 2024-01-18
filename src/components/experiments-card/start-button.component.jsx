import React from "react";
import { Button } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const StartButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        height: "2.5rem",
        width: "7rem",
        fontWeight: "bold",
        borderRadius: "1.2rem",
        display: "flex",
        backgroundColor: "#663B73",
        textTransform: "none",
        paddingLeft: "2rem",
        "&:active": {
          backgroundColor: "#663B73",
        },
        "&:focus": {
          backgroundColor: "#663B73",
        },
        "&:hover": {
          backgroundColor: "#663B73",
        },
      }}
      endIcon={<AdsClickIcon />}
    >
      Iniciar
    </Button>
  );
};

export default StartButton;
