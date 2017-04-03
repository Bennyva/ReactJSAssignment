import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Date from './date.js';
import Avatar from './avatar.js';
import AddButton from './addButton.js';
import NewTask from './newExcercise.js';
import TaskList from './excerciseList.js'
var ReactRouter = require('react-router');  
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
import addNewTaskPage from './AddNewExcercisePage.js';
import aboutPage from './searchExcercises.js';


import { Link} from 'react-router';


class App extends Component {
constructor(props) {
    super(props);

      this.state = { //This is where we define our initial state now. Interesting thing to note is that the state is an object. This is really neat because assuming we had more than just a list of tasks to initialize, we could simply add another property to the state object. Also back to why the super() method is important, it’s because before it’s called, this is uninitialized, so we can’t access state or anything else.
      isEdit:0,
      tasks: [
          {
              'id': 1,
              'time': '2',
              'period': 'AM',
              'activity_title': 'Finish React App',
              'activity_description': 'Gotta get assignment done for WIT'
          }, {
              'id': 2,
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Final Year Project Supervisor',
              'activity_description': 'Meet about my app Idea'
          }, {
              'id': 3,
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Birthday is coming up on April 12th'
          }, {
              'id': 4,
              'time': '3',
              'period': 'PM',
              'activity_title': 'Email girlfriend about trip to Asia',
              'activity_description': 'Remember to book flights before July 17th!!!'
          }, {
              'id': 5,
              'time': '6',
              'period': 'PM',
              'activity_title': 'Finish DB paper for TJ',
              'activity_description': 'Add the pictures to pages 17 to 19!'
          }
      ]
    }

}

  render() {
return (
      <div>
        
        <Header/>
        
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default App;
