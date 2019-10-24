import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'

const schema = Yup.object({
    email: Yup.string().email("Please enter valid email.")
})

class Subscribe extends React.Component {

    constructor() {
        super()
        this.state = {
            subscribed: false
        }
    }

    handleSubmit() {
        this.setState({
            subscribed: true
        })
    }

    render() {
        return (
            <Jumbotron className="about-us d-flex align-items-center min-vh-100" style={{ fontFamily: "Roboto" }}>
                <Container className="text-center">
                    <br />
                    {
                        this.state.subscribed ?
                            <Alert variant="success">Thanks for subscribing!</Alert> :
                            <Container className="text-center">
                            <h1 style={{ fontSize: "4em" }}>Subscribe!</h1>
                                <Row>
                                    <Col md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                                        <Formik
                                            validationSchema={schema}
                                            onSubmit={
                                                this.handleSubmit.bind(this)
                                            }
                                            initialValues={{
                                                email: ' '
                                            }}>
                                            {
                                                ({
                                                    handleSubmit,
                                                    handleChange,
                                                    values,
                                                    errors,
                                                }) => (
                                                        <Form noValidate onSubmit={handleSubmit}>
                                                            <Form.Group controlId="validationFormikEmail">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control
                                                                    type="email"
                                                                    placeholder="Email"
                                                                    name="email"
                                                                    value={values.email}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.email}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.email}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Button type="submit">Subscribe</Button>
                                                        </Form>
                                                    )
                                            }
                                        </Formik>
                                    </Col>
                                </Row>
                            </Container>
                    }
                </Container>
            </Jumbotron>
        )
    }
}

export default Subscribe;