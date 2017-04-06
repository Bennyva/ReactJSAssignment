import React from "react";

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h1>Excercise Tracker Home</h1>
				<br />
				<div className="col-md-5">
				<p>Welcome to the Excercise App. This application allows you to track your daily excercise and search for new excercises</p>
				<br />
				<br />
				<p>
				You can add an excercise on the Add Excercise page by adding Sets, Reps, an Excercise, and if you like, some extra notes about your workout.constructor
				You can search for excercises by name, or sort them by Muscle Group on the Excercises page. Click an excercise for more detail on how to peform said excercise.
				</p></div>
			</div>
		);
	}
}