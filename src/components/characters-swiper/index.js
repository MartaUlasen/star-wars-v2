import React, { Component } from 'react';
import CharacterCard from '.././character-card';
import Swiper from '.././swiper';
import { Loader } from 'react-feather';
import './characters-swiper.scss';

class CharactersSwiper extends Component {
	state = {
		people: [],
		isLoading: false,
		error: null,
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	getCharacters = (url) => {
		this.setState({ isLoading: true  });

		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, people: data.results, previous: data.previous, next: data.next });
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
		const children = people.map((character, index) => {
			return (<div key={index}>
				<CharacterCard data={character}/>
			</div>)
		});
		return (
			<div className="characters-swiper">
				<div className="title">Characters</div>
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

export default CharactersSwiper;
