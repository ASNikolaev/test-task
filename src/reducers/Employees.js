import Immutable from 'immutable';
import {UPDATE_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES, GET_EMPLOYEES} from '../constants'

const initialSate = Immutable.Map();

function Employees(state = initialSate, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return state.merge({employees: action.Employees})
    case NEW_EMPLOYEES:
      return state.merge({
        department: state.getIn(["employees"]).push(action.Employee)
      })
    case UPDATE_EMPLOYEES:
      return state.merge({
        employees: state.getIn(["employees"]).map(item => {
          if (item.toJS().id === Number(action.id)) {
            return item.merge(action.employee)
          }
          return item
        })
      })
    case DELETE_EMPLOYEES:
      return state.merge({
        employees: state.getIn(["employees"]).filter(item => {
          return item.toJS().id !== Number(action.id)
        })
      })
    default:
      return state
  }
}

export default Employees
