import React from 'react';

import './employeeheader.css';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import { Employeeform } from '../addemployeeform/employeeform';
 
export class Header extends React.Component
{
    render()
    {
        return(
            <div>
                  <header class="header-content header">
            <div class="logo-content">
                <img src="../pictures/logo/logo.png" alt="logo header"/>
                <div>
                    <span class="emp-text">EMPLOYEE</span><br/>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        </div>
        )
    }
}

 