import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route } from "react-router";
import CodeTable from "./codeTable";
import TruthTable from "./truthTable";

import "./inputTable.css";

const InputTable = (props) => {
    const codeMode = 0;
    const truthTableMode = 1;

    const [mode, setMode] = useState(0);


    return (
        <Container fluid className="form-group">
            <Row>
                <Col>
                    <Route exact path="/WorkPage" component={CodeTable} />
                    <Route path="/WorkPage/TruthTable" component={TruthTable} />
                </Col>
            </Row>
        </Container>
    )
}

export default InputTable;

