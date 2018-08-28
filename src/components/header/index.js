import React, { Component } from 'react';
import Navigation from '.././navigation';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../icons/logo';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="">
					<div className="logo mx-auto">
						<Link to="/">
							<Logo />
						</Link>
					</div>
						<Navigation />
						
					</div>
			</header>
		);
	}
}

export default Header;


