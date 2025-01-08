import React, { useState } from 'react';
import './Navbar.css';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import logo from '../../assets/logo.jpg'; // Import your logo

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
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

      {/* Navigation List */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li
          className={activeLink === 'Home' ? 'active' : ''}
          onClick={() => setActiveLink('Home')}
        >
          PMF
        </li>
        <li
          className={activeLink === 'About' ? 'active' : ''}
          onClick={() => setActiveLink('About')}
        >
          DAF
        </li>
        <li
          className={activeLink === 'Product' ? 'active' : ''}
          onClick={() => setActiveLink('Product')}
        >
          ILF
        </li>
      </ul>

      {/* Search Box */}
      <div className={`search-box ${searchOpen ? 'open' : ''}`}>
        <input type="text" placeholder="Search" />
        <img
          src={theme === 'light' ? search_icon_light : search_icon_dark}
          alt="Search"
          onClick={() => setSearchOpen(!searchOpen)} // Toggle search box visibility
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
