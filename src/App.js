import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './Components/about'
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from '../src/Components/registrationForm'
import TopNavBar from './Components/TopNavBar';
import DailyQuestionForm from './Components/dailyQuestionForm'

const App = () => (
  <div>
    <div className="Home">
             <TopNavBar />
          <div className = "flex-x1-nowrap row">
          <div className="col-xl-2 col-md-3 col-12 SideNav-SidePanel-module--cls2--1PH6H SideNav-SidePanel-module--cls1--34IFY d-flex flex-column">
               <div className = "left-frame">
                 Left Layout
               </div>
          </div>
          <br/>
          <div className='right-frame'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/registrationForm" component={RegistrationForm} />
              <Route exact path="/dailyQuestionForm" component={DailyQuestionForm} />
            </Switch> 
          </div>
        </div>
      </div>  

  </div>
);

export default App;
