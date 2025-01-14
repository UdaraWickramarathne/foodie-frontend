import React from "react";
import "@/App.css";
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-section logo-section">
          <h2 className="footer-logo">FOODI</h2>
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-section">
          <h3>Useful links</h3>
          <ul>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Main Menu</h3>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>example@email.com</p>
          <p>+64 958 248 966</p>
          <p>No.123,Matara,Colombo</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Technoid | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
