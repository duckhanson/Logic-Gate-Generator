import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";

const Main = (props) => {
    return (
        <Router>
            <div className='Main'>
                <Container className="bg-faded">
                    <Row>
                        <Col>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/WorkPage" component={WorkPage}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
};

export default Main;
