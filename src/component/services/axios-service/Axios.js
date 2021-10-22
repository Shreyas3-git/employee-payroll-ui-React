const axios = require('axios').default;
// import axios from 'axios';
const baseUrl = 'http://localhost:8088/employee-payroll-service';
exports.getService = (url) => {
   
  return axios.get(baseUrl + url );
}

exports.insertService = (url,employee) => {

    return axios.post(baseUrl + url, employee);
}

exports.deleteService = (url,httpParam) => {
  return axios.delete(baseUrl + url , httpParam);
}

exports.updateService = (url,employeeObj,httpParam) => {
  return axios.put(baseUrl + url,employeeObj , httpParam);
}