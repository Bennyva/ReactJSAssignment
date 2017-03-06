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
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList 
          //this passes all the state values to the component
            {...this.state}
            on2FinishedClick={this.handleOn2Finished.bind(this)} 
            on2DeleteClick={this.handleOn2Delete.bind(this)}
            on2EditTask={this.handleOn2EditTask.bind(this)}
           />
          <br/>
          <NewTask 
            {...this.state}
            onToDoAdd={this.handleOnToDoAdd.bind(this)} 
            onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
            editActivity={this.handleEditActivity.bind(this)}
            clearForm={this.handleClearForm.bind(this)}
          />
          <AddButton onClick={this.addTask.bind(this)} />
         
      </div>
    );
  }
}

export default App;
