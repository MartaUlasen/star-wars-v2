import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchFilms } from 'actions/films';
import FilmCard from 'components/film-card';
import Swiper from 'components/swiper';
import './films-swiper.scss';

const compareNumberOfEpisode = (film1, film2) => {
	return film1.episode_id - film2.episode_id;
}

class FilmsSwiper extends Component {
	componentDidMount = () => {
        const { fetchFilms } = this.props;
        fetchFilms();
    }

    sort(data) {  
        return data.sort(compareNumberOfEpisode);
    }

	renderError = () => {
        const { error } = this.props;
		if (error) {
			return <p>Failed to load film data</p>
		}
	}

	render() {
        const { data, isLoading } = this.props;
        const sortedData = this.sort(data);
		const children = sortedData.map(film => {
			return (<div key={film.episode_id}>
				<FilmCard data={film}/>
			</div>)
		});
		return (
			<div className="films-swiper">
				<div className="title">Films</div>
				<div className="swiper">
					{this.renderError()}
					{
						isLoading
							? <Loader className="icon-loading" size={30} />
							: <Swiper children={children}/>
					}
				</div>
			</div>
			
        )
	}
}


const mapStateToProps = (state) => ({
    ...state.films,
});

const mapDispatchToProps = {
    fetchFilms,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsSwiper);
