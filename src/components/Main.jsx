import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.css";
import Coding from "./Coding";
import Upload from "./Upload";
import Result from "./Result";
import "../assets/css/main.css";
import "../assets/css/noscript.css";

const Main = (props) => {
    return (
        <Router>
            <Route exact path="/" component={Coding}/>
            <Route exact path="/Upload" component={Upload}/>
            <Route exact path="/Result" component={Result}/>
        </Router>
    );
};

export default Main;
