import React, { Component } from 'react';
import Task from './task.js';

class TaskList extends Component {
handleOnFinishedClick(activityTitleText){
    var aTT = activityTitleText;
    this.props.on2FinishedClick(aTT);
}
handleOnDeleteClick(){
    this.props.on2DeleteClick();
}
  render() {      
        return (
            <div>
                {this.props.tasks.map(function(task){
                    return <Task
                                time={task.time}
                                period={task.period}
                                activity_title={task.activity_title}
                                activity_description={task.activity_description}
                                onFinishedClick={this.handleOnFinishedClick.bind(this)} 
                                onDeleteClick={this.handleOnDeleteClick.bind(this)}/>
                }, this)
            }
            </div>
    );
  }
}

export default TaskList;
