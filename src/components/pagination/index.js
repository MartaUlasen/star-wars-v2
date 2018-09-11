import React, { Component } from 'react';

class Pagination extends Component {
	btnHandler = (url) => {
		this.props.getCharacters(url);
	}
	render() {
		return (
			<div className="pagination">
				<button 
					type="button" 
					className="btn" 
					disabled={this.props.previous === null}
					onClick={() => {this.btnHandler(this.props.previous)}}
				>
					Previous
				</button>
				<button 
					type="button" 
					className="btn" 
					disabled={this.props.next === null}
					onClick={() => {this.btnHandler(this.props.next)}}
				>
					Next
				</button>
			</div>
		);
	}
}

export default Pagination;