import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "./Components/styles/global.gcss";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store/index";
import reportWebVitals from "./reportWebVitals";
import ErrorBoundary from "./Components/error/ErrorBoundary";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// </React.StrictMode>,
