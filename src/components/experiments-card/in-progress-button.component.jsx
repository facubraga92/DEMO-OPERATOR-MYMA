import React from "react";
import { Button } from "@mui/material";
import { ReactComponent as AtomIcon } from "../../assets/images/atom-icon.svg";

const InProgressButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{
        height: "2.5rem",
        width: "7rem",
        border: "1px solid #4AA57F",
        borderRadius: "1.2rem",
        display: "flex",
        textTransform: "none",
        fontSize: "0.85rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: "#4AA57F",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#4AA57F",
          border: "1px solid #4AA57F",
        },
        "& .endIcon": {
          fill: "#fff",
        },
        ".css-9tj150-MuiButton-endIcon": {
          marginLeft: "0.25rem",
        },
      }}
      endIcon={<AtomIcon style={{ height: "20px", width: "20px" }} />}
    >
      En Progreso
    </Button>
  );
};

export default InProgressButton;
