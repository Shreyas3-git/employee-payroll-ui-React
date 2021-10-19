import React from 'react';

import './employeeheader.css';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Employeeform } from '../addemployeeform/employeeform';
// import { Employeeform } from '../addemployeeform/employeeform';
 
export function Header()
{

        return(
            <div>
                  <header class="header-content header">
            <div class="logo-content">
                <img src="../pictures/logo/logo.png" alt="logo header"
                    />
                <div>
                    <span class="emp-text">EMPLOYEE</span><br/>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        </div>
        )
    
}

 