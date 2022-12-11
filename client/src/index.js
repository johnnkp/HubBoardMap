/* PROGRAMMER: hotomho and SzelamC
 * Mok Chau Wing (1155142763)
 * Chan Shi Leung Jonathan (1155142863)
 * Li Tsz Yeung (1155144367)
 * Ng Kai Pong (1155144829)
 * Lee Yat Him (1155176301)
 * Lin Chun Man (1155177065)
 */
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import theme from "./styles/theme";
import App from "./App";
import store from "./store/index";
import "./styles/global.module.css";

// Experimental: import empty service worker for PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// Experimental: register service worker
serviceWorkerRegistration.register();
