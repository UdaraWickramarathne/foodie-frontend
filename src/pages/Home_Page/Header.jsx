
import React from "react";
import { Link } from "react-router-dom";
import "@/pages/css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#offers" className="nav-link">Offers</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="cart">
          {/* Use Link instead of a regular anchor tag */}
          <Link to="/cart">
            <img src="src/assets/shopping-cart.png" alt="Cart" />
          </Link>
        </div>
        <button className="contact-btn">
          Login
        </button>
      </div>
    </header>
  );
}
