import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButtonContained = styled(Button)(({ theme, color, disabled }) => {
  const selectedColor = theme.palette[color || "primary"].main;
  const darkerColor = theme.palette[color || "primary"].dark;

  return {
    fontSize: 18,
    fontWeight: 900,
    margin: "8px 0",
    backgroundColor: selectedColor,
    color: theme.palette.getContrastText(selectedColor),
    boxShadow: "none",
    textTransform: "none",
    padding: "6px 12px",
    border: "1px solid",
    borderColor: selectedColor,
    borderRadius: "2rem",
    width: "100%",
    height: "64px",

    span: {
      margin: "0 10px",
    },
    "&:hover": {
      backgroundColor: darkerColor,
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: theme.palette.primary.light,
    },
  };
});

const CustomButtonOutLined = styled(Button)(({ theme, color, disabled }) => {
  const selectedColor = theme.palette[color || "beige"].main;

  return {
    fontSize: 18,
    fontWeight: 900,
    margin: "8px 0",
    boxShadow: "none",
    textTransform: "none",
    padding: "6px 12px",
    border: "1px solid",
    borderColor: selectedColor,
    color: selectedColor,
    borderRadius: "2rem",
    width: "100%",
    height: "64px",

    span: {
      margin: "0 10px",
    },
  };
});

export default function CustomizedButtons({
  children,
  label,
  handleClick,
  variant = "contained",
  color,
  disabled,
  ...rest
}) {
  if (variant === "contained") {
    return (
      <CustomButtonContained
        color={color}
        onClick={handleClick}
        disabled={disabled}
        disableRipple
        {...rest}
      >
        <span>{label}</span>
        {children}
      </CustomButtonContained>
    );
  }

  if (variant === "outlined") {
    return (
      <CustomButtonOutLined
        color={color}
        onClick={handleClick}
        disabled={disabled}
        disableRipple
        {...rest}
      >
        <span>{label}</span>
        {children}
      </CustomButtonOutLined>
    );
  }
}
