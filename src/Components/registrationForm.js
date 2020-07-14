import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

class RegistrationForm extends React.Component{
    render (){
        return (
            <div><h4> Registration Form </h4>
                <div className="registration-form">
                <br />          
                <Form >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}> Email  </Form.Label>
                        <Col sm={30}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}> Full Name  </Form.Label>
                        <Col sm={30}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}> LinkedIn Profile  </Form.Label>
                        <Col sm={30}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
          </div>
        );
    }
}

export default RegistrationForm