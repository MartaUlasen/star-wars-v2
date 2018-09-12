import React, { Component } from 'react';
import FilmsSwiper from '.././films-swiper';
import CharactersSwiper from '.././characters-swiper';

class Home extends Component {
	render() {
		return (
			<div>
				<FilmsSwiper />
				<CharactersSwiper />
			</div>
			
		)
	}
}

export default Home;