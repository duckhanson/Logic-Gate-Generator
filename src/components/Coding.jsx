import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

// const meta = {
//     title: 'Logic Gate Generator',
//     htmlAttributes: { lang: 'en' },
//     bodyAttributes: { className: 'root' },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport'},
//       { content: "width=device-width, initial-scale=1, user-scalable=no" }
//     ],
//     link: [
//       { rel: 'stylesheet', href: "../assets/css/main.css" },
//       { rel: 'stylesheet', href: "../assets/css/noscript.css" }
//     ]
// }

const Coding = (props) => {
    return (
        /* Wrapper */
        <div id="wrapper" className="fade-in">

            {/* Intro */}
            <div id="intro">
                <h1>This is<br />
                Logic Gate Generator</h1>
                <p>A free react project developed by Software Studio Team 14, spring 2021<br />
                that helps you to draw the logic gates in a smarter way.</p>
                <ul className="actions">
                    <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                </ul>
            </div>

            {/* Header */}
            <header id="header">
                <h1 className="logo">Logic Gate Generator</h1>
            </header>

            {/* Nav */}
            <nav id="nav">
                <ul className="links">
                    <li className="active"><a href="/">Coding Here</a></li>
                    <li><a href="/Upload">Upload .v file</a></li>
                    <li><a href="/Result">Result image</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="https://github.com/duckhanson/Logic-Gate-Generator" className="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
            
            {/* Main */}
            <div id="main">
                <article class="post featured">
                    <form autoComplete='on'>
                        <div className='form-group'>
                    
                                <textarea className="form-control" rows='20' 
                                placeholder="What would you want to Generate ?
                                ---------------------------------------------
                                Example:
                                c=a&b
                                d=b|c
                                u=c&d
                                ---------------------------------------------
                                Press and Play !
                                "></textarea>
        
                        </div>
                    </form>
                    <div className="Submit">
                        <Button as={Link} to="/Result" variant="outline-dark">Submit</Button>
                    </div>
                </article>
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

export default Coding;
