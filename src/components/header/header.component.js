import React from 'react';
import './header.component.css';

function HeaderComponent() {
    return (
        <div className="main-header">
            <ul className="header__menu">
                <li>Member</li>
                <li>About us</li>
                <li>Products</li>
                <li>Solutions</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default HeaderComponent;