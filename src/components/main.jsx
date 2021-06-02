import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";

const Main = (props) => {
    return (
        <Router>
            <div className='Main '>
                <Container className="bg-faded">
                    <Row>
                        <Col>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/WorkPage" component={WorkPage}/>
                        </Col>
                    </Row>
                </Container>
                <footer className='fixed-bottom'>Logic Gate Generator.</footer>
            </div>
        </Router>
    );
};

export default Main;
