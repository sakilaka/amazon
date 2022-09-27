import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-style'>
           <img src={logo} alt="" />
           <div>
            <a href="/home">Home</a>
            <a href="/order">Order</a>
            <a href="?invemtory">Inventory</a>
            <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Header;