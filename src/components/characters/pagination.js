import React, { Component } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

class Pagination extends Component {
	btnHandler = (url) => {
		this.props.getCharacters(url);
    }
    
	render() {
		return (
			<div className="pagination">
				<button 
					type="button" 
					className="pagination__item" 
					disabled={this.props.previous === null}
					onClick={() => {this.btnHandler(this.props.previous)}}
				>
					<ChevronLeft/>Previous
				</button>
				<button 
					type="button" 
					className="pagination__item" 
					disabled={this.props.next === null}
					onClick={() => {this.btnHandler(this.props.next)}}
				>
					Next<ChevronRight/>
				</button>
			</div>
		);
	}
}

export default Pagination;