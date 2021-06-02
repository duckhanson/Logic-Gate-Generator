import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Route } from "react-router";
import CodeTable from "./CodeTable";
import TruthTable from "./TruthTable";

import './WorkPage.css';

const WorkPage = (props) => {
    
    

    return (
        <div className='WorkPage'>
            <div className='Header'>
                <Button variant="outline-dark" className='icon' as={Link} to="/"><FontAwesomeIcon icon={faDove} /></Button>
                <Button variant="outline-dark" as={Link} to="/WorkPage">Code Table</Button>
                <Button variant="outline-dark" as={Link} to="/WorkPage/TruthTable">Truth Table</Button>
                <hr />
            </div>
            <div className='CodeArea'>
                <Route exact path="/WorkPage" component={CodeTable} />
                <Route path="/WorkPage/TruthTable" component={TruthTable} />
            </div>
            <div className='ResultTable'>
                <h1>I'm ResultTable</h1> 
            </div>
        </div>
    );
}
 
export default WorkPage;