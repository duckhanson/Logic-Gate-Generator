import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InputTable from './inputTable';
import ResultTable from './resultTable';

import './workPage.css';

const WorkPage = (props) => {
    
    

    return (
        <Container className='WorkPage'>
            <Row>
                <Col xs="auto">
                    <Button as={Link} to="/WorkPage" variant='secondary'>Code Table</Button>
                </Col>
                <Col xs="auto">
                    <Button as={Link} to="/WorkPage/TruthTable" variant='secondary'>Truth Table</Button>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <InputTable/>
                </Col>
                <Col>
                    <ResultTable/>    
                </Col>
            </Row>
        </Container>
    );
}
 
export default WorkPage;