import React from "react";
import Paragraph from "./Paragraph";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
function Jumbotron(props)  {
    return (
        <div className="row">
            <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.title}</span>
                <p><Paragraph /></p>
            </div>
                
            </div>
          </div>
            </div>
    )
}

export default Jumbotron;