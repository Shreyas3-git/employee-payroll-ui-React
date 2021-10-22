// import { extractEventHandlers } from '@mui/core';
import React from 'react'
import './employeehome.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'react-notify-toast';
import { Button } from '@material-ui/core';
import { Employeeform } from '../addemployeeform/employeeform';
import { Link } from 'react-router-dom';
import UpdateEmployee from './updateEmployee';

const dialogBoxPopup = require('./updateEmployee')
const httpService = require('../services/userService/User'); 

toast.configure();

export class Employeehome extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            employeeInfo : [],
            open : false,
            employeeObject : []
        }
    }




    openDialogBox = (employee) => {
        this.setState = {
            open : true,
            employeeObject : employee 
        }
    }


    closeDialogBox = () => {
            this.state = {
                open : false
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
            toast('Record deleted successfully (:');

            this.toRefreshdeletedRecord();
        })
    }

    
    render()
    {
        return(
            <div>
          <div className="main-content">
            <div className="header-content">
                <div className="emp-detail-text">
                    Employee Details <div class="emp-count">{this.numberOfRecords}</div>
                </div >
                    <div className="add-user"> 
                    <Button component={Link} to="/addEmployee" height="70px" weight="100px" color="primary"  variant="contained" >Add User</Button>
                    {/* <Router>                 
                    <Route to="/addEmployee" exact component={Employeeform} render={(
                        this.state.redirectToformPage ? ( <Employeeform addEmployee='match.params.addEmployee'/> ) : ( <Redirect to="/" /> )
                    )}>  
                     </Route>
                    </Router>   */}
                    </div>
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
                           onChange={this.notifyOnRemove} src="../pictures/updateNdeleteLogo/delete-black-18dp.svg" 
                            alt="" />

                            <img id={employee.id} src="../pictures/updateNdeleteLogo/create-black-18dp.svg" alt="" 
                            onClick={() => this.openDialogBox(employee)}/>
                        </td>
                    </tr>

                    )
                }
                  </tbody>
                </table>  
            </div>
                <updateEmployee handleOpen={this.state.open} data={this.employee} handleClose={this.closeDialogBox}>
    
                </updateEmployee>
        </div>
        )
    }
}

