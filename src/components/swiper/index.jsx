import React, { Component } from 'react';
import IdSwiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css';
import './swiper.scss';

const SLIDER_PARAMS = {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
};

class Swiper extends Component {
	constructor(props) {
		super(props)
		this.goNext = this.goNext.bind(this)
		this.goPrev = this.goPrev.bind(this)
		this.swiper = null
	}
	
	goNext() {
		if (this.swiper) this.swiper.slideNext()
	}
	
	goPrev() {
		if (this.swiper) this.swiper.slidePrev()
	}
	
	render() {
		return (
			<div className="swiper">
				<button 
					className="swiper__button prev" 
					type="button"
					onClick={this.goPrev}>
				</button>
				<IdSwiper {...SLIDER_PARAMS} ref={node => {if(node) this.swiper = node.swiper }}>{this.props.children}</IdSwiper>
				<button 
					className="swiper__button next"
					type="button" 
					onClick={this.goNext}>
				</button>
				
			</div>
		)
	}
}

export default Swiper;
