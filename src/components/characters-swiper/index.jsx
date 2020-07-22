import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import {
    setCharactersPage as setCharactersPageAction,
    fetchCharactersIfNeeded as fetchCharactersIfNeededAction,
} from 'actions/characters';
import { selectCharactersPageData } from 'selectors';
import CharacterCard from 'components/character-card';
import Swiper from 'components/swiper';

const CHARACTERS_PAGE_NUM = 1;

class CharactersSwiper extends Component {
    componentDidMount() {
        const { setCharactersPage, fetchCharactersIfNeeded } = this.props;
        setCharactersPage(CHARACTERS_PAGE_NUM);
        fetchCharactersIfNeeded(CHARACTERS_PAGE_NUM);
    }

    render() {
        const { data, loading, error } = this.props;
        const children = data.map((character) => (
            <div key={character.name}>
                <CharacterCard data={character} />
            </div>
        ));

        return (
            <div className='characters-swiper'>
                <div className='title'>Characters</div>
                {error && <p>Failed to load characters data</p>}
                <div>
                    {
                        loading
                            ? <Loader className='icon-loading' size={30} />
                            : <Swiper>{children}</Swiper>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ characters }) => ({
    ...selectCharactersPageData(characters, characters.currentPage),
});

const mapDispatchToProps = {
    fetchCharactersIfNeeded: setCharactersPageAction,
    setCharactersPage: fetchCharactersIfNeededAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersSwiper);
