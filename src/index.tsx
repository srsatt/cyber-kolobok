import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./store-provider";
import { RootStore } from "./stores/root.store";

ReactDOM.render(
  <StoreProvider value={RootStore}>
    <>
      <App />
      <div id="popup-anchor"></div>
    </>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
