import React from 'react'

import './employeehome.css';
// import {Header} from './component/header/employeeheader';
export class Employeehome extends React.Component
{
    render()
    {
        return(
            <div>
          <div class="main-content">
            <div class="header-content">
                <div class="emp-detail-text">
                    Employee Details <div class="emp-count">10</div>
                </div>
                <a href="employeeform.jsx" class="add-button">
                    <img src="../pictures/updateNdeleteLogo/add-24px.svg" alt="add button"/>Add User
                </a>
            </div>
        </div>

                <div>
                <table id="table-display" class="table">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                    <tr>
                        <td>
                            <img src="../pictures/profilepic/Ellipse -3.png" alt="profile"/>
                        </td>
                        <td>Tom Cruise</td>
                        <td>Male</td>
                        <td>
                            <div class="dept-label">HR</div>
                            <div class="dept-label">Finance</div>
                        </td>

                        <td>50000</td>
                        <td>10-10-2021</td>
                        <td>
                            <img src="../pictures/updateNdeleteLogo/delete-black-18dp.svg" alt="delete-img"/>
                            <img src="../pictures/updateNdeleteLogo/create-black-18dp.svg" alt="update-img"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        )
    }
}

