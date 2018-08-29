import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const getHrefId = (href) => {
	return href.split('/').filter(function(v){return v;}).pop();
}
class FilmCard extends Component {

    render() {
		const path = "/films/" + getHrefId(this.props.data.url);
        return (
			<div className="col-sm-4 mb-3">
				<Link to={path} className="card well film-card">
					<div className="card-body">
						<h4 className="card-title">{this.props.data.title}</h4>
						<p className="card-text">Episode: {this.props.data.episode_id}</p>
						<p className="card-text">Director: {this.props.data.director}</p>
						<p className="card-text"><small className="text-muted">{this.props.data.release_date}</small></p>
					</div>
					<div className="left-angle"></div>
					<div className="right-angle"></div>
				</Link>
			</div>
        );
    }
}

export default FilmCard;
