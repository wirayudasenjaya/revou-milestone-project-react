import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import "./App.css";
import "./css/auth.css";
import "./css/dashboard.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RecoilRoot><App /></RecoilRoot>);

reportWebVitals();
