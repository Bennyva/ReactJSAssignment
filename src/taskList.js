import React, { Component } from 'react';
import Task from './task.js';

class TaskList extends Component {
handleOnFinishedClick(task){
    this.props.on2FinishedClick(task);
}
handleOnDeleteClick(task){
    this.props.on2DeleteClick(task);
}
handleEditTask(task){
    this.props.on2EditTask(task);
}
  render() {      
        return (
            <div>
                {this.props.tasks.map(function(task){
                    return <Task
                                id={task.id}
                                time={task.time}
                                period={task.period}
                                activity_title={task.activity_title}
                                activity_description={task.activity_description}
                                onFinishedClick={this.handleOnFinishedClick.bind(this, task)} 
                                onDeleteClick={this.handleOnDeleteClick.bind(this, task)}
                                editTask={this.handleEditTask.bind(this,task)}
                                />
                }, this)
            }
            </div>
    );
  }
}

export default TaskList;
