import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const aboutUs = [
    { "id": 1, "header": "Mission", "body": "Our goal is to push the limits of Artifiical Intelligence and Profit." },
    { "id": 2, "header": "Team", "body": "Our team is a group of bad mama jamas that like to do AI stuff." },
    { "id": 3, "header": "Culture", "body": "We are all about personal growth and profit. Preferably at the same time." },
    { "id": 4, "header": "Careers", "body": "We are always looking for new bad mama jamas, so send us that resume." }
]

function AboutUs() {
    return (
        <Jumbotron className="about-us d-flex align-items-center min-vh-100" style={{ fontFamily: "Roboto" }}>
            <Container className="text-center">
                <h1 style={{ fontSize: "6.2em" }}>About Us</h1>
                <Accordion>
                    {
                        aboutUs.map((items) =>
                            <Card key={items.id}>
                                <Accordion.Toggle as={Card.Header} eventKey={items.id}>{items.header}</Accordion.Toggle>
                                <Accordion.Collapse eventKey={items.id}>
                                    <Card.Body>{items.body}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    }
                </Accordion>
            </Container>
        </Jumbotron>
    )
}

export default AboutUs;