import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="container header-content">
        <a href="/" className="logo">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#2EE6D6" strokeWidth="2" />
            <path d="M50 20 Q70 40 60 70 Q50 85 40 70 Q30 40 50 20 Z" fill="#2EE6D6" />
            <circle cx="50" cy="50" r="8" fill="#2EE6D6" />
          </svg>
          <span className="logo-text">Aromed</span>
        </a>
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose">Why Choose Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="primary-btn header-cta">Get Consultation</a>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
