import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import './HomePage.css';

const HomePage = (props) => {
    
    

    return (
        <div className='HomePage'>
            <div className='Header'>
                <h1> <FontAwesomeIcon icon={faDove} /> Logic Gate Generator</h1>
                <hr />

            </div>
            <div className='Button'>
                <Button as={Link} to="/WorkPage" variant="outline-dark">Let's Try</Button>
            </div>
        </div>
    );
}
 
export default HomePage;