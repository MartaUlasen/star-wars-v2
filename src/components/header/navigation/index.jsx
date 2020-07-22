import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav className='navigation wrapper'>
        <ul className='menu'>
            <li className='menu__item'>
                <NavLink to='/' className='link' activeClassName='link--active' exact>Home</NavLink>
            </li>
            <li className='menu__item'>
                <NavLink to='/films' className='link' activeClassName='link--active'>Films</NavLink>
            </li>
            <li className='menu__item'>
                <NavLink to='/characters' className='link' activeClassName='link--active'>Characters</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;
