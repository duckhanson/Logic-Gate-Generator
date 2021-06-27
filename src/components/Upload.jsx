import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {sendVerilogFile as sendVerilogFileApi, receiveData as receiveDataApi} from '../api/Interface'

const Upload = (props) => {

    const {usrId, setLoading, setResult, setCurTab} = props;
    const [topModule, setTopModule] = useState('');

    const handleSubmit = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', topModule, topModule.name);
        
        console.log(formData);
        sendVerilogFileApi(usrId, formData).then(() => {
            receiveData();
            setTopModule('');
            setLoading(false);
            setCurTab('Result');
        }).catch(err => {
            console.error('Error getting result', err);
            setTopModule('');
            setLoading(false);
        });

    }

    const receiveData = () => {
        receiveDataApi(usrId).then(result => {
            setResult(result);
        }).catch(err => {
            console.error('Error getting result', err);
        })
    }

    return (
        <div>
            {/* Main */}
            <div id="main">
                {/* Here to Upload! */}
                <article className="post featured">
                    <h3>TopModule (only accept verilog file)</h3>
                    <input type="file" name='file' id="TopModule" accept='.v, .vh, .verilog,.vlg' onChange={(e) => setTopModule(e.target.files[0])} />
                    <h2><br/></h2>
                    <div className="Submit">
                        <Button variant="outline-dark" onClick={handleSubmit}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Upload;
