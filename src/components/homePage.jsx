import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

import './HomePage.css';

const HomePage = (props) => {
    
    

    return (
        <Container className='HomePage'>
            <Row className='justify-content-md-center'>
                <Col className='col-auto'>
                    <h1>Logic Gate Generator</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col className='col-auto'>
                    <Button as={Link} to="/WorkPage" variant="outline-dark">Let's Try</Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default HomePage;