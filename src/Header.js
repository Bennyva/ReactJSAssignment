import React from 'react';
import {IndexLink, Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';  


class Header extends React.Component{
	constructor(props) {
    super(props);
  }
	render(){
    	return (
    		<div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="/#/">Work-Out-App</a>
			    </div>
				
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li><a href="/#/addExcercise">Add Excercise<span className="sr-only">(current)</span></a></li>
			        <li><a href="/#/excercises">Excercises</a></li>
					<li><a href="/#/about">About</a></li>

			      </ul>


			    </div>
			  </div>
			</nav>
    		</div>
		);
	}
}

export default Header;
