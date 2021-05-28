import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import InputTable from './inputTable';
import ResultTable from './resultTable';

import './homePage.css';

const HomePage = (props) => {
    
    

    return (
        <Container className='HomePage'>
            <Row>
                <Col>
                    <h1>Logic Gate Generator</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={1}>
                    <Button color="primary">Try</Button>
                </Col>
                <Col xs={1}>
                    <Button color="primary">Examples</Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default HomePage;