import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route } from "react-router";
import CodeTable from "./CodeTable";
import TruthTable from "./TruthTable";

import "./InputTable.css";

const InputTable = (props) => {
    const codeMode = 0;
    const truthTableMode = 1;

    const [mode, setMode] = useState(0);


    return (
        <div>
            <Route exact path="/WorkPage" component={CodeTable} />
            <Route path="/WorkPage/TruthTable" component={TruthTable} />
        </div>
    )
}

export default InputTable;

