import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchCharacters } from 'actions/characters';
import CharacterCard from 'components/character-card';
import Swiper from 'components/swiper';
import './characters-swiper.scss';

class CharactersSwiper extends Component {
	componentDidMount() {
		const { fetchCharacters } = this.props;
        fetchCharacters(1);
	}
	
	renderError() {
        const { error } = this.props;
		if (error) {
			return <p>Failed to load characters data</p>
		}
	}

	render() {
		const { data, isLoading } = this.props;
		const children = data.map((character, index) => {
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
const mapStateToProps = (state) => ({
    ...state.characters,
});

const mapDispatchToProps = {
    fetchCharacters,
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersSwiper);
