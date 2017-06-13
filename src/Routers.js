import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store';

import './Routers.css'

import Employees from './component/Employees'
import Department from './component/Department'

import Container from './containers'

const store = configureStore();

const Routers = () => {
  return (

    <Provider store={store}>
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Container}>
            <IndexRoute/>
            <Route path='Department' component={Department}/>
            <Route path='Employees' component={Employees}/>
          </Route>
        </Router>

      </div>
    </Provider>

  )
}

export default Routers;
