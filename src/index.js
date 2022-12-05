import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import "antd/dist/antd.min.css";
const root = createRoot(document.getElementById("root"));
root.render(<Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>);