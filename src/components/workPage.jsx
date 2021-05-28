import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import InputTable from './inputTable';
import ResultTable from './resultTable';

import './workPage.css';

const WorkPage = (props) => {
    
    

    return (
        <Container className='WorkPage'>
            <Row>
                <Col xs={2}>
                    <Button color='secondary'>Code Table</Button>
                </Col>
                <Col xs={2}>
                    <Button color='secondary'>Truth Table</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputTable/>
                </Col>
                <Col>
                    <ResultTable/>    
                </Col>
            </Row>
            <Row>
                <Button color="primary" id='submitBtn'>Submit</Button>{' '}
            </Row>
        </Container>
    );
}
 
export default WorkPage;