import React, { Component } from 'react';

class FilmCard extends Component {
    render() {
        return (
            <a className="card well film-card" href="/movies/:id">
				<div className="card-body">
					<h4 className="card-title">xcvxv</h4>
					<p className="card-text">xvxcv</p>
					<p className="card-text">xcvxcv</p>
					<p className="card-text"><small className="text-muted">xcvxcvxcv xcxv </small></p>
				</div>
				<div className="left-angle"></div>
				<div className="right-angle"></div>
			</a>
        );
    }
}

export default FilmCard;
