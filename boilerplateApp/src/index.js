require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import style from "./App.scss";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
