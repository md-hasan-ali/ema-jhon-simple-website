import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Reviews</NavLink>
                <NavLink to="/inventory">Manage inventory here</NavLink>
            </nav>
        </div>

    );
};

export default Header;