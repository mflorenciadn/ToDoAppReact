import React from 'react';
import logo from '../images/logo.png';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <div className = "Navbar">
            <div className="container-fluid">
                <img className = "Logo" src={logo} alt="React-Logo" whidth="40" height="40" />
                <span className="font-weight-bold">To Do</span>
                <span className="font-weight-light"> App</span>
                <img className = "Logo" src={logo} alt="React-Logo" whidth="40" height="40" />
            </div>
        </div>
    )  
}

export default Navbar;



