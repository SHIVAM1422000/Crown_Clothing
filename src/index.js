import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/card.context";
import { store } from "./store /store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
          <CardProvider>
            <App />
          </CardProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
