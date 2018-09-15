import React, { Component } from 'react';
import { Loader } from 'react-feather';
import './film.scss';

class Film extends Component {
	state = {
		id: this.props.match.params.id,
		film: [],
		isLoading: false,
		error: null,
		characters: [],
	}

    componentDidMount() {
		this.setState({ isLoading: true  });
		const url = 'https://swapi.co/api/films/' + this.state.id + '/';
		
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, film: data });
				return data;
			})
			.then(this.getCaracters)
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}
	
	getCaracters = ({ characters }) => {
		const characterPromises = characters.map(url =>
			fetch(url)
				.then(response => {
					return response.json();
				})
		);

		Promise.all(characterPromises)
			.then(characters => { 
				this.setState({ characters });
			})
			.catch(error => {
				console.error(error);
			})
	}

	renderError() {
		if (this.state.error) {
			return <p>Failed to load film data</p>
		}
	}

	rederFilm() {
		const {film, characters} = this.state;

		return (
			<div className="film wrapper">
				<h4 className="film__title">
					Episode
					<span className="film__episode">{film.episode_id}</span>:
					<span className="film__name uppercase">{film.title}</span>
				</h4>
				<div className="grid">
					<div className="grig__item">
						<div>Director:</div>
						<div>{film.director}</div>
						<div>Produser:</div>
						<div>{film.producer}</div>
						<div>Date of reliase:</div>
						<div>{film.release_date}</div>
					</div>
					<div className="grig__item">
						<div>Characters:</div>
						<ul className="film__characters">
							{characters.map((character, index) => {
								return <li key={index}>{character.name}</li>
							})}
						</ul>
					</div>
				</div>
				<table className="table">
					<tbody>
						<tr className="table__row">
							<td>Director:</td>
							<td>{film.director}</td>
						</tr>
						<tr className="table__row">
							<td>Produser:</td>
							<td>{film.producer}</td>
						</tr>
						<tr className="table__row">
							<td>Date of reliase:</td>
							<td>{film.release_date}</td>
						</tr>
						<tr className="table__row">
							<td>Characters:</td>
							<td>
								<ul className="film__characters">
									{characters.map((character, index) => {
										return <li key={index}>{character.name}</li>
									})}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="stage">
					<div className="stage__perspective">
						<div className="stage__crawl-text">{film.opening_crawl}</div>
					</div>
				</div>
			</div>
		)
		
	}

	render() {
		const isLoading = this.state.isLoading;
		return (
			<div>
				{this.renderError()}
				{isLoading
					? <Loader className="icon-loading" font={20} />
					: this.rederFilm()
				}
			</div>				
        );
    }
}

export default Film;
