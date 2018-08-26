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
                    <ul className="nav nav-pills nav-filter invisible">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" 
                            role="button" aria-haspopup="true" aria-expanded="false">Sort by</a>
                            <div className="dropdown-menu">
                                <button className="dropdown-item js-sorter--date" href="#">Date of reliase</button>
                                <button className="dropdown-item js-sorter--episode" href="#">Number of episode</button>
                            </div>
                        </li>
                    </ul>
                </div>
        </header>
    );
  }
}

export default Header;


