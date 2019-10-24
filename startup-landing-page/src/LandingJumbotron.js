import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function LandingJumbotron() {
    return (
        <Jumbotron className="jumbotron-landing d-flex align-items-center min-vh-100" style={{fontFamily: "Roboto"}}>
            <Container className="text-center">
            <h1 style={{fontSize: "6.2em"}}><i className="fa fa-pied-piper-pp" aria-hidden="true"></i> Instant AI</h1>
            <br/>
            <h4>We are an automated AI platform for humans.</h4>
            </Container>
        </Jumbotron>
    )
}

export default LandingJumbotron;