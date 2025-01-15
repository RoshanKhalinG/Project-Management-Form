import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import logo from '../assets/logo.jpg';

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Get the current location
  const location = useLocation();

  // Determine the active link based on the current location
  const getActiveLink = () => {
    console.log('Current path:', location.pathname); // Debugging log
    if (location.pathname === '/') return 'PMF';
    if (location.pathname === '/daf') return 'DAF';
    if (location.pathname === '/ilf') return 'ILF';
    return 'PMF'; // Default to PMF for any unrecognized path
  };

  // State to track the active link
  const [activeLink, setActiveLink] = useState(getActiveLink());

  // Update activeLink when location changes
  useEffect(() => {
    setActiveLink(getActiveLink());
  }, [location]);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu after selecting a link
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
       
       
      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick('PMF')}
            className={activeLink === 'PMF' ? 'active' : ''}
          >
            PMF
          </Link>
        </li>
        <li>
          <Link
            to="/daf"
            onClick={() => handleLinkClick('DAF')}
            className={activeLink === 'DAF' ? 'active' : ''}
          >
            DAF
          </Link>
        </li>
        <li>
          <Link
            to="/ilf"
            onClick={() => handleLinkClick('ILF')}
            className={activeLink === 'ILF' ? 'active' : ''}
          >
            ILF
          </Link>
        </li>
      </ul>

      {/* Search Box */}
      <div className={`search-box ${searchOpen ? 'open' : ''}`}>
        <input type="text" placeholder="Search" />
        <img
          src={theme === 'light' ? search_icon_light : search_icon_dark}
          alt="Search"
          onClick={() => setSearchOpen(!searchOpen)}
        />
      </div>

      {/* Theme Toggle */}
      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toggle_light : toggle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
