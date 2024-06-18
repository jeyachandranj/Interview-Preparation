import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="contact-info">
        <p>Email: j.jeyachandran072@gmail.com</p>
        <p>Phone: 7418800609</p>
      </div>
      <div className="social-media">
        <a href="#facebook">Fac ebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
