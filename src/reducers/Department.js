import Immutable from 'immutable';
import {UPDATE_DEPARTMENTS, NEW_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS} from '../constants'

const initialSate = Immutable.Map();

function Department(state = initialSate, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return state.merge({department: action.Departments})
    case NEW_DEPARTMENTS:
      return state.merge({
        department: state.getIn(["department"]).push(action.Department)
      })
    case UPDATE_DEPARTMENTS:
      return state.merge({
        department: state.getIn(["department"]).map(item => {
          if (item.toJS().id === Number(action.id)) {
            return item.merge(action.department)
          }
          return item
        })
      })
    case DELETE_DEPARTMENTS:
      return state.merge({
        department: state.getIn(["department"]).filter(item => {
          return item.toJS().id !== Number(action.id)
        })
      })
    default:
      return state
  }
}

export default Department
