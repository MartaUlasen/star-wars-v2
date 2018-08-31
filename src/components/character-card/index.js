import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import './character-card.scss';

const getHrefId = (href) => {
	return href.split('/').filter(function(v){return v;}).pop();
}

class CharacterCard extends Component {

    render() {
		const character = this.props.data;
		const path = "/characters/" + getHrefId(character.url);
        return (
			<Link to={path} className="card well chatacter-card">
				<User className="icon-user" size={40} />
				<div className="card-body card-chatacter-body">
					<h4 className="card-chatacter-title js-character-name">{character.name}</h4>
				</div>
				<div className="left-angle"></div>
				<div className="right-angle"></div>
			</Link>
        );
    }
}

export default CharacterCard;