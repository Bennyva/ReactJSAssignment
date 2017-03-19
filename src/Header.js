import React from 'react';
import {IndexLink, Link } from 'react-router';

class Header extends React.Component{
	constructor(props) {
    super(props);
  }
	render(){
    	return (
    		<div>
    			<h1>React App</h1>
			         <ul role="nav">
			                  <li><Link to="/addTask">Add New Task</Link></li>
			                  <li><Link to="/about">About</Link></li>       
			          </ul>
			        
    		</div>
		);
	}
}

export default Header;
