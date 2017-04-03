//sample react component

import React, { Component } from 'react';
import './App.css';

import AddButton from './addButton.js';
import NewTask from './newExcercise.js';
import { Router, ReactRouter ,Route, Link, IndexRoute, hashHistory, browserHistory, Switch} from 'react-router';
import {Navbar,Nav, NavItem, NavDropdown, MenuItem, Input, Button} from 'react-bootstrap';
import NavBen from './Header.js';
import Tasks from './Tasks.js';
import Home from './Home.js';
import Add from './Add.js';

class addButtonView extends Component {
//// we have to bind the handleClick() function here to make it context-aware and all we are doing here is calling the onClick() function which got passed as a prop and that in turn will call the initial addTask() function.
 // going to make our component context-aware

  constructor(){//This works the same way constructors work in any object oriented programming. Remember that every react component is a class primarily so this is how we override the constructor method to have it do some stuff whenever the class is instantiated.
    super();//If you come from a Java background, this would be familiar to you, it works the same way. The super() method is required to be called inside the constructor method before you can do anything else. It is used to invoke the constructor of the component it is inheriting from
    }

  addTask(){
    alert(1);
  }

  


  render() {
    return (
      <div>
        <AddButton onClick={this.addTask.bind(this)} />
      </div>
    );
  }
}
export default addButtonView;
