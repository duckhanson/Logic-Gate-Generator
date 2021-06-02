import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './CodeTable.css';

const CodeTable = (props) => {

    return (
        <div>
            <textarea
                className="form-control"
                id="codeArea"
                cols="40"
                rows="30"
                placeholder="What would you want to Generate ?
                ---------------------------------------------
                Example:
                c=a&b
                d=b|c
                u=c&d
                "
            />
            <Button className='submitBtn' color="primary" id='submitBtn'>Submit</Button>{' '}

        </div>
    );
}
 
export default CodeTable;