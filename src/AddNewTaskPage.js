import React from 'react';
import Date from './date.js';
import Avatar from './avatar.js';
import AddButton from './addButton.js';
import NewTask from './newTask.js';
import TaskList from './taskList.js'

class AddNewTaskPage extends React.Component{
//// we have to bind the handleClick() function here to make it context-aware and all we are doing here is calling the onClick() function which got passed as a prop and that in turn will call the initial addTask() function.
 // going to make our component context-aware

  constructor(props){//This works the same way constructors work in any object oriented programming. Remember that every react component is a class primarily so this is how we override the constructor method to have it do some stuff whenever the class is instantiated.
    super(props);//If you come from a Java background, this would be familiar to you, it works the same way. The super() method is required to be called inside the constructor method before you can do anything else. It is used to invoke the constructor of the component it is inheriting from
    this.state = { //This is where we define our initial state now. Interesting thing to note is that the state is an object. This is really neat because assuming we had more than just a list of tasks to initialize, we could simply add another property to the state object. Also back to why the super() method is important, it’s because before it’s called, this is uninitialized, so we can’t access state or anything else.
      isEdit:0,
      tasks: [
          {
              'id': 1,
              "reps": '2',
              "sets": '4',
              'activity_title': 'Push-Ups',
              'activity_description': 'left elbow is weaker'
          }, {
              'id': 2,
              "reps": '9',
              "sets": '4',
              'activity_title': 'Bench Press',
              'activity_description': ''
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
      'reps': '5',
      'sets': 'AM',
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
      reps: newTask.reps,
      sets: newTask.sets,
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
          task.reps + ' ' + task.sets + '\n' +
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
      reps: task.reps,
      sets: task.sets
    });
    console.log('handle on 2 edit task');
  }

  //allows us to edit the text in the controlled Component
  handleEditActivity(name, value){
    var activityTitle, activityDesc, reps, period;
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
    }else if(name === 'reps'){
      reps = value;
      this.setState({
     reps:reps
    });
    }else if(name ==='sets'){
      sets = value;
      this.setState({
     sets: sets
    });
    }else{
      console.log('error in handleEditActivity');
    }
    console.log('handle edit activity');

   /* this.setState({
      activity_title: activityTitle,
      activity_description: activityDesc,
      reps: reps,
      sets: sets
    });*/
  }

  handleClearForm(){

      this.setState({
      activity_title: "",
      activity_description: "",
      reps:"-",
      sets: "-"
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
	render(){
    	return (
		 <div style={{padding: '30px 30px'}}>
        
          <Date />
          <br />

          <NewTask 
            {...this.state}
            onToDoAdd={this.handleOnToDoAdd.bind(this)} 
            onToDoUpdate={this.handleOnToDoUpdate.bind(this)}
            editActivity={this.handleEditActivity.bind(this)}
            clearForm={this.handleClearForm.bind(this)}
          />

          <br />
          <br />
          <TaskList 
          //this passes all the state values to the component
            {...this.state}
            on2FinishedClick={this.handleOn2Finished.bind(this)} 
            on2DeleteClick={this.handleOn2Delete.bind(this)}
            on2EditTask={this.handleOn2EditTask.bind(this)}
           />
          <br/>
          

         
      </div>
		);
	}
}

export default AddNewTaskPage;