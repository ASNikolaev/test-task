import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import Immutable from 'immutable';
import {getDepartments, deleteDepartments, updateDepartments, newDepartments} from '../../actions'

import './Departments.css'

class Departments extends PureComponent {

  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this),
    this.upDate = this.upDate.bind(this),
    this.create = this.create.bind(this)
  }

  componentDidMount() {
    this.get()
  }

  get() {
    this.props.getDepartments()

  }

  delete(e) {
    this.props.deleteDepartments(e.target.name);
  }

  create(e) {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    this.props.newDepartments({firstName, lastName})

  }

  upDate(e) {
    let parent = e.target.parentElement;
    let id = e.target.name;
    let firstName = parent.children[1].value;
    let lastName = parent.children[3].value;
    this.props.updateDepartments(id, {firstName, lastName})
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form className="department_form" onSubmit={this.create}>
          <label htmlFor="firstName">firstName</label><br/>
          <input id="firstName" type="text" placeholder="firstName" label="firstName"/><br/>
          <label htmlFor="lastName">lastName</label><br/>
          <input id="lastName" placeholder="lastName" label="lastName" type="text"/><br/>
          <button action="submit">Create</button><br/>
        </form>
        <ul className="department_content">
          {this.props.Department.map((item, index) => {
            return <li className="employees" key={index} className={`${item.firstName}_${item.lastName}_${item.id}`}>
              <label htmlFor="firstName">{item.firstName}</label>
              <input type="text" placeholder="firstName" label="firstName"/>
              <label htmlFor="lastName">{item.lastName}</label>
              <input placeholder="lastName" label="lastName" type="text"/>
              <span>departmentId:{item.id}</span>
              <button onClick={this.delete} name={item.id}>delete</button>
              <button name={item.id} onClick={this.upDate}>update
              </button >
            </li >
          })}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    Department: state.getIn([
      'Department', 'department'
    ], Immutable.List()).toJS()
  }
}
const connected = connect(mapStateToProps, {getDepartments, deleteDepartments, updateDepartments, newDepartments})(Departments)
export default connected
