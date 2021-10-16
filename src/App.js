import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Header } from './component/header/employeeheader';
import { Employeehome } from './component/employeehome/employeehome';
import { Employeeform } from './component/addemployeeform/employeeform';

class App extends React.Component {
  render()
  {
    return (
      <div>
        <Header/>
        <Router>
            <Route path="/" exact component={Employeehome}/>
            <Route path="/addemployee" exact component={Employeeform}/>
        </Router>
         </div>
    );  
  }
}

export default App;
