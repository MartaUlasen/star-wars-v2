import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    fetchCharacterIfNeeded as fetchCharacterIfNeededAction,
} from 'actions/character';
import { selectCharacterDataById } from 'selectors';
import { Loader, User } from 'react-feather';

class Character extends Component {
    componentDidMount = () => {
        const { fetchCharacterIfNeeded } = this.props;
        const { match: { params: { id } } } = this.props;
        fetchCharacterIfNeeded(id);
    }

    renderError = () => {
        const { error } = this.props;
        if (error) {
            return <p>Failed to load character data</p>;
        }
        return null;
    }

    renderCharacter = () => {
        const { data } = this.props;
        return (
            <div className='grid-20-80 wrapper'>
                <div className='grid-20-80__item grid-20-80__item-title'>
                    <User className='icon-user' size={80} />
                </div>
                <div className='grid-20-80__item'>Name:</div>
                <div className='grid-20-80__item'>{data.name}</div>
                <div className='grid-20-80__item'>Gender:</div>
                <div className='grid-20-80__item'>{data.gender}</div>
                <div className='grid-20-80__item'>Birthday:</div>
                <div className='grid-20-80__item'>{data.birth_year}</div>
            </div>
        );
    }

    render() {
        const { loading } = this.props;
        return (
            <div>
                {this.renderError()}
                {loading
                    ? <Loader className='icon-loading' size={20} />
                    : this.renderCharacter()}
            </div>
        );
    }
}

const mapStateToProps = ({ character }, { match: { params: { id } } }) => ({
    id,
    ...selectCharacterDataById(character, id),
});

const mapDispatchToProps = {
    fetchCharacterIfNeeded: fetchCharacterIfNeededAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
