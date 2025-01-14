import React from "react";
import "@/pages/css/MainContent.css";

export default function MainContent() {
  return (
    <main className="main-content">
      <section className="hero-section" id="home">
        <div className="hero-content">
          
          <h1 className="hero-title">
            Dive into Delights Of Delectable <span className="highlight">Food</span>
          </h1>
          <p className="hero-description">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="cta-group">
            <button className="cta-button primary">Order Now</button>
            <button className="cta-button secondary">
              <span className="play-icon"></span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>
    </main>
  );
}
