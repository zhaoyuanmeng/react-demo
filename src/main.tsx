import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import All, { Comment } from "./day1/one";
import Clock from './day1/two'
import UserGreeting from './day1/three'
import Four from './day1/four'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <All name="zyd"></All>
    <Comment name="zyddddd" txt="rarars"></Comment>
    <Clock></Clock> */}
    {/* <UserGreeting name='li'></UserGreeting> */}
    <Four></Four>
  </React.StrictMode>
);
