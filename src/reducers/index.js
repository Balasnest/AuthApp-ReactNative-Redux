import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import employeeFormReducer from './EmployeeFormReducer';
import employeesReducer from './EmployeeReducer';

export default combineReducers ({
  auth: AuthReducer,
  employeeForm: employeeFormReducer,
  employees: employeesReducer
});
