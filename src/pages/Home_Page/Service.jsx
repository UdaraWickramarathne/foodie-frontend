import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/App.css";

function Service() {
  return (
    <div className="services-section" id='services'>
      <div className="services-content">
        <h5>Our Story & Services</h5>
        <h1>Our Culinary Journey And Services</h1>
        <p>
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
        </p>
        <button className="explore-btn">Explore</button>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-utensils"></i>
          <h3>Catering</h3>
          <p>Delight your guests with our flavors and presentation</p>
        </div>
        <div className="service-card">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>We deliver your order promptly to your door</p>
        </div>
        <div className="service-card">
          <i className="fas fa-shopping-cart"></i>
          <h3>Online Ordering</h3>
          <p>Explore menu & order anytime using our Online Ordering</p>
        </div>
        <div className="service-card">
          <i className="fas fa-gift"></i>
          <h3>Gift Cards</h3>
          <p>Give the gift of exceptional dining with Food Gift Cards</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
