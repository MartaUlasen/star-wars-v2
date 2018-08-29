import React, { Component } from 'react';
import { Loader } from 'react-feather';

class Film extends Component {
	state = {
		id: this.props.match.params.id,
		film: [],
		isLoading: false,
		error: null,
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

	rederFilm() {
		const film = this.state.film;

		return (
			<div className="film">
				<h4 className="film-title">
					Episode
					<span className="film-episode">{film.episode_id}</span>:
					<span className="ext-uppercase film-title">{film.title}</span>
				</h4>
				<table className="table table-striped table-hover table-bordered">
					<tbody>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Director:</td>
							<td className="js-director col-8 col-md-9 col-lg-10" >{film.director}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Produser:</td>
							<td className="col-8 col-md-9 col-lg-10">{film.producer}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Date of reliase:</td>
							<td className="col-8 col-md-9 col-lg-10">{film.release_date}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Characters:</td>
							<td className="col-8 col-md-9 col-lg-10">
								<ul className="characters"></ul>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="stage">
					<div className="stage__crawl-text">{film.opening_crawl}</div>
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
