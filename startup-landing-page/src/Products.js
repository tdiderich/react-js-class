import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const products = [
    { "id": 1, "header": "Time Travel", "body": "Our cutting edge AI technology allows you to travel through time with instant historical analysis." },
    { "id": 2, "header": "Gambling", "body": "Our cutting edge AI technology allows you to travel through time with instant historical analysis." },
    { "id": 3, "header": "Health", "body": "Our diet simulators can determine the best diet for your lifestyle based on what you eat every day." },
    { "id": 4, "header": "Fitness", "body": "Our automated workout generator will find the best routine for you based on your goals." }
]

function Products() {
    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100" style={{ fontFamily: "Roboto" }}>
            <Container className="text-center">
                <h1 style={{ fontSize: "6.2em" }}>Products</h1>
                <br />

                {
                    products.map((items) =>
                        <Row key={items.id}>
                            <Col xs={{ offset: 0 }} sm={{ offset: 0 }} md={{ offset: 0 }} lg={{ offset: 0 }} xl={{ offset: 0 }}>
                                <Card>
                                    <Card.Header>{items.header}</Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{items.body}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )
                }
            </Container>
        </Jumbotron>
    )
}

export default Products;

