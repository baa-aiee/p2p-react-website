import React from 'react'
import { Form } from 'react-bootstrap';

class DailyQuestionForm extends React.Component {
 render(){
     return (
         <div className = "daily-question-form">
         <p> Question Form</p>
         <Form>
            Email : <br/ >
            Problem Category: <br/>
            Problem Statement or Web Link: <br/>
         </Form>
        </div>
     );
 }
}

export default DailyQuestionForm;