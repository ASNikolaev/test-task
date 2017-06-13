import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import {getEmployees, deleteEmployees, updateEmployees, newEmployees} from '../../actions'
import './Employees.css'

class Employees extends PureComponent {
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
    this.props.getEmployees()

  }

  delete(e) {

    this.props.deleteEmployees(e.target.name);
  }

  upDate(e) {
    let parent = e.target.parentElement;
    let id = e.target.name;
    let name = parent.children[1].value;
    this.props.updateEmployees(id, {name})
  }
  create(e) {
    let name = document.getElementById('name').value;

    this.props.newEmployees({name})

  }
  render() {
    return (
      <div>
        <form className="department_form" onSubmit={this.create}>
          <label htmlFor="name">name</label><br/>
          <input id="name" type="text" placeholder="name" label="name"/><br/>
          <button action="submit">Create</button><br/>
        </form>
        <ul>
          {this.props.employees.map((item, index) => {
            return <li className="employees" placeholder="name" key={index} className={`${item.name}_${item.id}`}>
              <label htmlFor="name">{item.name}</label>
              <input label="name" type="text" placeholder="name"/>
              <button name={item.id} onClick={this.delete}>delete</button>
              <button name={item.id} onClick={this.upDate}>update</button>
            </li>
          })}</ul>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    employees: state.getIn([
      'Employees', 'employees'
    ], Immutable.List()).toJS()
  }
}
const connected = connect(mapStateToProps, {getEmployees, deleteEmployees, updateEmployees, newEmployees})(Employees);

export default connected;;
