import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function Navbar({pic}) {
    const [drawerOpen, setDrawerOpen] = useState(false);


    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
       
        <div className={`App ${drawerOpen ? 'drawer-open' : ''}`}>
            
            <header> 
               

                <div className="left-section">
                    {/* <div className="" onClick={toggleDrawer} ><img src="" alt=""  /></div>
                     */}
                     
                     <div className="logoo">

                        
                        <img src={pic} alt="Overlay" className="overlay" />
                    </div>

                   <div className="brand-text"><Link className='brand' to="/"> FoodScape</Link></div>
                    <nav className="nav-desktop">
                     
                        <Link to="/">Home</Link>
                        <Link to="/product">Products</Link>
                        <Link to="/Chatbot">FoodGPT</Link>
                        <Link to="/Login">SignIn</Link>
                    </nav>
                </div> 
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                    <button className="search-button">Search</button>
                </div>
                <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <button className="drawer-back-button" onClick={toggleDrawer}>&larr;</button>
                    <Link to="/" onClick={closeDrawer}>Home</Link>
                    <Link to="/product" onClick={closeDrawer}>Products</Link>
                    <Link to="/" onClick={closeDrawer}>Signin</Link> 
                    <Link to="/" onClick={closeDrawer}>Signup</Link>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
