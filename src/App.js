//sample react component
import React, { Component } from 'react';
import './App.css';
import TaskList from './taskList.js'
import Date from './date.js';
import Avatar from './avatar.js';
import AddButton from './addButton.js';
import NewTask from './newTask.js';

class App extends Component {
//// we have to bind the handleClick() function here to make it context-aware and all we are doing here is calling the onClick() function which got passed as a prop and that in turn will call the initial addTask() function.
 // going to make our component context-aware

  constructor(){//This works the same way constructors work in any object oriented programming. Remember that every react component is a class primarily so this is how we override the constructor method to have it do some stuff whenever the class is instantiated.
    super();//If you come from a Java background, this would be familiar to you, it works the same way. The super() method is required to be called inside the constructor method before you can do anything else. It is used to invoke the constructor of the component it is inheriting from
    this.state = { //This is where we define our initial state now. Interesting thing to note is that the state is an object. This is really neat because assuming we had more than just a list of tasks to initialize, we could simply add another property to the state object. Also back to why the super() method is important, it’s because before it’s called, this is uninitialized, so we can’t access state or anything else.
      tasks: [
          {
              'time': '2',
              'period': 'AM',
              'activity_title': 'Finish Tutorial Series',
              'activity_description': '#ReactForNewbies'
          }, {
              'time': '9',
              'period': 'AM',
              'activity_title': 'Meeting with Team Leads',
              'activity_description': 'New Project Kickoff'
          }, {
              'time': '11',
              'period': 'AM',
              'activity_title': 'Call Mom',
              'activity_description': 'Return her call before she kills me'
          }, {
              'time': '3',
              'period': 'PM',
              'activity_title': 'Fix Wifey\'s website',
              'activity_description': 'FB Ads Integration not working'
          }, {
              'time': '6',
              'period': 'PM',
              'activity_title': 'Do DB Backups',
              'activity_description': 'Related to upcoming server migration'
          }
      ]
    }
  }
  addTask(){
    var task = {
      'time': '5', 
      'period': 'AM', 
      'activity_title': 'Jogging', 
      'activity_description': 'Go for a run!'
    };
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
  }

  handleOnToDoAdd(timeText, periodText, activityTitleText, activityDescText){
    //alert(timeText + '\n' + periodText + '\n' + activityTitleText + '\n' +activityDescText);
    var task = {
      time: timeText, 
      period: periodText, 
      activity_title: activityTitleText, 
      activity_description: activityDescText
    };
    this.setState({tasks: this.state.tasks.concat(task)});
  }
/*
  handleTimeChange: function(e) {
   this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },*/
  handleOn2Finished(){
    alert(1);
  }

  handleOn2Delete(){
    alert(2);
  }

  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList 
            tasks={this.state.tasks}
            on2FinishedClick={this.handleOn2Finished.bind(this)} 
            on2DeleteClick={this.handleOn2Delete.bind(this)}
            

           />
          <br/>
          <NewTask onToDoAdd={this.handleOnToDoAdd.bind(this)} />
          <AddButton onClick={this.addTask.bind(this)} />
         
      </div>
    );
  }
}

export default App;
