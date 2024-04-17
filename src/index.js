import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Strict mode va exécuter deux fois mes uses effect en  developpement
  <StrictMode>
    <App />
  </StrictMode>
);
