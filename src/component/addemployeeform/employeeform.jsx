import React from 'react'
import './employeeform.css';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {TextField} from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Button } from '@material-ui/core';
export function Employeeform() 
{
     

        return(
        <div>
                <div class="form-content">   
                <form class="form" action="#" onreset="resetForm()"
                onsubmit="save()">
                 <div class="form-head">Employee Payroll Form</div>
                <div class="row-content">
                    <label for="name" class="label text">Name</label>
                    <input type="text" class="input" id="name" name="name"
                        placeholder="Your name.." required />
                    <error-output class="text-error" for="name"></error-output>
                </div>
                <div class="row-content">
                    <label class="label text" for="profile">Profile image</label>
                        <div class="profile-radio-content">
                        <label>
                            <input type="radio" id="profile1"
                                value="../assets/profile-images/Ellipse -3.png"
                                name="profile"/>
                            <img class="profile" id="image1"
                                src="../assets/profile-images/Ellipse -3.png"/>
                        </label>
                        <label>
                            <input type="radio" id="profile2"
                                value="../assets/profile-images/Ellipse -1.png"
                                name="profile"/>
                            <img class="profile" id="image2"
                                src="../assets/profile-images/Ellipse -1.png"/>
                        </label>
                        <label>
                            <input type="radio" id="profil3"
                                value="../assets/profile-images/Ellipse -8.png"
                                name="profile"/>
                            <img class="profile" id="image3"
                                src="../assets/profile-images/Ellipse -8.png"/>
                        </label>
                        <label>
                            <input type="radio" id="profile4"
                                value="../assets/profile-images/Ellipse -7.png"
                                name="profile"/>
                            <img class="profile" id="image4"
                                src="../assets/profile-images/Ellipse -7.png"/>
                        </label>

                        </div>
                </div>
                <div class="row-content">
                    <label for="gender" class="label text">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender"
                            value="male"/>
                        <label for="male" class="text">Male</label>
                        <input type="radio" id="female" name="gender"
                            value="female"/>
                        <label for="female" class="name">Female</label>
                    </div>
                </div>
                <div class="row-content">
                    <label for="department" class="label text">Department</label>
                    <div>
                        <input type="checkbox" class="checkbox" id="hr"
                            name="department" value="HR"/>
                        <label for="hr" class="text">HR</label>
                        <input type="checkbox" class="checkbox" id="sales"
                            name="department" value="Sales"/>
                        <label for="sales" class="text">Sales</label>
                        <input type="checkbox" class="checkbox" id="finance"
                            name="department" value="Finance"/>
                        <label for="finance" class="text">Finance</label>
                        <input type="checkbox" class="checkbox" id="engineer"
                            name="department" value="Engineer"/>
                        <label for="engineer" class="text">Engineer</label>
                        <input type="checkbox" class="checkbox" id="others"
                            name="department" value="Others"/>
                        <label for="others" class="text">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label for="salary" class="label text">Choose your salary:
                    </label>
                    <div style={{width:500,margin:10}}>
                    <Slider  min={40000} max={500000} />
                    
                    
                    </div>
                </div>
                    <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                        <div class="date-picker">
                        <DatePickerComponent placeholder="Enter Date here:"></DatePickerComponent>
                        </div>
                    </div><br/>
                    <div class="row-content">
                    <label for="notes" class="label text">Notes</label>
                    <textarea id="notes" class="text-notes" name="Notes" placeholder="Enter Notes.."></textarea>
                    </div>
                    <div class="buttonParent">
                        <Button color="default" variant="contained">Cancel</Button>
                    <div class="submit-button">
                    <Button color="primary" variant="contained">Submit</Button>
                    </div>
                    {/* <button class="button submitButton" id="submitButton" 
                    type="submit">Submit
                     </button> */}
                        {/* <button type="reset" class="resetButton button">Reset</button> */}
                        <Button color="secondary" variant="contained">Reset</Button>
                    
                    </div>

                </form>
            </div>
        </div>


           
        )
        
    }
    

