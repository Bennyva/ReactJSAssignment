var React = require('react');
var ReactRouter = require('react-router');  
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import Nav from './Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import addNewTaskPage from './AddNewExcercisePage.js';
import excerciseDetail from './excerciseDetail.js';
import excerciseList from './searchExcercises.js';

import App from './App.js';

var routes = (
	<Router history = {hashHistory}>
		<Route path='/' component={App}>
		  <IndexRoute component={Home}/>
	      <Route path='/addExcercise' component={addNewTaskPage} />
          <Route path="/excercises" component={excerciseList}/>
          <Route path="/excercises/:id" component={excerciseDetail} />
		  <Route path="/about" component={About} />
      	</Route>
	</Router>
);

module.exports = routes;