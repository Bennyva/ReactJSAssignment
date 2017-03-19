import React from 'react';
import {IndexLink, Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';  

class Footer extends React.Component{
	constructor(props) {
    super(props);
  }
	render(){
    	return (
		 	 <div className="navbar navbar-default navbar-fixed-bottom">
			    <div className="container">
			      <p className="navbar-text">© 2017 - Site Built By Mr. Benjamin Vanarragon. 
			           <a href="https://www.facebook.com/thebenjamindude" target="_blank" >FaceBook</a>
			      </p>
			    </div>
		    </div>
		);
	}
}

export default Footer;
