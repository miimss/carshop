  
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import QList from "./Qlist";
  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <p>Kerro lemppariruoka</p>
        <QList/>
        <p>Kerro lemppariväri</p>
        <QList/>
        <p>Kerro henkilöturvatunnus</p>
        <QList/>
    </div>,
    destination
);