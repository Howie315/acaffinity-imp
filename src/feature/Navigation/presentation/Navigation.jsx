// NavBar.js
import React from 'react';
import './Navbar.css'; // Importing the CSS file

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">AC Infinity</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
