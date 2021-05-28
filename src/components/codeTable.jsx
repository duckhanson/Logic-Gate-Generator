import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './codeTable.css';

const CodeTable = (props) => {

    return (
        <Container fluid>
            <Row>
                <Col>
                    <textarea
                        className="form-control"
                        id="codeArea"
                        rows="30"
                        placeholder="What would you want to Generate ?
                        ---------------------------------------------
                        Example:
                        c=a&b
                        d=b|c
                        u=c&d
                        "
                    />
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col xs="auto">
                    <Button color="primary" id='submitBtn'>Submit</Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}
 
export default CodeTable;