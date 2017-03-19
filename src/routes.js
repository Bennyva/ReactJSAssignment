var React = require('react');
var ReactRouter = require('react-router');  
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import Nav from './Header.js';
import Tasks from './Tasks.js';
import Home from './Home.js';
import Add from './Add.js';

import TaskList from './taskList.js';
import NewTask from './newTask.js';
import AddButton from './addButton.js';
import addButtonView from './addButtonView.js';
import addNewTaskPage from './AddNewTaskPage.js';
import aboutPage from './AboutPage.js';

import App from './App.js';

var routes = (
	<Router history = {hashHistory}>
		<Route path='/' component={App}>
	      
	      <Route path='/addTask' component={addNewTaskPage} />
	      <Route path='/about' component={aboutPage} />
      	</Route>
	</Router>
);

module.exports = routes;