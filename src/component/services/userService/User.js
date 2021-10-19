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
   return httpService.insertService(_url,employeeObj,httpHeader);
}

exports.deleteEmployeeById = (id) => {
    let _url = `/delete/${id}`;
    return httpService.deleteService(_url);
}