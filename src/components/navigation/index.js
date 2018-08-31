import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

class Navigation extends Component {
	render() {
		return (
			<nav className="navigation-starwars">
				<ul className="nav menu">
					<li>
						<NavLink to="/" className="link home" activeClassName="link--active" exact>Home</NavLink>
					</li>
					<li>
						<NavLink to="/films" className="link" activeClassName="link--active">Films</NavLink>
					</li>
					<li>
						<NavLink to="/characters" className="link" activeClassName="link--active">Characters</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;
