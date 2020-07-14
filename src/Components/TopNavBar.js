import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav , Form, FormControl } from 'react-bootstrap'

class TopNavBar extends React.Component{
    render (){
        return (
            <div className="Home-header">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href='/home'>Baa Aiee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-bar">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/registrationForm" >Registration Form</Nav.Link>
                            <Nav.Link href="/dailyQuestionForm">Question Submission</Nav.Link>
                         </Nav>
                    <Form inline className="nav-bar">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="primary">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
          </div>
        );
    }
}

export default TopNavBar