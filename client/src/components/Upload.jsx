import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Upload = (props) => {
    return (
        //  Wrapper
        <div>
            {/* Nav */}
            {/* <nav id="nav">
                <ul class="links">
                    <li><a href="/">Coding Here</a></li>
                    <li className="active"><a href="/Upload">Upload .v file</a></li>
                    <li><a href="/Result">Result image</a></li>
                </ul>
            </nav> */}

            {/* Main */}
            <div id="main">
                {/* Here to Upload! */}
                <article class="post featured">
                    <h3>You can upload your file here !</h3>
                    <input type="file" id="file-uploader"></input>
                    <h2><br/></h2>
                    <div className="Submit">
                        <Button as={Link} to="/Result" variant="outline-dark">Submit</Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Upload;
