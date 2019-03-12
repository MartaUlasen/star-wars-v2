import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchCharacters } from 'actions/characters';
import CharacterCard from 'components/character-card';
import Pagination from './pagination';


class Characters extends Component {
    state = {
        currentPage: 1,
    }

	componentDidMount = () => {
        const { fetchCharacters } = this.props;
        fetchCharacters(this.state.currentPage);
	}

    setCurrentPage = (pageNum) => {
        console.log(this.state.currentPage, pageNum)
        this.setState({ currentPage: pageNum });
        
    }

    setCurrentPageInHistory = (pageNum) => {
        const { history, location: { pathname } } = this.props;
        console.log(history)
        history.push({
            pathname,
            search: `?page=${pageNum}`
        });
    }

    onPagination =(pageNum) => {
        this.setCurrentPage(pageNum);
        this.setCurrentPageInHistory(pageNum);
        this.props.fetchCharacters(pageNum);
    }
	
	renderError() {
		const { error } = this.props;

		if (error) {
			return <p>Failed to load film data</p>
		}
	}

	renderPagination = () => {
        const { count } = this.props;

        return (
            <div className="wrapper">
                <Pagination 
                    currentPage={this.state.currentPage} 
                    pageCount={count} 
                    onPagination={this.onPagination}
                />
            </div>
        )
	}

	render() {
        const { isLoading, data } = this.props;
        console.log('render')
		return (
			<div className="wrapper">
				<div className="title">Characters</div>
				{this.renderError()}
				{this.renderPagination()}
				<hr className="separator" noshade="true"/>
				{
					isLoading
					? <Loader className="icon-loading" size={30} />
					:	<ul className="grid">
							{data.map((character, index) => {
								return  <li className="grid__item" key={index}>
											<CharacterCard data={character}/>
										</li>
							})}
						</ul>		
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    ...state.characters,
});

const mapDispatchToProps = {
    fetchCharacters,
}
export default connect(mapStateToProps, mapDispatchToProps)(Characters);