import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCharacterDataById } from 'selectors';

const CharacterLink = (props) => {
    const { id, data } = props;
    const path = `/characters/${id}`;
    return (
        <Link to={path} className='link link--character'>{data.name}</Link>
    );
};

const mapStateToProps = ({ character }, { id }) => ({
    ...selectCharacterDataById(character, id),
});

export default connect(mapStateToProps)(CharacterLink);
