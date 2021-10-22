import React from 'react'
import './employeeform.css';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {TextField} from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';

const httpService = require('../services/userService/User');
// function sliderValueCatcher(value) {
//     return `${value}`;
// }


toast.configure();
export class Employeeform extends React.Component 
{

    constructor(props)
    {
        super(props)
        this.state = {
            employeeName: '',
            employeeGender : '',
            employeeDepartment : '',
            employeeSalary : '',
            employeeStartDate : new Date(),
            employeeNotes : '',
            profilePic : '',
        }

        // this.changeProfilePicEventHandler = this.changeProfilePicEventHandler.bind(this);
        // this.changeNameEventHandler = this.changeNameEventHandler.bind(this);
        // this.changeDepartmentEventHandler = this.changeDepartmentEventHandler.bind(this);
        // this.changeGenderEventHandler = this.changeGenderEventHandler.bind(this);
        // this.changeNotesEventHandler = this.changeNotesEventHandler.bind(this);
        // this.changeSalaryEventHandler = this.changeSalaryEventHandler.bind(this);
        // this.changeStartDateEventHandler = this.changeStartDateEventHandler.bind(this);

    }


    changeNameEventHandler = (e) => {
        this.setState({
            employeeName : e.target.value
        })
    }

    changeProfilePicEventHandler = (e) => {
        this.setState({
            profilePic : e.target.value
        })
    }

    changeGenderEventHandler = (e) => {
        this.setState({
            employeeGender : e.target.value
        })
    }
    changeDepartmentEventHandler = (e) => {
        this.setState({
            employeeDepartment : e.target.value
        })
    }

    changeSalaryEventHandler = (e,newVal) => {
        this.setState({
            employeeSalary : newVal
        })
    }

    changeStartDateEventHandler = (e) => {
        this.setState(
            {
            employeeStartDate : e.target.value
        })
    }

    changeNotesEventHandler = (e) => {
        this.setState({
            employeeNotes : e.target.value
        })
    }

   sliderValueCatcher = (value) => {
       console.log(value);
        return `${value}`;
    }
    

    onSubmit = (event) => {
        event.preventDefault();

        let addEmployee = {
            employeeName : this.state.employeeName,
            profilePic : this.state.profilePic,
            employeeGender : this.state.employeeGender,
            employeeDepartment : this.state.employeeDepartment,
            employeeSalary : this.state.employeeSalary,
            employeeStartDate : this.state.employeeStartDate,
            employeeNotes : this.state.employeeNotes
        }

        return httpService.insertEmployee(addEmployee).then(data =>{
            let result = data;
            toast('New Employee added successflly:');
            if(result.status == 'success') {
                console.log('Data inserted successfully:',result);
               
            }
        }).catch( (errorMsg) => {
            alert('error while processing request:');
            console.log('error while processing request:',errorMsg);
        })
    }

