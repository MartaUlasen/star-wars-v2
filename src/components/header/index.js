import React, { Component } from 'react';
import Navigation from '.././navigation';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../icons/logo';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<Navigation />
			</header>
		);
	}
}

export default Header;


