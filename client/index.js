import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './_components/App';

import './css/app.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <div className="app">
        <App />
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);