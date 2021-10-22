const httpService = require('../axios-service/Axios')


exports.getListOfEmployee = () => {
    let _url = '/retrive';
    return httpService.getService(_url);
}

exports.insertEmployee = (employeeObj) => {
    let _url = '/insert';
    let httpHeader = {
        Headers : {
          'Content-Type' : 'application/json'  
        }
    }
//    toast('New employee added successfully (:');
    return httpService.insertService(_url,employeeObj,httpHeader);
}

exports.deleteEmployeeById = (id) => {
    let _url = `/delete/${id}`;

  //  toast('Record deleted successfully (:');
    
    return httpService.deleteService(_url);
}

exports.updateEmployeeById = (id,employee) => {
    let _url = `/update/${id}`;

   let httpHeader = {
        Headers :{
            'Content-Type' : 'application/json'
        } 
    }
    return httpService.updateService(_url,employee,httpHeader);
}