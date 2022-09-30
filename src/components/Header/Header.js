import React from 'react';
import logo from '../../../src/Images/Bodybuilding-and-gym-logo-on-transparent-background-PNG.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h1>Fitness Hub</h1>
        </nav>
    );
};

export default Header;