import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import './character-card.scss';

const getHrefId = (href) => href.split('/').filter((v) => v).pop();

const CharacterCard = (props) => {
    const { data } = props;
    const path = `/characters/${getHrefId(data.url)}`;
    return (
        <Link to={path} className='card card--character'>
            <div className='card-body--character'>
                <User className='icon-user' size={40} />
                <h4 className='card-chatacter-title js-character-name'>{data.name}</h4>
            </div>
        </Link>
    );
};

export default CharacterCard;
