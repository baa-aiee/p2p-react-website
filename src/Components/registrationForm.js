import React from 'react'
import { Form } from 'react-bootstrap'

class RegistrationForm extends React.Component{
    render (){
        return (
            <div className="registration-form">
            <p>
                Registration Form
            </p>          
            <Form>
                Email : <br/>
                Full Name : <br/>
                LinkedIn Profile : <br/>

            </Form>
          </div>
        );
    }
}

export default RegistrationForm