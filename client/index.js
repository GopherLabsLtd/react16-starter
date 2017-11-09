import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  IndexRoute
} from 'react-router-dom'

import App from './_components/App';

import './css/app.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

// Import your firebase configurations
import FIREBASE_CONFIGS from './_utils/firebaseConfigs';

const firebaseConfig = FIREBASE_CONFIGS;

const reduxFirebaseConfig = { userProfile: 'users' }

// Add reactReduxFirebase store enhancer
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div className="app">
        <Router basename={'/'}>
          <App />
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);