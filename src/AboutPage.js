import React from 'react';

class AboutPage extends React.Component{
	constructor(props) {
    super(props);
  }
	render(){
    	return (
    		<div>
    			<h1>Title About</h1>
                <button type="button" onClick={this.props.onClick}></button>
    		</div>
		);
	}
}

export default AboutPage;