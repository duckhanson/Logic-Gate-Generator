import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import {sendVerilogFile as sendVerilogFileApi, receiveData as receiveDataApi} from '../api/Interface'

const Upload = (props) => {

    const {usrId, setLoading, setResult} = props;
    const [topModule, setTopModule] = useState('');
    const [subModule, setSubModule] = useState('');

    const handleSubmit = () => {
        setLoading(true);
        sendVerilogFileApi(usrId, {topModule, subModule}).then(() => {
            receiveData();
            setTopModule('');
            setSubModule('');
            setLoading(false);
        }).catch(err => {
            console.error('Error getting result', err);
            setTopModule('');
            setSubModule('');
            setLoading(false);
        });

    }

    const receiveData = () => {
        setLoading(true);
        receiveDataApi(usrId).then(result => {
            setResult(result);
            setLoading(false);
        }).catch(err => {
            console.error('Error getting result', err);
            setLoading(false);
        })
    }

    const handleUploadTopModule = (file) => {
        let subModule = document.getElementById('SubModule');
        subModule.style.display = 'block';
        setTopModule(file);
    }

    return (
        <div>
            {/* Main */}
            <div id="main">
                {/* Here to Upload! */}
                <article class="post featured">
                    <h3>You can upload your file here !</h3>
                    <input type="file" id="TopModule" accept='.v, .vh, .verilog,.vlg' onChange={(e) => handleUploadTopModule(e.target.value)} value={topModule}></input>
                    <input type="file" id="SubModule" accept='.v, .vh, .verilog,.vlg' onChange={(e) => setSubModule(e.target.value)} value={subModule} multiple></input>
                    <h2><br/></h2>
                    <div className="Submit">
                        <Button as={Link} to="/Result" variant="outline-dark" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Upload;
