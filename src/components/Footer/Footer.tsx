import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-col footer-branding">
          <a href="/" className="logo">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#2EE6D6" strokeWidth="2" />
              <path d="M50 20 Q70 40 60 70 Q50 85 40 70 Q30 40 50 20 Z" fill="#2EE6D6" />
              <circle cx="50" cy="50" r="8" fill="#2EE6D6" />
            </svg>
            <span className="logo-text">Aromed</span>
          </a>
          <p className="footer-tagline">Precision in Every Claim. Partnership in Every Success.</p>
          <p className="footer-intro">Optimizing revenue and empowering healthcare practices nationwide.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose">Why Choose Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#medical-billing">Medical Billing</a></li>
            <li><a href="#medical-coding">Medical Coding</a></li>
            <li><a href="#rcm-services">RCM Services</a></li>
            <li><a href="#credentialing">Credentialing</a></li>
            <li><a href="#denial-management">Denial Management</a></li>
            <li><a href="#ar-follow-up">AR Follow-up</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> info@aromedbilling.com</p>
          <p><strong>Address:</strong> 123 Healthcare Drive, Medical City, MC 12345</p>
          <div className="social-icons">
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#twitter" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-legal">
          <p>&copy; 2024 Aromed Billing & Coding. All rights reserved.</p>
          <p>
            <a href="#privacy">Privacy Policy</a> |
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
