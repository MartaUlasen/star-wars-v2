import React from 'react';
import { Link } from 'react-router-dom';

const getHrefId = (href) => href.split('/').filter((v) => v).pop();

const FilmCard = (props) => {
    const { data } = props;
    const path = `/films/${getHrefId(data.url)}`;
    return (
        <Link to={path} className='card film-card'>
            <div className='card-body'>
                <h4 className='card-title'>{data.title}</h4>
                <p>
                    Episode:
                    {data.episode_id}
                </p>
                <p>
                    Director:
                    {data.director}
                </p>
                <p><small className='text-muted'>{data.release_date}</small></p>
            </div>
        </Link>
    );
};

export default FilmCard;
