import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilmsSwiper from 'components/films-swiper';
import CharactersSwiper from 'components/characters-swiper';
import r2d2 from 'img/r2d2.svg';
import bb8 from 'img/bb8.svg';
import './home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home wrapper">
				<div className="characters-pictures">
					<Link className="characters-pictures__item" to="characters/3">
						<img className="icon-r2d2" src={r2d2} alt="" />
					</Link>
					<Link className="characters-pictures__item" to="characters/87">
                        <img className="icon-bb8" src={bb8} alt="" />
					</Link>
				</div>
				<FilmsSwiper />
				<CharactersSwiper />
			</div>
			
		)
	}
}

export default Home;
