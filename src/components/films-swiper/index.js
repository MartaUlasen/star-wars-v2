import React, { Component } from 'react';
import FilmCard from '.././film-card';
import Swiper from '.././swiper';
import { Loader } from 'react-feather';
import './films-swiper.scss';

const compareNumberOfEpisode = (film1, film2) => {
	return film1.episode_id - film2.episode_id;
}

class FilmsSwiper extends Component {
	state = {
		films: [],
		isLoading: false,
		error: null,
	}

	componentDidMount = () => {
		this.getFilms();
	}

	getFilms = (value) => {
		this.setState({ isLoading: true  });

		fetch('https://swapi.co/api/films/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				data.results.sort(compareNumberOfEpisode);
				this.setState({ isLoading: false, films: data.results });
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}

	renderError = () => {
		if (this.state.error) {
			return <p>Failed to load film data</p>
		}
	}

	render() {
		const { films, isLoading } = this.state;
		const children = films.map(film => {
			return (<div key={film.episode_id}>
				<FilmCard data={film}/>
			</div>)
		});
		return (
			<div className="films-swiper">
				<div className="films-swiper__title">Films</div>
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

export default FilmsSwiper;
