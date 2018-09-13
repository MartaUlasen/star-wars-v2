import React, { Component } from 'react';
import FilmCard from '.././film-card';
import Sorter from './sorter';
import { Loader } from 'react-feather';

const compareReleaseDate = (film1, film2) => {
	const date1 = new Date(film1.release_date);
	const date2 = new Date(film2.release_date);
	
	return date1 - date2;
}

const compareNumberOfEpisode = (film1, film2) => {
	return film1.episode_id - film2.episode_id;
}

class Films extends Component {
	state = {
		films: [],
		isLoading: false,
		error: null,
	}

	componentDidMount = () => {
		this.getFilms();
	}

	sort = (value) => {
		const films = this.state.films;
		if (value === 'Number of episode') {
			films.sort(compareNumberOfEpisode);
		} else {
			films.sort(compareReleaseDate);
		}
		this.setState({ films });
	}

	getFilms = () => {
		this.setState({ isLoading: true  });

		fetch('https://swapi.co/api/films/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				const films = data.results.sort(compareNumberOfEpisode);
				this.setState({ isLoading: false, films });
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

		return (
			<div className="wrapper">
				<Sorter sort={this.sort}/>
				{this.renderError()}
				{
					isLoading
					? <Loader className="icon-loading" size={30} />
					: <ul className="grid">
						{films.map((film) => {
							return <li className="grid__item" key={film.episode_id}>
										<FilmCard  data={film}/>
									</li>
						})}
					</ul>
				}
			</div>
		)
	}
}

export default Films;
