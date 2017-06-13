import React, {PureComponent} from 'react';
import './container.css'

class Container extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <ul>
            <li>
              <a href='/Department'>Department</a>
            </li>
            <li>
              <a href='/Employees'>Employees</a>
            </li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}</div>
      </div>
    )
  }
}

export default Container
