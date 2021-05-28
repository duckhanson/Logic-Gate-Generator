import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'reactstrap';

import "./inputTable.css";

const InputTable = (props) => {
    const codeMode = 0;
    const truthTableMode = 1;

    const [mode, setMode] = useState(0);


    return (
        <Container fluid className="form-group">
            <Row>
                <textarea
                className="form-control"
                id="codeArea"
                rows="30"
                placeholder="I'm InputTable"
                />
            </Row>
        </Container>
    )
}

export default InputTable;

