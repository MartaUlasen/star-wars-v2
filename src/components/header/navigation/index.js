import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<nav className="navigation wrapper">
				<ul className="menu">
					<li className="menu__item">
						<NavLink to="/" className="link home" activeClassName="link--active" exact>Home</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/films" className="link" activeClassName="link--active">Films</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/characters" className="link" activeClassName="link--active">Characters</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;
