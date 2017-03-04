import React, { Component } from 'react';
import Task from './task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </div>
    );
  }
}

export default TaskList;