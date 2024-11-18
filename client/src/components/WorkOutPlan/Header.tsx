import React from 'react';
import './css/Header.css';
import logo from '../../logos/small_logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">Hands on Health</div>
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default Header;