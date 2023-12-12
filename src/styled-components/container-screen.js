import { styled } from "@mui/material";

const ContainerScreen = styled("div")(({ theme, bgColor }) => {
  return {
    backgroundColor: theme.palette[bgColor || "primary"].main,
    position: "fixed",
    display: "flex",
    height: "100vh",
    width: "100vw",
    maxWidth: "552px",
  };
});

export default ContainerScreen;
