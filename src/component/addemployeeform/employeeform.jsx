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
            employeeStartDate : '',
            employeeNotes : '',
            profilePic : '',
        }
    }

    render()
    {
        return(
        <div>
                <div className="form-content">   
                <form className="form" action="#" onreset="resetForm()"
                onsubmit="save()">
                 <div className="form-head">Employee Payroll Form</div>
                <div class="row-content">
        {/* <----------------Employee Name--------------> */}
                    <label for="name" className="label text">Name</label>
                    {/* <input type="text" class="input" id="name" name="name"
                         placeholder="Your name.." required /> */}
                    <div className="">
                    <TextField className="width-text" placeholder="Enter name.." variant="outlined"></TextField>
                    </div>
                    <error-output className="text-error" for="name"></error-output>
                </div>
            {/* <----------------Employee Profile------------> */}
                <div class="row-content">
                    <label className="label text" for="profile">Profile image</label>

                        <RadioGroup className="radio-group"  row aria-label="profile" name="profile" > 
                            <FormControlLabel name="profile" value="../pictures/profilepic/Ellipse -3.png" control={<Radio/>} label = {
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
                <div class="row-content">
                    
                    <FormLabel className="label text" component="legend">Gender</FormLabel>

                    <RadioGroup className="radio-group"  row aria-label="gender" name="gender" > 

                         <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                        <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                    </RadioGroup>


                </div>
                {/* <---------------------Employee Department-------------------> */}
                <div class="row-content">
                    <FormLabel component="legend" class="label text">Departments</FormLabel>
                    <div>
                        {/* <input type="checkbox" class="checkbox" id="hr"/>
                        <label for="hr" class="text">HR</label> */}
                        <FormControlLabel control={<Checkbox/>} label="HR" value="HR"/>
                        <FormControlLabel control={<Checkbox/>} label ="Sales" value="Sales"/>
                        <FormControlLabel control={<Checkbox/>} label = "Engineer" value = "Engineet" />
                        <FormControlLabel control={<Checkbox/>} label = "Othter" value = "Other" />
                    </div>
                </div>
                {/* <------------------------Employee Salary----------------------> */}
                <div class="row-content">
                    <label for="salary" class="label text">Choose your salary:
                    </label>
                    <div class="salary-slider">
                    <Box sx={{ width:500 }}>
                    <Slider defaultValue={400000} valueLabelDisplay="auto" step={500} min={100000} max={1000000}/>
                    </Box>
                    
                    </div>
                </div>
                {/* <------------------------Employee Start Date---------------------> */}
                    <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                        <div class="date-picker">
                        <DatePickerComponent placeholder="Enter Date here:"></DatePickerComponent>
                        </div>
                    </div><br/>
                    {/* <-----------------------Employee Notes---------------------------> */}
                    <div class="row-content">
                    <label for="notes" class="label text">Notes</label>
                    {/* <div class="text-notes"> */}
                    
                    <TextField fullWidth="50px" height="100px" variant="outlined" placeholder="Enter Notes.." color="primary"></TextField>
                    {/* </div> */}
                    </div>
                    {/* <-------------------------Cancel Button----------------------------> */}
                    <div class="buttonParent">
                        <Button color="default" variant="contained">Cancel</Button>
                        {/* <-------------------------Submit Button----------------------------> */}
                    <div class="submit-button">
                    <Button color="primary" variant="contained">Submit</Button>
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
    