    render()
    {
        return(
        <div>
                <div className="form-content">   
                <form className="form" action="#">
                 <div className="form-head">Employee Payroll Form</div>
                <div className="row-content">
        {/* <----------------Employee Name--------------> */}
                    <label for="name" className="label text">Name</label>
                    {/* <input type="text" class="input" id="name" name="name"
                         placeholder="Your name.." required /> */}
                    <div className="">
                    <TextField className="width-text" placeholder="Enter name.." variant="outlined"
                        value={this.state.employeeName} onChange={ this.changeNameEventHandler}></TextField>
                    </div>
                    <error-output className="text-error" for="name"></error-output>
                </div>
            {/* <----------------Employee Profile------------> */}
                <div className="row-content">
                    <label className="label text" for="profile">Profile image</label>

                        <RadioGroup className="radio-group"  row aria-label="profile" name="profile" 
                                value = {this.state.profilePic} onChange={ this.changeProfilePicEventHandler}> 
                            <FormControlLabel name="profile" value="../pictures/profilepic/Ellipse -3.png" 
                                      control={<Radio/>} label = {
                            <img className="profile" id="image1"
                                src="../pictures/profilepic/Ellipse -3.png" alt=""/> }
                            />
                            <FormControlLabel name="profile" control={<Radio/>} value="../pictures/profilepic/Ellipse -1.png" label = {
                            <img className="profile" id="image2" alt=""
                                src="../pictures/profilepic/Ellipse -1.png"/> }
                            />
                        
                            <FormControlLabel name="profile" control={<Radio/>} value="../pictures/profilepic/Ellipse -8.png" label = {
                            <img className="profile" id="image3" alt=""
                                src="../pictures/profilepic/Ellipse -8.png"/>}
                            />   
                        
                            <FormControlLabel name="profile" value="../pictures/profilepic/Ellipse -7.png" control={<Radio/>} label = {
                            <img class="profile" id="image4" alt=""
                                src="../pictures/profilepic/Ellipse -7.png"/>}
                            />    
                        
                        </RadioGroup>        
                     
                </div>
                {/* <-------------------Employee Gender--------------------> */}
                <div className="row-content">
                    
                    <FormLabel component="legend" className="label text" >Gender</FormLabel>

                    <RadioGroup className="radio-group"  row aria-label="gender" 
                       value={this.state.employeeGender} onChange={ this.changeGenderEventHandler} name="gender" > 

                         <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                        <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                    </RadioGroup>


                </div>
                {/* <---------------------Employee Department-------------------> */}
                <div className="row-content">
                    
                    <FormLabel component="legend" class="label text">Departments</FormLabel>
                    <div>
                        {/* <input type="checkbox" class="checkbox" id="hr"/>
                        <label for="hr" class="text">HR</label> */}
                        <FormControlLabel control={<Checkbox/>} label="HR" 
                        value="HR" onChange={ this.changeDepartmentEventHandler}/>
                        <FormControlLabel control={<Checkbox/>} label ="Sales" 
                        value="Sales" onChange={ this.changeDepartmentEventHandler}/>
                        <FormControlLabel control={<Checkbox/>} label = "Engineer" 
                        value = "Engineer" onChange={ this.changeDepartmentEventHandler}/>
                        <FormControlLabel control={<Checkbox/>} label = "Othter" 
                        value = "Other" onChange={ this.changeDepartmentEventHandler}/>
                    </div>
                </div>
                {/* <------------------------Employee Salary----------------------> */}
                <div className="row-content">
                    <FormLabel component="legend" className="label text">Choose your salary:</FormLabel>
                    <div class="salary-slider">
                    <Box sx={{ width:500 }}>
                    <Slider defaultValue={1000000} valueLabelDisplay="auto" step={1500} min={300000} max={3000000} 
                    getAriaValueText={this.sliderValueCatcher}
                    value={this.state.employeeSalary} onChange={ this.changeSalaryEventHandler}/>
                    </Box>
                    
                    </div>
                </div>
                {/* <------------------------Employee Start Date---------------------> */}
                    <div class="row-content">
                    <FormLabel component="legend" class="label text" >Start Date</FormLabel>
                        <div className="date-picker">
                        <DatePickerComponent placeholder="Enter Date here:" 
                        selected={this.state.employeeStartDate} onChange={ this.changeStartDateEventHandler}></DatePickerComponent>
                        </div>
                    </div><br/>
                    {/* <-----------------------Employee Notes---------------------------> */}
                    <div className="row-content">
                    <label for="notes" class="label text">Notes</label>
                    {/* <div class="text-notes"> */}
                    
                    <TextField fullWidth="50px" height="100px" variant="outlined" 
                    placeholder="Enter Notes.." color="primary" row={4}
                    value={this.state.employeeNotes} onChange={ this.changeNotesEventHandler}></TextField>
                    {/* </div> */}
                    </div>
                    {/* <-------------------------Cancel Button----------------------------> */}
                    <div className="buttonParent">
                        <Button component={Link} to="/" color="default" variant="contained">Cancel</Button> &nbsp;&nbsp;
                        {/* <-------------------------Submit Button----------------------------> */}
                    <div className="submit-button">
                    <Button component={Link} to="/"  color="primary" variant="contained" onClick={this.onSubmit}>Submit</Button>
                    </div>
                    {/* <button class="button submitButton" id="submitButton" 
                    type="submit">Submit
                     </button> */}
                            {/* <-------------------------Reset Button--------------------------> */}
                    <div>
                        {/* <button type="reset" class="resetButton button">Reset</button> */}
                        <Button color="secondary" variant="contained">Reset</Button>
                    </div>
                    </div>

                </form>
            </div>
        </div>


           
        )
    }                 
}
    

