import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';

class DailyQuestionForm extends React.Component {
 render(){
     return (
         <div><h4> Question Form </h4>
        <div className = "daily-question-form">
        <br />          
            <Form >
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}> Email  </Form.Label>
                    <Col sm={30}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4} > Topics </Form.Label>
                    <Col sm={30}>
                        <Form.Control as="select" >
                        <option val="0">Strings</option>
                        <option value="1">Recursion</option>
                        <option value="2">Graphs</option>
                        <option value="3">Arrays</option>
                        <option value="4">Matrices</option>
                        <option value="5">System Design</option>
                        <option value="6">Sliding Window</option>
                        <option value="7">Trees</option>
                        <option value="8">Sorting Algorithms</option>
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}> Question (Link or Description)  </Form.Label>
                    <Col sm={30}>
                        <Form.Control type="text" placeholder="Question" />
                    </Col>
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </div>
          </div>
     );
 }
}

export default DailyQuestionForm;