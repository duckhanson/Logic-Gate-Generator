import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {sendVerilogText, sendVerilogFile, sendUserDefinedText, receiveData} from '../api/Interface'

const Coding = (props) => {

    const handleSubmit = () => {
        let inputValue = document.getElementById('codingArea').value;
        console.log(inputValue);
    }


    return (
        /* Wrapper */
        <div>
            {/* Intro */}
            

            {/* Nav */}
            {/* <nav id="nav">
                <ul className="links">
                    <li className="active"><a href="/#header">Coding Here</a></li>
                    <li><a href="/Upload#header">Upload .v file</a></li>
                    <li><a href="/Result#header">Result image</a></li>
                </ul>
            </nav> */}
            
            {/* Main */}
            <div id="main">
                <article class="post featured">
                    <form autoComplete='on'>
                        <div className='form-group'>
                                <textarea id='codingArea' className="form-control" rows='20' 
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
                        <Button as={Link} to="/Result" variant="outline-dark" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
        
    );
};

export default Coding;
