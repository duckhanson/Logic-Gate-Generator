import React from "react";
import { Button } from "react-bootstrap";
import {sendVerilogText as sendVerilogTextApi, receiveData as receiveDataApi} from '../api/Interface'

const Coding = (props) => {
    const {usrId, setLoading, setResult, setCurTab} = props;

    const handleSubmit = () => {
        let inputValue = document.getElementById('codingArea').value;
        console.log(inputValue);
        // TODO Async Code
        sendVerilogTextApi(usrId, inputValue).then( () => {
            receiveData();
        }).catch(err => {
            console.error('Error getting result', err);
        });
        // empty textarea value
        document.getElementById('codingArea').value = '';
        setCurTab('Result');
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

    return (
        /* Wrapper */
        <div>
            {/* Main */}
            <div id="main">
                <article className="post featured">
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
                        <Button variant="outline-dark" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
        
    );
};

export default Coding;
