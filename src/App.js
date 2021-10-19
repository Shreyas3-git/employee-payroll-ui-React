import './App.css';
import React from 'react';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Header } from './component/header/employeeheader';
import { Employeehome } from './component/employeehome/employeehome';
import { Employeeform } from './component/addemployeeform/employeeform';

class App extends React.Component {

  render()
  {
    return (
      <div>
        <Header/>
        {/* <Router>
            <Route path="/" exact component={Employeehome}/>
            <Route path="/addemployee" exact component={Employeeform}/>
        </Router> */}

        <BrowserRouter>
                <Switch>
                      <Route path="/"  exact component={Employeehome}></Route>
                      <Route path="/addemployee" exact component={Employeeform}></Route>
                </Switch>
        </BrowserRouter>
                      
         </div>
    );  
  }
}

export default App;
