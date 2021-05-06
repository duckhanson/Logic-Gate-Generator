import React, { useState, useEffect } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    Label,
    Input,
    ButtonToggle,
} from "reactstrap";

import "./inputTable.css";

function InputTable(props) {
    const CODE_MODE = 0;
    const TRUTH_TABLE_MODE = 1;
    const [mode, setMode] = useState(CODE_MODE);

    useEffect(() => {});

    return (
        <div className="inputTable border-double">
            <Button
                className='button-u code'
                color="primary"
                onClick={() => setMode(CODE_MODE)}
            >
                Code
            </Button>
            <Button
                className='button-u truth_table'
                color="primary"
                onClick={() => setMode(TRUTH_TABLE_MODE)}
            >
                Truth Table
            </Button>

            <div className="codeSection">
                <Label for="codeText">Code Area</Label>
                <Input
                    className='codeText'
                    type="textarea"
                    name="codeText"
                    id="codeText"
                />
            </div>
            <div  className='button-u submit' >
                <Button color="secondary" onClick={() => {}}>
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default InputTable;
