import React, { Component } from 'react';
import FilmsSwiper from '.././films-swiper';
import CharactersSwiper from '.././characters-swiper';
import Bb8 from '../../icons/bb8';
import R2d2 from '../../icons/r2d2';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home wrapper">
				<div>
					<Link to="characters/3">
						<R2d2/>
					</Link>
					<Link to="characters/3">
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