import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchFilmsIfNeeded as fetchFilmsIfNeededIfNeededAction } from 'actions/films';
import FilmCard from 'components/film-card';
import Sorter from './sorter';

const compareReleaseDate = (film1, film2) => {
    const date1 = new Date(film1.release_date);
    const date2 = new Date(film2.release_date);

    return date1 - date2;
};

const compareNumberOfEpisode = (film1, film2) => film1.episode_id - film2.episode_id;

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'Number of episode',
        };
    }

    componentDidMount = () => {
        const { fetchFilmsIfNeeded } = this.props;
        fetchFilmsIfNeeded();
    }

    sorterHandler = (sortBy) => {
        this.setState({ sortBy });
    }

    sortData = (data, sortBy) => {
        if (sortBy === 'Number of episode') {
            return data.sort(compareNumberOfEpisode);
        }
        return data.sort(compareReleaseDate);
    }

    render() {
        const { data, loading, error } = this.props;
        const { sortBy } = this.state;
        const sortedData = this.sortData(data, sortBy);
        return (
            <div className='wrapper'>
                <div className='title'>Films</div>
                <Sorter sort={this.sorterHandler} />
                <hr className='separator' noshade='true' />
                {error && <p>Failed to load film data</p>}
                {
                    loading
                        ? <Loader className='icon-loading' size={30} />
                        : (
                            <ul className='grid'>
                                {sortedData.map((film) => (
                                    <li className='grid__item' key={film.episode_id}>
                                        <FilmCard data={film} />
                                    </li>
                                ))}
                            </ul>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state.films,
});

const mapDispatchToProps = {
    fetchFilmsIfNeeded: fetchFilmsIfNeededIfNeededAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
