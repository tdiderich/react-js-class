import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <Jumbotron className="jumbo-about d-flex align-items-center min-vh-100" fluid>
                <Container className="text-center">
                    <h1 style={{ color: "white" }}>Workout Generator App</h1>
                    <Row>
                        <Col md={{offset: 4, span: 4}} lg={{offset: 4, span: 4}} xl={{offset: 4, span: 4}}>
                            <ListGroup>
                                <ListGroup.Item variant="primary">Love fitness!</ListGroup.Item>
                                <ListGroup.Item variant="primary">Love workouts!</ListGroup.Item>
                                <ListGroup.Item variant="primary">Love getting stronger!</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;