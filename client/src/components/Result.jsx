import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import {sendVerilogText, sendVerilogFile, sendUserDefinedText, receiveData} from '../api/Interface'

const Result = (props) => {
    return (
        //  Wrapper
        <div>
            {/* Nav */}
            {/* <nav id="nav">
                <ul class="links">
                    <li><a href="/">Coding Here</a></li>
                    <li><a href="/Upload">Upload .v file</a></li>
                    <li className="active"><a href="/Result">Result image</a></li>
                </ul>
            </nav> */}

            {/* Main */}
            <div id="main">
                <section className="post">
                    <ResultTable />    
                </section>
            </div>
        </div>
    );
};

export default Result;
