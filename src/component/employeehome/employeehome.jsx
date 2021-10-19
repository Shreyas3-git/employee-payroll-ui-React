import { extractEventHandlers } from '@mui/core';
import React from 'react'
import './employeehome.css';
const httpService = require('../services/userService/User'); 

export class Employeehome extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            employeeInfo : []
        }
    }

    toRefreshdeletedRecord = () => {
        return httpService.getListOfEmployee().then(data => {
            this.numberOfRecords = data.data.data.length;
            console.log(data.data.data);
            this.setState({employeeInfo: data.data.data})
        })
    }

    componentDidMount() {
        return httpService.getListOfEmployee().then(data => {
            this.numberOfRecords = data.data.data.length;
            console.log(data.data.data);
            this.setState({employeeInfo: data.data.data})
        })
    }

    removeEmployee = (id) => {
        return httpService.deleteEmployeeById(id).then(response => {
            this.toRefreshdeletedRecord();
        })
    }
    render()
    {
        return(
            <div>
          <div class="main-content">
            <div class="header-content">
                <div class="emp-detail-text">
                    Employee Details <div class="emp-count">{this.numberOfRecords}</div>
                </div>
                <a href="employeeform.jsx" class="add-button">
                    <img src="../pictures/updateNdeleteLogo/add-24px.svg" alt="add button"/>Add User
                </a>
            </div>
        </div>

                <div>
                <table id="table-display" class="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.employeeInfo.map(
                        (employee) =>
                    
                    <tr key={employee.id}>
                        <td>
                            <img className="profile" src={employee.profilePic} alt=""/>
                        </td>
                        <td>{employee.employeeName}</td>
                        <td>{employee.employeeGender}</td>
                        <div className = "dept-label">
                        <td>{employee.employeeDepartment}</td>
                        </div>
                        {/* <td>
                            {
                                employee.employeeDepartment
                                .map((dept) => 
                                    <div className="dept-label">
                                            {dept}
                                    </div>
                                )
                            }
                        </td> */}
                        <td>{employee.employeeSalary}</td>
                        <td>{employee.employeeStartDate}</td>
                        <td>
                            <img id={employee.id} onClick={() => this.removeEmployee(employee.id)} 
                            src="../pictures/updateNdeleteLogo/delete-black-18dp.svg" 
                            alt="" />

                            <img id={employee.id} src="../pictures/updateNdeleteLogo/create-black-18dp.svg" alt=""/>
                        </td>
                    </tr>

                    )
                }
                  </tbody>
                </table>  
            </div>
        </div>
        )
    }
}

