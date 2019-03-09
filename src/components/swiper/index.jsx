import React, { Component } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import ReactSwiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css';
import './swiper.scss';

const SLIDER_PARAMS = {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	//loopFillGroupWithBlank: true,
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
			<React.Fragment>
				<button 
					className="swiper__button prev" 
					type="button"
					onClick={this.goPrev}>
					<ChevronLeft size={34}/>
				</button>
				<ReactSwiper {...SLIDER_PARAMS} ref={node => {if(node) this.swiper = node.swiper }}>{this.props.children}</ReactSwiper>
				<button 
					className="swiper__button next"
					type="button" 
					onClick={this.goNext}>
					<ChevronRight size={34}/>
				</button>
				
			</React.Fragment>
		)
	}
}

export default Swiper;
