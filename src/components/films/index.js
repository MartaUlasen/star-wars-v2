import React, { Component } from 'react';
import FilmCard from '.././film-card';
import { Loader } from 'react-feather';

class Films extends Component {
	state = {				
		films: [],
		isLoading: false,
		error: null,
	}

	componentDidMount() {
		this.setState({ isLoading: true  });

		fetch('https://swapi.co/api/films/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, films: data.results });
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}
	
	renderError() {
		if (this.state.error) {
			return <p>Failed to load film data</p>
		}
	}

	render() {
    	const { films, isLoading } = this.state;
		
		return (
			<div className="row">
				{this.renderError()}
				{isLoading
					? <Loader className="icon-loading" size={30} />
					: films.map((film, index) => {
						return <FilmCard key={film.episode_id} data={film}/>
					})
				}
			</div>
		)
	}
}

export default Films;
