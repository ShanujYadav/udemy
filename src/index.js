import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
)