import React, { Component } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

class Pagination extends Component {
	btnHandler = (numb) => {
        const {
            onPagination, 
            currentPage 
        } = this.props;

        const pageNum = currentPage + numb;
        onPagination(pageNum);
    }
    
	render() {
        const { currentPage, pageCount } = this.props;
		return (
			<div className="pagination">
				<button 
					type="button" 
					className="pagination__item" 
					disabled={currentPage <= 1}
					onClick={() => {this.btnHandler(-1)}}
				>
					<ChevronLeft/>Previous
				</button>
				<button 
					type="button" 
					className="pagination__item" 
					disabled={currentPage >= pageCount / 10}
					onClick={() => {this.btnHandler(1)}}
				>
					Next<ChevronRight/>
				</button>
			</div>
		);
	}
}

export default Pagination;