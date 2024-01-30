// App.js

import React from "react";
import { Box } from "@mui/material";
import AppRoutes from "./AppRoutes";

export const Auth = () => {
  // Código del componente Auth
  return null;
};

export const Callback = () => {
  // Código del componente Callback
  return null;
};

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <AppRoutes />
    </Box>
  );
};

export default App;
