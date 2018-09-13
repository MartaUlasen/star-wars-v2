import React, { Component } from 'react';
import FilmsSwiper from '.././films-swiper';
import CharactersSwiper from '.././characters-swiper';

class Home extends Component {
	render() {
		return (
			<div className="home wrapper">
				<FilmsSwiper />
				<CharactersSwiper />
			</div>
			
		)
	}
}

export default Home;