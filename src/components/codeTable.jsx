import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './CodeTable.css';

const CodeTable = (props) => {

    return (
        // <div className='editorContainer'>
        //     <div className='editorTitle'>
        //         Verilog
        //     </div>
        // </div>

        <div>
            <form>
                <div className='form-group'>
                    <div class="form-group">
                        <textarea class="form-control" rows='30' 
                        placeholder="What would you want to Generate ?
                        ---------------------------------------------
                        Example:
                        c=a&b
                        d=b|c
                        u=c&d
                        "></textarea>
                    </div>
                </div>
            </form>

            <Button className='submitBtn' variant="outline-dark" id='submitBtn'>Submit</Button>{' '}
        </div>
    );
}
 
export default CodeTable;