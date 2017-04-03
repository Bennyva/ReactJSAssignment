import React from "react";

export default class Home extends React.Component{
	render(){
		return(
			<div>
			<h1>About Excercise Tracker</h1>
		<br />
		<div className="col-md-5">
			<p>This app started as a ReactJS project at WIT for the Software Frameworks module in 2017 second semester.</p>
				 <br />
				<br />
			<h2>Our Startup</h2>
				 <p>
					We started in 2018 to become a fully-functioning company with 14 employees in a small office in California. There we decided to provide mobile tracking services and develop our very well know excercise-tracker app for iPhone and Android.
				</p>
					<h2>Our Founder</h2>
							<p>Benjamin van Arragon founded this website for us and was an amazing team leader.</p>

			</div>
		</div>
		);
	}
}