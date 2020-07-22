import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/logo';
import Navigation from './navigation';
import './header.css';

const Header = () => (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
                <Logo />
            </Link>
        </div>
        <Navigation />
    </header>
);

export default Header;
