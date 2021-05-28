import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button,
} from "reactstrap";
import "./main.css";
import HomePage from "./homePage";
import WorkPage from "./workPage";

const Main = (props) => {
    return (
        <Router>
            <Container className="main bg-faded">
                <Row>
                    <Navbar color="faded" light expand="md">
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    HomePage
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/workpage">
                                    WorkPage
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <HomePage />
                            )}
                        />
                        <Route
                            exact
                            path="/workpage"
                            render={() => (
                                <WorkPage />
                            )}
                        />
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className="footer">Logic Gate Generator.</div>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Main;
