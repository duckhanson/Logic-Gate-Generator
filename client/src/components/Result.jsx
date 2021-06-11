import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Main.css";
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';

const Result = (props) => {
    return (
        //  Wrapper
        <div id="wrapper" class="fade-in">


            {/* Header */}
            <header id="header">
                <h1 className="logo">Logic Gate Generator</h1>
            </header>

            {/* Nav */}
            <nav id="nav">
                <ul class="links">
                    <li><a href="/">Coding Here</a></li>
                    <li><a href="/Upload">Upload .v file</a></li>
                    <li className="active"><a href="/Result">Result image</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>

            {/* Main */}
            <div id="main">
                <section className="post">
                    <ResultTable />    
                </section>
            </div>

            {/* Footer */}
            <div id="copyright">
                <ul>
                    <li>Logic Gate Generator</li>
                    <li>&copy; NTHU</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Result;
