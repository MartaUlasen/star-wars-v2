import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const getHrefId = (href) => {
	return href.split('/').filter(function(v){return v;}).pop();
}
class FilmCard extends Component {

	render() {
		const path = "/films/" + getHrefId(this.props.data.url);
		return (
			<Link to={path} className="card film-card">
				<div className="card__body">
					<h4 className="card-title">{this.props.data.title}</h4>
					<p>Episode: {this.props.data.episode_id}</p>
					<p>Director: {this.props.data.director}</p>
					<p><small className="text-muted">{this.props.data.release_date}</small></p>
				</div>
				<div className="left-angle"></div>
				<div className="right-angle"></div>
			</Link>
		);
	}
}

export default FilmCard;
