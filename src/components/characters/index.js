import React, { Component } from 'react';
import CharacterCard from '.././character-card';
import { Loader } from 'react-feather';

class Characters extends Component {
	state = {				
		people: [],
		isLoading: false,
		error: null,
	}

	componentDidMount() {
		this.setState({ isLoading: true  });

		fetch('https://swapi.co/api/people/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, people: data.results });
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}
	
	renderError() {
		if (this.state.error) {
			return <p>Failed to load characters data</p>
		}
	}

	render() {
    	const { people, isLoading } = this.state;

		return (
			<div className="row">
				{this.renderError()}
				{isLoading
					? <Loader className="icon-loading" font={20} />
					: people.map((character, index) => {
						return <CharacterCard key={index} data={character}/>
					})
				}
			</div>
		)
	}
}

export default Characters;