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

    const removePlaceHolder = () => {
        console.log('Enter removePlaceHolder');
        let content = document.getElementById('codingArea').value;
        if (content === '') {
            document.getElementById('codingArea').classList.add('displayBg');
        } else {
            document.getElementById('codingArea').classList.remove('displayBg');
        }
    }

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
                                <textarea id='codingArea' className="form-control displayBg" rows='20' onChange={()=>removePlaceHolder()} ></textarea>
                            </label>
                        </div>
                        
                    </form>
                    {/* <form onSubmit={handleSubmit}>
                        <label>
                        Quick Start:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form> */}
                    <div className="Submit">
                        <Button variant="outline-dark" onClick={() => handleSubmit()}>Submit</Button>
                    </div>
                </article>
            </div>
        </div>
        
    );
};

export default Coding;
