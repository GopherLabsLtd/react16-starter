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

ReactDOM.render(
  <MuiThemeProvider>
    <div className="app">
      <Router basename={'/'}>
        <App />
      </Router>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);