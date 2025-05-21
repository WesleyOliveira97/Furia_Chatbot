import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Header.css';
// Import logo when available
// import logo from '../assets/images/logo.png';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* Use a placeholder until you have a logo */}
          <div className="logo-placeholder">FC</div>
          <h1>Furia Chatbot</h1>
        </div>
        <nav className={`nav ${isNavActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleNav}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
