import {
  updateEmployeesSuccess,
  updateDepartmentsSuccess,
  newDepartmentsSuccess,
  newEmployeesSuccess,
  deleteEmployeesSuccess,
  deleteDepartmentsSuccess,
  getDepartmentsSuccess,
  getEmployeesSuccess
} from './success'

export const updateEmployees = (id, Employee) => dispatch => {
  return fetch(`http://localhost:3000/Employees/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Employee)
  }).then(response => response.json()).then(json => dispatch(updateEmployeesSuccess(Employee, id)))
}

export const updateDepartments = (id, Department) => dispatch => {
  return fetch(`http://localhost:3000/Departments/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Department)
  }).then(response => response.json()).then(json => dispatch(updateDepartmentsSuccess(Department, id)))
}

export const newDepartments = (Department) => dispatch => {
  return fetch(`http://localhost:3000/Departments`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Department)
  }).then(response => response.json()).then(json => dispatch(newDepartmentsSuccess(json)))
}

export const newEmployees = (Employee) => dispatch => {
  return fetch(`http://localhost:3000/Employees`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Employee)
  }).then(response => response.json()).then(json => dispatch(newEmployeesSuccess(json)))
}

export const deleteEmployees = (id) => dispatch => {
  return fetch(`http://localhost:3000/Employees/${id}`, {method: 'DELETE'}).then(response => response.json()).then(json => dispatch(deleteEmployeesSuccess(id)))
}

export const deleteDepartments = (id) => dispatch => {
  return fetch(`http://localhost:3000/Departments/${id}`, {method: 'DELETE'}).then(response => response.json()).then(json => dispatch(deleteDepartmentsSuccess(id)))
}

export const getDepartments = (Departments) => dispatch => {
  return fetch(`http://localhost:3000/Departments`).then(response => response.json()).then(json => dispatch(getDepartmentsSuccess(json)))
}

export const getEmployees = (Employees) => dispatch => {
  return fetch(`http://localhost:3000/Employees`).then(response => response.json()).then(json => dispatch(getEmployeesSuccess(json)))
}
