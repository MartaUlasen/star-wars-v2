import React, { Component } from 'react';
import CharacterCard from '.././character-card';
import Pagination from '.././pagination';
import { Loader } from 'react-feather';

class Characters extends Component {
	state = {				
		people: [],
		isLoading: false,
		error: null,
		previous: null,
		next: null,
	}

	getCharacters = (url) => {
		this.setState({ isLoading: true  });
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, people: data.results, previous: data.previous, next: data.next });
				console.log(this.state.previous, this.state.next )
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	changeFilms = () => {

	}
	
	renderError() {
		if (this.state.error) {
			return <p>Failed to load characters data</p>
		}
	}

	renderPagination = (previous, next) => {
		if((previous !== null) || (next !== null)) {
			return <Pagination previous={previous} next={next} getCharacters={this.getCharacters}/>
		}
	}

	render() {
    	const { people, isLoading, previous, next } = this.state;
		return (
			<React.Fragment>
				<div className="row">
					{this.renderError()}
					{isLoading
						? <Loader className="icon-loading" size={30} />
						: people.map((character, index) => {
							return <CharacterCard key={index} data={character}/>
						})
					}
				</div>
				{this.renderPagination(previous, next)}
			</React.Fragment>
			
		)
	}
}

export default Characters;