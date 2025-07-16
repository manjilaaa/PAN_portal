import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import image from '../Assets/navImage.png';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle menu visibility
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>

      <div className={`right ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Homepage
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link 
              to="/Register" 
              className={`nav-link ${location.pathname === "/Register" ? "active" : ""}`}
            >
              Registration
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link 
              to="/fetch" 
              className={`nav-link ${location.pathname === "/fetch" ? "active" : ""}`}
            >
              Fetch
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
