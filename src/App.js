import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Date from './date.js';
import Avatar from './avatar.js';
import AddButton from './addButton.js';
import NewTask from './newTask.js';
import TaskList from './taskList.js'
var ReactRouter = require('react-router');  
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
import addNewTaskPage from './AddNewTaskPage.js';
import aboutPage from './AboutPage.js';


import { Link} from 'react-router';




class App extends Component {
constructor(props) {
    super(props);
    this.state = { //This is where we define our initial state now. Interesting thing to note is that the state is an object. This is really neat because assuming we had more than just a list of tasks to initialize, we could simply add another property to the state object. Also back to why the super() method is important, it’s because before it’s called, this is uninitialized, so we can’t access state or anything else.
      title: "Ben",
      isEdit:0,
      tasks: [
          {
              'id': 1,
              'time': '2',
              'period': 'AM',
              'activity_title': 'Finish Tutorial Series',
              'activity_description': '#ReactForNewbies'
          }, {
              'id': 2,
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Team Leads',
              'activity_description': 'New Project Kickoff'
          }, {
              'id': 3,
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Return her call before she kills me'
          }, {
              'id': 4,
              'time': '3',
              'period': 'PM',
              'activity_title': 'Fix Wifey\'s website',
              'activity_description': 'FB Ads Integration not working'
          }, {
              'id': 5,
              'time': '6',
              'period': 'PM',
              'activity_title': 'Do DB Backups',
              'activity_description': 'Related to upcoming server migration'
          }
      ]
    }
  }

addTask(){
    alert(1);
   /* var tasks = this.state.tasks;
    var newId = (tasks[tasks.length - 1].id) + 1;
    var task = {
      'id': newId,
      'time': '5', 
      'period': 'AM', 
      'activity_title': 'Jogging', 
      'activity_description': 'Go for a run!'
    };
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});*/
    isEdit: 0;
    

  }

  handleOnToDoAdd(newTask){
    //alert(timeText + '\n' + periodText + '\n' + activityTitleText + '\n' +activityDescText);
    var tasks = this.state.tasks;
    var newId = (tasks[tasks.length - 1].id) + 1;
    var task = {
      id: newId,
      time: newTask.time, 
      period: newTask.period, 
      activity_title: newTask.activity_title, 
      activity_description: newTask.activity_description
    };

    this.setState({tasks: this.state.tasks.concat(task)});
    this.forceUpdate();
    console.log('handle on to do add');
  }
/*
  handleTimeChange: function(e) {
   this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },*/
  handleOn2Finished(task){
    alert(task.id + '\n' + 
          task.time + ' ' + task.period + '\n' + 
          task.activity_title + '\n' + 
          task.activity_description);
  }

  handleOn2Delete(task){
    var tasks = this.state.tasks;
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i] === task){
        tasks.splice(i, 1);
      }
    }
    this.setState({tasks: tasks});
  }

   handleOn2EditTask(task){
    //add edit function for current task being passed in
    //passes the tasks values to the form when they are clicked
    this.setState({
      isEdit: task.id,
      activity_title: task.activity_title,
      activity_description: task.activity_description,
      time: task.time,
      period: task.period
    });
    console.log('handle on 2 edit task');
  }

  //allows us to edit the text in the controlled Component
  handleEditActivity(name, value){
    var activityTitle, activityDesc, time, period;
    if(name === 'activity_title'){
      activityTitle = value;
      this.setState({
      activity_title: activityTitle
    });
    }else if(name === 'activity_description'){
      activityDesc = value;
       this.setState({
      activity_description: activityDesc
    });
    }else if(name === 'time'){
      time = value;
      this.setState({
     time:time
    });
    }else if(name ==='period'){
      period = value;
      this.setState({
     period: period
    });
    }else{
      console.log('error in handleEditActivity');
    }
    console.log('handle edit activity');

   /* this.setState({
      activity_title: activityTitle,
      activity_description: activityDesc,
      time: time,
      period: period
    });*/
  }

  handleClearForm(){

      this.setState({
      activity_title: "",
      activity_description: "",
      time:"-",
      period: "-"
      });
    }
  

  handleOnToDoUpdate(task){
   var tasks = this.state.tasks;
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id === task.id){
        tasks.splice(i, 1);
      }
    }
    tasks.push(task);
    var isEdits = this.state.isEdit;
    isEdits = 0;
    this.setState({isEdit: isEdits})
    this.setState({tasks: tasks});

    console.log('handle on to do update');
  }

  render() {
return (
      <div>
        
        <Header title={this.state.title}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default App;
