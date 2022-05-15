// React
import React from "react";
import ReactDOM from "react-dom";

// Folha de estilos
import "./styles/global.scss";

import App from "./App";

// React 18

// const root = ReactDOM.createRoot(document.getElementById("root") as Element);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


