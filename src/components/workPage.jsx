import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import InputTable from './InputTable';
import ResultTable from './ResultTable';

import './WorkPage.css';

const WorkPage = (props) => {
    
    

    return (
        <Container className='WorkPage'>
            <div className='fixed-top'>
                <Button variant="outline-dark" as={Link} to="/WorkPage">Code Table</Button>
                <Button variant="outline-dark" as={Link} to="/WorkPage/TruthTable">Truth Table</Button>
                <hr />
            </div>
            <Row className='justify-content-center'>
                <Col xs='auto'>
                    <InputTable/>
                </Col>
                <Col xs='6'>
                    <ResultTable/>    
                </Col>
            </Row>
        </Container>
    );
}
 
export default WorkPage;