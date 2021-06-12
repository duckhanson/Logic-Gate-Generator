import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import {sendVerilogFile, receiveData} from '../api/Interface'

const Upload = (props) => {
    return (
        <div>
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
