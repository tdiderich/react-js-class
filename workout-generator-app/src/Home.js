import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>
            <Jumbotron className="jumbo-home d-flex align-items-center min-vh-100" fluid>
                <Container className="text-center">
                    <h1 style={{ color: "white" }}>Workout Generator App</h1>
                    <ButtonGroup>
                        <Button variant="secondary" href="/about">About</Button>
                        <Button variant="secondary" href="/generator">Generator</Button>
                    </ButtonGroup>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;