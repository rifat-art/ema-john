import React from 'react';
import './/Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img className='ema-logo' src={logo} alt="" />

           <div className='menu'>
            <a href="/order">Order</a>
            <a href="/shop">Shop</a>
            <a href="/inventory">Inventory</a>
            <a href="Login">Login</a>
           </div>
        </div>
    );
};

export default Header;