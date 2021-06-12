import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {sendVerilogText, receiveData} from '../api/Interface'

const Coding = (props) => {
    const [usrId, setLoading, setResult] = props;

    const handleSubmit = () => {
        let inputValue = document.getElementById('codingArea').value;
        console.log(inputValue);
        // <Coding userid={loginId} setLoading={setLoading} setResult={setResultFilePath} />
        // TODO Async Code
        // sendVerilogText(usrId, inputValue);
        
        // empty textarea value
        document.getElementById('codingArea').value = '';
    }

    return (
        /* Wrapper */
        <div>
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
