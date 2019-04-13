import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchFilm } from 'actions/film';
import './film.scss';

const getHrefId = (href) => {
	return href.split('/').filter(function(v){return v;}).pop();
}

class Film extends Component {
	state = {
		id: this.props.match.params.id,
	}
    componentDidMount = () => {
        const { fetchFilm } = this.props;
        fetchFilm(this.state.id);
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

	rederFilm() {
		const { data, characters, isLoadingCharacters } = this.props;
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
                        {isLoadingCharacters
                            ? <Loader className="icon-loading" font={20} />
                            : characters.map((character, index) => {
                                const path = "/characters/" + getHrefId(character.data.url);
                                return (
                                    <li key={index}>
                                        <Link to={path} className="link link--character">{character.data.name}</Link>
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
					: this.rederFilm()
				}
			</div>				
        );
    }
}

const mapStateToProps = (state) => ({
    ...state.film,
});

const mapDispatchToProps = {
    fetchFilm,
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
