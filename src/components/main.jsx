import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./main.css";
import HomePage from "./homePage";
import WorkPage from "./workPage";

const Main = (props) => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Team14</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/WorkPage">WorkPage</Nav.Link>
                </Nav>
            </Navbar>
            <Container className="main bg-faded">
                <Row xs="auto">
                    <Col>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/WorkPage" component={WorkPage}/>
                    </Col>
                </Row>
                <Row xs="1">
                    <Col>
                        <div className="footer">Logic Gate Generator.</div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Main;
