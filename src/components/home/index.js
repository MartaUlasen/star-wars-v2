import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilmsSwiper from 'components/films-swiper';
import CharactersSwiper from 'components/characters-swiper';
import Bb8 from 'components/bb8';
import R2d2 from 'components/r2d2';
import './home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home wrapper">
				<div>
					<Link to="characters/3">
						<R2d2/>
					</Link>
					<Link to="characters/87">
						<Bb8 />
					</Link>
				</div>
				<FilmsSwiper />
				<CharactersSwiper />
			</div>
			
		)
	}
}

export default Home;