import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav , Form, FormControl } from 'react-bootstrap'

class TopNavBar extends React.Component{
    render (){
        return (
            <div className="Home-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href='/'>Baa Aiee</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav className="mr-auto-1">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/registrationForm" >Registration Form</Nav.Link>
                                <Nav.Link href="/dailyQuestionForm">Question Submission</Nav.Link>
                            </Nav>
                        </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="primary">Search</Button>
                    </Form>
                </Navbar>
          </div>
        );
    }
}

export default TopNavBar