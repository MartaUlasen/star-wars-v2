import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { setCharactersPage, fetchCharactersIfNeeded } from 'actions/characters';
import CharacterCard from 'components/character-card';
import Swiper from 'components/swiper';

const CHARACTERS_PAGE_NUM = 1;

class CharactersSwiper extends Component {
	componentDidMount() {
        const { setCharactersPage, fetchCharactersIfNeeded } = this.props;
        setCharactersPage(CHARACTERS_PAGE_NUM)
        fetchCharactersIfNeeded(CHARACTERS_PAGE_NUM);
	}
	
	renderError() {
        const { error } = this.props;
		if (error) {
			return <div><p>Failed to load characters data</p></div>
		}
	}

	render() {
		const { data, isLoading } = this.props;
		const children = data.map((character, index) => {
			return (
                <div key={index}>
                    <CharacterCard data={character}/>
                </div>
            )
        });
        
		return (
			<div className="characters-swiper">
				<div className="title">Characters</div>
				{this.renderError()}
				<div>
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

const mapStateToProps = ({ characters }) => ({
    isLoading: characters.isLoading,
    data: characters.dataByPage[CHARACTERS_PAGE_NUM] || [],
    error: characters.error,
});

const mapDispatchToProps = {
    fetchCharactersIfNeeded,
    setCharactersPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersSwiper);
