// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			mood: "happy"
		};
	}

	handleClick = () => {
		const mood = (this.state.mood === "happy" ? "sad" : "happy");
		this.setState({mood: mood});
	}

	render() {
		return (
			<div onClick={this.handleClick} >
				{this.state.mood}
			</div>
		)
	}
}