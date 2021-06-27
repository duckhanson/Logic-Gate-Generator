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
            document.getElementById('codingArea').value = '';
            setCurTab('Result');
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
                                Quick Start:
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
