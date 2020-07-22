import React, { Component } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import ReactSwiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import './swiper.scss';

const SLIDER_PARAMS = {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
};

class Swiper extends Component {
	swiperRef = React.createRef()
	
	goNext = () => {
        if (this.swiperRef.current) {
            this.swiperRef.current.swiper.slideNext();
        }
	}
	
	goPrev = () => {
		if (this.swiperRef.current) {
            this.swiperRef.current.swiper.slidePrev();
        }
    }
	
	render() {
		return (
			<div className="swiper">
				<button 
					className="swiper__button prev" 
					type="button"
					onClick={this.goPrev}>
					<ChevronLeft size={34}/>
				</button>
				<ReactSwiper {...SLIDER_PARAMS} ref={this.swiperRef}>{this.props.children}</ReactSwiper>
				<button 
					className="swiper__button next"
					type="button" 
					onClick={this.goNext}>
					<ChevronRight size={34}/>
				</button>
			</div>
		)
	}
}

export default Swiper;
