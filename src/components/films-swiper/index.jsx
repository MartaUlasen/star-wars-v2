import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchFilmsIfNeeded as fetchFilmsIfNeededIfNeededAction } from 'actions/films';
import FilmCard from 'components/film-card';
import Swiper from 'components/swiper';

const compareNumberOfEpisode = (film1, film2) => film1.episode_id - film2.episode_id;

class FilmsSwiper extends Component {
    componentDidMount = () => {
        const { fetchFilmsIfNeeded } = this.props;
        fetchFilmsIfNeeded();
    }

    sort = (data) => data.sort(compareNumberOfEpisode);

    render = () => {
        const { data, loading, error } = this.props;
        const sortedData = this.sort(data);
        const filmCards = sortedData.map((film) => (
            <div key={film.episode_id}>
                <FilmCard data={film} />
            </div>
        ));

        return (
            <div className='films-swiper'>
                <div className='title'>Films</div>
                {error && <p>Failed to load film data</p>}
                <div>
                    {
                        loading
                            ? <Loader className='icon-loading' size={30} />
                            : <Swiper>{filmCards}</Swiper>
                    }
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsSwiper);
