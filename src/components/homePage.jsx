import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

import './homePage.css';

const HomePage = (props) => {
    
    

    return (
        <Container className='HomePage'>
            <Row xs={1} className='Header'>
                <Col xs='auto'>
                    <h1>Logic Gate Generator</h1>
                </Col>
            </Row>
            <hr />
            <Row xs={1} className='justify-content-center'>
                <Col xs='auto'>
                    <Button as={Link} to="/WorkPage" color="primary">Let's Try</Button>
                </Col>
            </Row>
        </Container>
    );
}
 
export default HomePage;