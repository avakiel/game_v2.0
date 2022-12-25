import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { App } from "./components/App";
import Store from './Store/Store'
import { Provider } from "react-redux";






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
