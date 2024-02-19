import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import "./App.css";
import "./assets/css/auth.css";
import "./assets/css/dashboard.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RecoilRoot><App /></RecoilRoot>);

reportWebVitals();
