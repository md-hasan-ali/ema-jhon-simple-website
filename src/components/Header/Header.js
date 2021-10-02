import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Shop</a>
                <a href="/shop">Oorder Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;