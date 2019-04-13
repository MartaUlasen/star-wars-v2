import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import { fetchFilmsIfNeeded } from 'actions/films';
import FilmCard from 'components/film-card';
import Swiper from 'components/swiper';

const compareNumberOfEpisode = (film1, film2) => {
	return film1.episode_id - film2.episode_id;
}

class FilmsSwiper extends Component {
	componentDidMount = () => {
        const { fetchFilmsIfNeeded } = this.props;
        fetchFilmsIfNeeded();
    }

    sort(data) {  
        return data.sort(compareNumberOfEpisode);
    }

	renderError = () => {
        const { error } = this.props;
		if (error) {
			return <div><p>Failed to load film data</p></div>
		}
	}

	render() {
        const { data, isLoading } = this.props;
        const sortedData = this.sort(data);
		const children = sortedData.map(film => {
			return (<div key={film.episode_id}>
				<FilmCard data={film}/>
			</div>)
        });
        
		return (
			<div className="films-swiper">
				<div className="title">Films</div>
				{this.renderError()}
				<div>
					{
						isLoading
							? <Loader className="icon-loading" size={30} />
							: <Swiper children={children}/>
					}
				</div>
			</div>
        )
	}
}


const mapStateToProps = (state) => ({
    ...state.films,
});

const mapDispatchToProps = {
    fetchFilmsIfNeeded,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsSwiper);
