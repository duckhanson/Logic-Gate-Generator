import React from "react";
import { Button } from "react-bootstrap";
import {sendUserDefinedText as senduserDefinedTextApi} from '../api/Interface'

const Coding = (props) => {
    const {usrId, setLoading, setResult, setCurTab} = props;

    const handleSubmit = () => {
        let inputValue = document.getElementById('codingArea').value;
        if (inputValue === '') {
            alert('The Input Box should be filled !');
        } else {
            console.log(inputValue);
            // TODO Async Code
            setLoading(true);
            senduserDefinedTextApi(usrId, inputValue).then(result => {
                setResult(result);
                setLoading(false);
            }).catch(err => {
                console.error('Error getting result', err);
                setLoading(false);
            });
            // empty textarea value
            // document.getElementById('codingArea').value = '';
            setCurTab('Result');
        }
    }

    // const removePlaceHolder = () => {
    //     console.log('Enter removePlaceHolder');
    //     let content = document.getElementById('codingArea').value;
    //     if (content === '') {
    //         document.getElementById('codingArea').classList.add('displayBg');
    //     } else {
    //         document.getElementById('codingArea').classList.remove('displayBg');
    //     }
    // }

    return (
        /* Wrapper */
        <div>
            {/* Main */}
            <div id="main">
                <article className="post featured">
                    <form>
                        <div className='form-group'>
                            <label>
                                Quick Start
                                <textarea id='codingArea' className="form-control displayBg" rows='20' 
                                placeholder={'Fisrt line is the input symbol name.\nSecond line is output symbol name.\nNext write down the expression.\nexample:\n\na b c d e f\nout1 out2\nout1 = (a & b) ~^ (c | d)\ntmp = (a & b & c & d) & (e | f)\nout2 = !tmp\n\n\nIn this example, a b c d e f are inputs, out1 and out2 are output.\nThe following lines describe how to connect the wires.'}
                                ></textarea>
                            </label>
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
