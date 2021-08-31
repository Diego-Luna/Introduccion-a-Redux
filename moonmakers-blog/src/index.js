import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// importamos redux
import { createStore } from "redux";
import { Provider } from "react-redux";

// importamos los reducers ( funciones que resiven el estado y la accion )
import reducers from "./reducers";

// creamos una almacemamiento o un Stores
// le pasamos todos los reducers:
// y el estado inicial
const store = createStore(reducers, {});

ReactDOM.render(
  // le pasamos el provaider con el stado o Store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
