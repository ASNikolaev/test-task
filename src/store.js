import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import IndexReducer from './reducers'

const configureStore = () => {
  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store = createStore(IndexReducer, composeSetup(applyMiddleware(thunk)));

  return store;
}

export default configureStore
