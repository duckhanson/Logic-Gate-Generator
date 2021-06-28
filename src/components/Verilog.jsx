import React from "react";
import { Button } from "react-bootstrap";
import {sendVerilogText as sendVerilogTextApi} from '../api/Interface'

const Verilog = (props) => {
    const {usrId, setLoading, setResult, setCurTab} = props;

    const handleSubmit = () => {
        let inputValue = document.getElementById('verilogArea').value;
        let topModuleName = document.getElementById('topModuleName').value;
        if (inputValue === '' | topModuleName === '') {
            alert('All Input Boxes should be filled !');
        } else {
            setLoading(true);
            console.log('topModuleName', topModuleName);
            console.log('inputValue', inputValue);
            // TODO Async Code
            sendVerilogTextApi(usrId, topModuleName, inputValue).then(result => {
                setResult(result);
                setLoading(false);
            }).catch(err => {
                console.error('Error getting result', err);
                setLoading(false);
            });
            // empty textarea value
            // document.getElementById('verilogArea').value = '';
            setCurTab('Result');
        }
    }

    return (
        /* Wrapper */
        <div>
            {/* Main */}
            <div id="main">
                <article className="post featured">
                    <form autoComplete='on'>
                        <div className='form-group'>
                            <label>
                                Top Moudle Name
                                <input type="text" className='form-control' name="topModuleName" id='topModuleName' required />
                            </label>      
                            <label htmlFor="verilogArea"> Your Verilog Code</label>
                                <textarea id='verilogArea' className="form-control" rows='20' 
                                placeholder="Paste your verilog code !
                                "></textarea>
                        </div>
                    </form>
                    <div className="Submit">
                        <Button variant="outline-dark" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
        
    );
};

export default Verilog;
