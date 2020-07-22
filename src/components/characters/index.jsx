import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import queryString from 'query-string';
import {
    setCharactersPage as setCharactersPageAction,
    fetchCharactersIfNeeded as fetchCharactersIfNeededAction,
} from 'actions/characters';
import { selectCharactersPageData } from 'selectors';
import CharacterCard from 'components/character-card';
import Pagination from './pagination';

class Characters extends Component {
    componentDidMount = () => {
        const { setCharactersPage, fetchCharactersIfNeeded } = this.props;
        const {
            currentPage, location: { search },
        } = this.props;
        const pageFromQuery = queryString.parse(search).page;
        const pageNum = pageFromQuery != null ? parseInt(pageFromQuery, 10) : currentPage;

        setCharactersPage(pageNum);
        fetchCharactersIfNeeded(pageNum);
    }

    onPagination = (pageNum) => {
        const { setCharactersPage, fetchCharactersIfNeeded } = this.props;
        this.setCurrentPageInHistory(pageNum);
        setCharactersPage(pageNum);
        fetchCharactersIfNeeded(pageNum);
    }

    setCurrentPageInHistory = (pageNum) => {
        const { history, location: { pathname } } = this.props;

        history.push({
            pathname,
            search: `?page=${pageNum}`,
        });
    }

    renderError = () => {
        const { error } = this.props;

        if (error) {
            return <p>Failed to load film data</p>;
        }
        return null;
    }

    renderPagination = () => {
        const { currentPage, count } = this.props;

        return (
            <div className='wrapper'>
                <Pagination
                    currentPage={currentPage}
                    pageCount={count}
                    onPagination={this.onPagination}
                />
            </div>
        );
    }

    render() {
        const { data, loading } = this.props;

        return (
            <div className='wrapper'>
                <div className='title'>Characters</div>
                {this.renderError()}
                {this.renderPagination()}
                <hr className='separator' noshade='true' />
                {
                    loading
                        ? <Loader className='icon-loading' size={30} />
                        : (
                            <ul className='grid'>
                                {data.map(((character) => (
                                    <li className='grid__item' key={character.name}>
                                        <CharacterCard data={character} />
                                    </li>
                                )))}
                            </ul>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = ({ characters }) => ({
    count: characters.count,
    currentPage: characters.currentPage,
    ...selectCharactersPageData(characters, characters.currentPage),
});

const mapDispatchToProps = {
    fetchCharactersIfNeeded: setCharactersPageAction,
    setCharactersPage: fetchCharactersIfNeededAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Characters);
