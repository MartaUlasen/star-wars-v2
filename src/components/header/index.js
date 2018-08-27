import React, { Component } from 'react';
import Navigation from '.././navigation';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="logo mx-auto">
						<Link to="/">
							LOGO
						</Link>
					</div>
						<Navigation />
						
					</div>
			</header>
		);
	}
}

export default Header;


