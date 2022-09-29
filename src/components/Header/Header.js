import React from 'react';
import logo from '../../../src/Images/Bodybuilding-and-gym-logo-on-transparent-background-PNG.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;