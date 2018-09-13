import React, { Component } from 'react';

class Sorter extends Component {
	selectHandler = (e) => {
		this.props.sort(e.target.value);
	}
	render() {
		return (
			<div className="block-right">
				<select className="sorter" onChange={(e)=> {this.selectHandler(e)}}>
					<option className="option">Number of episode</option>
					<option className="option">Date of reliase</option>
				</select>
			</div>
			
		);
	}
}

export default Sorter;