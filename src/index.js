//stores our main Render call from ReactDOM, imports app.js component
import React from 'react';
import ReactDOM from 'react-dom';
var routes = require('./routes.js');
var appA = require('./App.js');
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
    
import '../node_modules/bootstrap/dist/css/bootstrap.css';   

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';


ReactDOM.render(
  routes,
  document.getElementById('root')
);
