import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.css";
import Coding from "./Coding";
import Upload from "./Upload";
import Result from "./Result";
import "../assets/css/main.css";
import "../assets/css/noscript.css";
// import "../assets/js/jquery.min.js";
// import "../assets/js/jquery.scrollex.min.js";
// import "../assets/js/jquery.scrolly.min.js";
// import "../assets/js/browser.min.js";
// import "../assets/js/breakpoints.min.js";
// import "../assets/js/util.js";
// import "../assets/js/main.js";

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
