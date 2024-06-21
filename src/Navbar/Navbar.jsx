import React, { useState } from 'react';
import  './Navbar.css';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={`App ${drawerOpen ? 'drawer-open' : ''}`}>
            <header>
                <div className="logo" onClick={toggleDrawer}></div>
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                    <button className="search-button">Search</button>
                </div>
                <nav className="nav-desktop">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Signin</a>
                    <a href="#">Signup</a>
                </nav>
                <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Signin</a>
                    <a href="#">Signup</a>
                </nav>
            </header>
        </div>
    );
    

}

export default Navbar;
