import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createSignalRContext } from "react-signalr";

export const SignalRContext = createSignalRContext();

const theme = createTheme({
  typography: {
    fontFamily: ` "MuseoSans", sans-serif`,
    fontSize: 14,
    color: "#FFF",
    h4: {
      fontWeight: 900,
      fontFamily: '"MuseoSansRounded"',
      fontSize: "36px",
      color: "#FFF",
    },
  },
  palette: {
    primary: {
      main: "#EA572E",
      dark: "#B93C09",
    },
    secondary: {
      main: "#494c7d",
      light: "#4E2C61",
    },
    beige: {
      main: "#EBE9DA",
    },
    purple: {
      main: "#663B73",
    },
    white: {
      main: "#FFFFFF",
    },
    green: {
      main: "#00A87C",
    },
    pink: {
      main: "#E7255F",
    },
    grey: {
      main: "#5A5956",
    },
    red: {
      main: "#E21B2B",
    },
    black: {
      main: "#000000",
    },
    onboarding_bg: {
      main: "#EBE9DA",
    },
    buttonGrey: { main: "#707070" },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/DEMO-OPERATOR-MYMA">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
