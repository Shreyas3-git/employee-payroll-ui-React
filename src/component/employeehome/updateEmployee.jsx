
import React from 'react';
import { useState , useEffect} from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Slider } from '@material-ui/core';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import './employeehome.css';
import { Employeehome } from './employeehome';


const httpService = require('../services/userService/User');
function UpdateEmployee({handleOpen,handleClose,data}) {
    const [employeeName , employeeGender,employeeDepartment, employeeSalary,employeeStartDate,employeeNotes,profilePic] = data; 


    const salaryValue = (value) => {
        return `${value}`;
    }


    const[ name,setName ] = React.useState(employeeName);
    const[ gender,setGender] = React.useState(employeeGender);
    const[ department,setDepartment ] = useState(employeeDepartment);
    const[ salary,setSalary] = useState(employeeSalary);
    const[ joiningdate,setJoiningDate ] = useState(employeeStartDate);
    const[ profile,setProfile] = useState(profilePic);
    const[ notes,setNotes ] = useState(employeeNotes); 


    const onCloseDialog = () => {
        handleClose();
    }

    const onSave = (event) => {
        event.preventDefault();


    }

    useEffect( () => {
        setName(employeeName);
    },[employeeName])

    useEffect( () => {
        setGender(employeeGender);
    },[employeeGender])

    useEffect( () => {
        setProfile(profilePic);
    },[profilePic])

    useEffect( () => {
        setDepartment(employeeDepartment);
    },[employeeDepartment])

    useEffect( () => {
        setSalary(employeeSalary);
    },[employeeSalary])

    useEffect( () => {
        setJoiningDate(employeeStartDate);
    },[employeeStartDate])

    useEffect( () => {
        setNotes(employeeNotes);
    },[employeeNotes])


    let updateNameHandler = (newVal) => {
        setName(newVal);
    }    

    let updateProfileHandler = (e) => {
        setProfile(e.target.value);
    }

    let updateGenderHandler = (e) => {
        setGender(e.target.value);
    }

    let updateDepartmentHandler = (e) => {
        setDepartment(e.target.value);
    }

    let updateDateHandler = (e) => {
        setDepartment(e.target.value);
    }

    let updateSalaryHandler = (e) => {
        setSalary(e.target.value);
    }

    let updateNotesHandler = (e) => {
        setNotes(e.target.value);
    }

    return (
        <>
          <Dialog fullWidth maxWidth="md" open={handleOpen} onClose={onCloseDialog}>
              <DialogTitle>Update Employee Details:</DialogTitle>
              <DialogContent>
              <div className="row content">
                    <TextField autoFocus margin="dense" label="Name" type="text" fullWidth name="name" variant="outlined" 
                    value={employeeName} onChange={ updateNameHandler}/>
              </div>  
               {/* ****************Employee ProfilePic****************** */}

                    <RadioGroup className="radio-group"  row aria-label="profile" name="profile" 
                     value = {profilePic} onChange={updateProfileHandler}> 
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

                        {/* ****************Employee Gender****************  */}

                    <div className="row-content">
                    <FormLabel className="label text" component="legend">Gender</FormLabel>

                    <RadioGroup className="radio-group"  
                       value={employeeGender} onChange={updateGenderHandler} name="gender" > 

                         <FormControlLabel value="Male" control={<Radio/>} label="Male" />
                        <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                    </RadioGroup>
       
                   </div>

                   {/* **********************Employee Department********************* */}

                   <div class="row-content">
                    <FormLabel component="legend" class="label text">Departments</FormLabel>
                    <div>
                        <FormControlLabel control={<Checkbox/>} label="HR" 
                        value={employeeDepartment} onChange={ updateDepartmentHandler}/>
                        <FormControlLabel control={<Checkbox/>} label ="Sales" 
                        value={employeeDepartment} onChange={ updateDepartmentHandler }/>
                        <FormControlLabel control={<Checkbox/>} label = "Engineer" 
                        value = {employeeDepartment} onChange={ updateDepartmentHandler }/>
                        <FormControlLabel control={<Checkbox/>} label = "Othter" 
                        value = {employeeDepartment} onChange={ updateDepartmentHandler }/>
                    </div>
                </div>

                {/* ******************Employee Salary******************   */}

                <div className="row-content">
                    <TextField className="label text">Choose your salary:</TextField>
                    <div class="salary-slider">
                    <Box sx={{ width:500 }}>
                    <Slider defaultValue={1000000} valueLabelDisplay="auto" step={1500} min={300000} max={3000000} 
                    getAriaValueText={salaryValue}
                    value={employeeSalary} onChange={ updateSalaryHandler}/>
                    </Box>
                    
                    </div>
                </div>


                {/* **********************Employee StartDate*******************  */}

                <div className="row-content">
                    <FormLabel component="legend" className="label text" >Start Date</FormLabel>
                        <div className="date-picker">
                        <DatePickerComponent placeholder="Enter Date here:" value={employeeStartDate}
                        selected={new Date} onChange={ updateDateHandler }></DatePickerComponent>
                        </div>
                </div>


                {/* **********************Employee Notes*********************** */}

                <div className="row-content">
                    <FormLabel component="legend" className="">
                    </FormLabel>
                    <TextField fullWidth="50px" height="100px" variant="outlined" 
                    placeholder="Enter Notes.." color="primary" 
                    value={employeeNotes} onChange={ updateNotesHandler}></TextField>
                    {/* </div> */}
                </div>
               </DialogContent>

               <DialogActions>
                        <Button color="success" variant="outlined" onClick={this.onSave}>Update</Button> 
                        <Button color="primary" variant="outlined" onClick={handleClose}>Cancel</Button>        
                </DialogActions> 
          </Dialog>  
        </>
    )
}

export default UpdateEmployee;