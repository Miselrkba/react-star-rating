import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import colors from "./color-data.json";
import ColorProvider  from "./ColorProvider";

export const ColorContext = createContext();

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
