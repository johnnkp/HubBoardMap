import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./Styles/theme";

import App from "./App";

import "./Styles/global.module.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
