import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import All, { Comment } from "./day1/one";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <All name="zyd"></All>
    <Comment name="zyddddd" txt="rarars"></Comment>
  </React.StrictMode>
);
