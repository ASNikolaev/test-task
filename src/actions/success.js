import {
  UPDATE_EMPLOYEES,
  NEW_EMPLOYEES,
  DELETE_EMPLOYEES,
  GET_EMPLOYEES,
  NEW_DEPARTMENTS,
  DELETE_DEPARTMENTS,
  GET_DEPARTMENTS,
  UPDATE_DEPARTMENTS
} from '../constants'

export const updateEmployeesSuccess = (employee, id) => {
  return {type: UPDATE_EMPLOYEES, employee, id}
}

export const updateDepartmentsSuccess = (department, id) => {
  return {type: UPDATE_DEPARTMENTS, department, id}
}

export const newDepartmentsSuccess = (Department) => {
  return {type: NEW_DEPARTMENTS, Department}
}

export const newEmployeesSuccess = (Employee) => {
  return {type: NEW_EMPLOYEES, Employee}
}

export const deleteEmployeesSuccess = (id) => {
  alert('+')
  return {type: DELETE_EMPLOYEES, id}
}

export const deleteDepartmentsSuccess = (id) => {
  return {type: DELETE_DEPARTMENTS, id}
}

export const getDepartmentsSuccess = (Departments) => {
  return {type: GET_DEPARTMENTS, Departments}
}

export const getEmployeesSuccess = (Employees) => {
  return {type: GET_EMPLOYEES, Employees}
}
