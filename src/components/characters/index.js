import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import queryString from 'query-string';
import { setCharactersPage, fetchCharactersIfNeeded } from 'actions/characters';
import CharacterCard from 'components/character-card';
import Pagination from './pagination';


class Characters extends Component {
	componentDidMount = () => {
        const { currentPage, setCharactersPage, fetchCharactersIfNeeded, location: { search } } = this.props;
        const pageFromQuery = queryString.parse(search).page;
        const pageNum = pageFromQuery != null ? parseInt(pageFromQuery, 10) : currentPage;
        setCharactersPage(pageNum);
        fetchCharactersIfNeeded(pageNum);
	}

    setCurrentPageInHistory = (pageNum) => {
        const { history, location: { pathname } } = this.props;
        history.push({
            pathname,
            search: `?page=${pageNum}`
        });
    }

    onPagination = (pageNum) => {
        const { setCharactersPage, fetchCharactersIfNeeded } = this.props;
        this.setCurrentPageInHistory(pageNum);
        setCharactersPage(pageNum);
        fetchCharactersIfNeeded(pageNum);
    }
	
	renderError() {
		const { error } = this.props;

		if (error) {
			return <p>Failed to load film data</p>
		}
	}

	renderPagination = () => {
        const { currentPage, count } = this.props;

        return (
            <div className="wrapper">
                <Pagination 
                    currentPage={currentPage} 
                    pageCount={count} 
                    onPagination={this.onPagination}
                />
            </div>
        )
	}

	render() {
        const { isLoading, data } = this.props;

		return (
			<div className="wrapper">
				<div className="title">Characters</div>
				{this.renderError()}
				{this.renderPagination()}
				<hr className="separator" noshade="true"/>
				{
					isLoading
					? <Loader className="icon-loading" size={30} />
					: (
                        <ul className="grid">
                            {data.map((character, index) => {
                                return (
                                    <li className="grid__item" key={index}>
                                        <CharacterCard data={character}/>
                                    </li>
                                )
                            })}
                        </ul>
                    )		
				}
			</div>
		)
	}
}

const mapStateToProps = ({ characters }) => ({
    currentPage: characters.currentPage,
    isLoading: characters.isLoading,
    data: characters.dataByPage[characters.currentPage] || [],
    count: characters.count,
    error: characters.error,
});

const mapDispatchToProps = {
    setCharactersPage,
    fetchCharactersIfNeeded,
}
export default connect(mapStateToProps, mapDispatchToProps)(Characters);