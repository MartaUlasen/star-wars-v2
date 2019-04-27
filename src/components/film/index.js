import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilmIfNeeded } from 'actions/film';
import { selectFilmDataById } from 'selectors';
import { Loader } from 'react-feather';
import CharacterLink from './characterLink';
import './film.scss';

class Film extends Component {
    componentDidMount = () => {
        const { fetchFilmIfNeeded } = this.props;
        const { match: { params: { id } } } = this.props; 
        fetchFilmIfNeeded(id);
    }

	renderError() {
		if (this.props.error) {
			return <p>Failed to load film data</p>
		}
    }

    renderCharacterError() {
        const { charactersError } = this.props;
		if (charactersError) {
			return <p>Failed to load film data</p>
		}
	}

	renderFilm() {
        const { data, isLoadingCharacters } = this.props;
        const { characters } = this.props.data;

		return (
			<div className="film wrapper">
				<h4 className="film__title">
					Episode
					<span className="film__episode">{data.episode_id}</span>:
					<span className="film__name uppercase">{data.title}</span>
				</h4>
                <div className="grid-20-80">
                    <div className="grid-20-80__item">Director:</div>
                    <div className="grid-20-80__item">{data.director}</div>
                    <div className="grid-20-80__item">Produser:</div>
                    <div className="grid-20-80__item">{data.producer}</div>
                    <div className="grid-20-80__item">Date of reliase:</div>
                    <div className="grid-20-80__item">{data.release_date}</div>
                    <div className="grid-20-80__item">Characters:</div>
                    <ul className="grid-20-80__item film__characters">
                        {this.renderCharacterError()}
                        {
                            isLoadingCharacters
                            ? <Loader className="icon-loading" font={20} />
                            : characters && characters.map((character) => {
                                return (
                                    <li key={character}>
                                        <CharacterLink id={character}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
				<div className="stage">
					<div className="stage__perspective">
						<div className="stage__crawl-text">{data.opening_crawl}</div>
					</div>
				</div>
			</div>
		)
		
	}

	render() {
		const { isLoading } = this.props;
		return (
			<div>
				{this.renderError()}
				{isLoading
					? <Loader className="icon-loading" font={20} />
					: this.renderFilm()
				}
			</div>				
        );
    }
}

const mapStateToProps = ({ film }, { match: { params: { id } } }) => ({
    id,
    ...selectFilmDataById(film, id),
});

const mapDispatchToProps = {
    fetchFilmIfNeeded,
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
