import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
        <nav className="navigation-starwars">
            <ul className="nav nav-pills menu">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link home" activeClassName="nav-link--active" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/films" className="nav-link" activeClassName="nav-link--active">Films</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/characters" className="nav-link" activeClassName="nav-link--active">Characters</NavLink>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Navigation;
